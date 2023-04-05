import React from "react";
import './index.css';
import Images from "./Images";
import { Link } from "react-router-dom";
function Card(props){
  return(
    <>
  <div className='cards'>
  <div className='card'>
  <Images imgsrc={props.imgsrc} />
    <div className='card_inf'>
      <span className='card_category'>{props.title}</span>
      <h3 className='card_title'>{props.sname}</h3>
      <a href={props.link} target='_blank'>
     
        <Link  className="button1"  to="./infoo" >CarInfo</Link>
      </a>
    </div>
  </div>
  </div>
  </>
  )
}

export default Card;