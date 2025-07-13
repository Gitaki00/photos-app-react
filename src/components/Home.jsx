import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/1200x/d8/4a/fa/d84afa8da467aff27032773dccf48b86.jpg" class="d-block w-100" alt="..." height={500}></img>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/1200x/74/c2/36/74c2363dfccf78a26110e77c972b48e5.jpg" class="d-block w-100" alt="..." height={500}></img>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/1200x/3d/b3/cd/3db3cd0da535c6c72f532bf81d5f67c4.jpg" class="d-block w-100" alt="..." height={500}></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home