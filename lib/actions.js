"use server";
import { redirect } from "next/navigation";
import { saveMeals } from "./meals";
import { revalidatePath } from "next/cache";
function isInValidText(text) {
  return !text || text.trim() == "";
}
export async function shareMeal(prevState, formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isInValidText(meal.title) ||
    isInValidText(meal.summary) ||
    isInValidText(meal.instructions) ||
    isInValidText(meal.creator) ||
    isInValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("inavalid input");
    return { message: "Invalid input!" };
  }
  await saveMeals(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
