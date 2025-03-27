import React, { useState } from 'react'
import {useParams} from 'react-router'
import Home from '../Home/Home'
import bookdata from '/public/books.json'
import Imgcard from '../../components/Imgcard/Imgcard'
import './Touch.css'


const Touch = () => {
    const{id}=useParams();
    const [a,SetA]=useState(111);
    const data=bookdata.find(a => a.ID === id);


    const c=()=>{
        SetA(a/2);
    }

  return (
    <>
     <div className="touch-container">
      <Imgcard pic={data.cover} text={data.title}/>
      <p>{data.author}</p>
      <p>{data.summary}</p>
      <p>{data.price}</p>
      <p>{data.stock}</p>
      <h1>{a}</h1>
      <button className="btn btn-primary" onClick={()=>c()}>aaa</button>
    </div>

    </>
  )
}

export default Touch