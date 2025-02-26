import React from 'react'
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import "./style.css";

export default function ImgCard(props) {
  return (
    <div className='image-card'>
        <img src = {img1} />
        <img src = {img2} />
        <p className='image-card-caption'>
            {props.newImg}
        </p>
    </div>
  )
}

