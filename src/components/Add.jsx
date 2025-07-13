import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div  style={{
    backgroundImage: "url('https://i.pinimg.com/1200x/e7/04/2e/e7042e138b0630440e145cb4128e3c91.jpg')",
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
                    <div class="card text-center bg-success">
  <div class="card-body">
    <h5 class="card-title">Add all Photo Details Here.....!</h5>
    <p class="card-text">Make sure to enter all the details.</p></div>
</div><br></br>
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-lg-6">
                        <input type="text" className="form-control" placeholder='Enter ID'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-lg-6">
                        <input type="text" className="form-control" placeholder='Enter AlbumId'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-lg-6">
                        <input type="text" className="form-control" placeholder='Enter title'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-lg-6">
                        <input type="url" name="" id="" className="form-control" placeholder='Enter URL'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-lg-6">
                        <input type="url" name="" id="" className="form-control" placeholder='Enter thumbnailurl'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-lg-6">
                        <button className="btn btn-success">Add</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add