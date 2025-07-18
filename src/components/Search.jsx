import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div style={{
    backgroundImage: "url('https://i.pinimg.com/1200x/f9/0c/7c/f90c7c37c91fc9e3b67dbe0d4d4a9861.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "550px", // adjust as needed
    width: "100%",
  }}>
        <Navbar /><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <div class="card text-center bg-primary">
  <div class="card-body">
    <h5 class="card-title">Search Details Here.....!</h5>
    <p class="card-text">Make sure to enter the photo title to search...</p></div>
</div><br></br>
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-12 col-lg-6">
                            <input type="text" className="form-control" placeholder='Enter the photo title to search'/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-12 col-lg-6">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search