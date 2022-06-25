import React from 'react'

function about() {
  return (
    <div>
  <h2>THE AGRINET GROUP OF COMPANIES</h2>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="images/lemongrass.jfif" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="images/lemongrass2.jfif" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="images/farming.jfif" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

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

  )
}

export default about
