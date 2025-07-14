import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [photoData,changePhotoData]=useState(
        [ ]
    )
    const fetchData = ()=>{
      axios.get(" https://jsonplaceholder.typicode.com/photos").then(
        (response)=>{changePhotoData(response.data)}
      ).catch()
    }
    useEffect(()=>{fetchData()},{})
  
  return (
    <div >
        <Navbar /><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="card text-center bg-warning">
  <div class="card-body">
    <h5 class="card-title">View all Details Here.....!</h5>
    <p class="card-text">All the details are given in a card form.</p></div>
</div><br></br>
                    <div className="row g-3">
                        
                            {photoData.map(
                                (value,index)=>{
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card flex-fill h-100">
  <img src="https://i.pinimg.com/1200x/d5/6e/27/d56e2766a702e3642189a6e4dad9fa0e.jpg" class="card-img-top" alt="..." width={100} height={250}></img>
  <div class="card-body">
    <h5 class="card-title">{value.title}</h5>
     <img src={value.thumbnailUrl} class="card-img-top" alt="..." ></img>
  </div></div>
</div>
                                    )
                                }
                            )}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View