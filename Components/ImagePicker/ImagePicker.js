'use client';
import {useRef, useState} from 'react';
import classes from './ImagePicker.module.css'
import Image from 'next/image';

const ImagePicker = ({label, name}) => {
    const [pickedImage, setPickedImage] = useState(null);
    
    const imagePickerRef = useRef();

    const handlePickClick = () =>{
        imagePickerRef.current.click();
    }

    const handleImageChange = (event) =>{
        const file = event.target.files[0];

        if(!file){
            setPickedImage(null);
        }

        if(file){
          const fileReader = new FileReader();
          fileReader.onload = () =>{
              setPickedImage(fileReader.result);
          }
          fileReader.readAsDataURL(file);
        }

       
    }
 
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        
        <button className={classes.button} type="button" onClick={handlePickClick}>
            Pick an Image
        </button>
        
        <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet</p>}
            {pickedImage &&(
                <Image src={pickedImage} alt="The image selected by the user." fill/>
            )}
        </div>
       
        <input 
         className={classes.input}
         type="file"
         id={name} 
         name={name}
         accept="image/png, image/jpg"
         ref={imagePickerRef}
         required
         onChange={handleImageChange}
        />

      </div>
      
      
    </div>
  )
}

export default ImagePicker
