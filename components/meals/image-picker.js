"use client";
import { useRef } from "react";
import { useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ name, label }) {
  const imageInput = useRef();
  function handlePickeClick() {
    imageInput.current.click();
  }
  const [pickedImage, setPickedImage] = useState();
  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    } else {
      const fileReder = new FileReader();

      fileReder.onload = () => {
        setPickedImage(fileReder.result);
      };

      fileReder.readAsDataURL(file);
    }
  }
  return (
    <div className={classes.picker}>
      <labal htmlFor={name}>{label}</labal>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No image picked yet.</p>
          ) : (
            <Image src={pickedImage} alt="image picked user" fill />
          )}
        </div>
        <input
          id={name}
          name={name}
          className={classes.input}
          type="file"
          accept="image/png , image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          type="button"
          onClick={handlePickeClick}
          className={classes.button}
        >
          Picke an image
        </button>
      </div>
    </div>
  );
}
