import React from 'react'
import Farming from '../images/farming.jpeg'
import Lemongrass from '../images/lemongrass.png'
import Lemongrass2 from '../images/lemongrass2.jpeg'
import Lemongrass3 from '../images/lemongrass3.avif'



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

<<<<<<< HEAD
    </div>
    <p>
    AgriNet believes that we have a responsibility to the people around us. Through transparency and accountability
    we want to inspire trust in the community. Our passion for the food industry and the consumer we serve empowers
    us to strive in producing the highest service we can consistently.
    </p>

    <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> AGRINET</h3>
    </div>
  </div>
</div>
=======
    
>>>>>>> b6d27196f1766dbaef32ceb113686c7552d05ab2

  )
}

export default about
