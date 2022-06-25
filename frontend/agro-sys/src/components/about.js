import React from 'react'
import Farming from './images/farming.jfif'
import Lemongrass from './images/lemongrass.jfif'
import Lemongrass2 from './images/lemongrass2.jfif'
import Lemongrass3 from './images/lemongrass3.jfif'

function about() {
  return (
    <div>
  <h2>THE AGRINET GROUP OF COMPANIES</h2>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Farming} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img  src={Lemongrass} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={Lemongrass2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={Lemongrass3} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button classNameName="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    </div>
  </div>

    

  )
}

export default about
