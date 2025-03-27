import React from 'react'
import Imgcard from '../Imgcard/Imgcard'
import bookdata from '/public/books.json'
import './Body.css'
import { Link } from 'react-router'
const Body = () => {
  return (
    <>
    {/* <Imgcard pic={"/images/book1.png"} text="book"/>
    <Imgcard pic={"/images/book2.png"} text="bookwdwdw"/> */}

<div className="image-container">
  {bookdata.map((a) => (
    <Link key={a.ID} to={`/touch/${a.ID}`}>
      <Imgcard className="imgcard" pic={a.cover} text=" " />
    </Link>
  ))}
</div>

    
    </>
  )
}

export default Body