import {useTranslation } from "react-i18next"
export default function PhotoSlider(){
  const [t, i18next] = useTranslation("global")
  var header1 = t("header.title1")
  var header2 = t("header.title2")
  var header3 = t("header.title3")
  var header4 = t("header.title4")

  var message1 = t("body.message1")
  var message2 = t("body.message2")
  var message3 = t("body.message3")
  var message4 = t("body.message4")
  return(
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="old-ship-sea-sunset.jpg" className="d-block w-100 photo-bar-photo" alt="..."></img>
      <div className=" d-md-block photo-bar-text">
        <h5>{header1}</h5>
        <p>{message1}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="view-futuristic-urban-city.jpg" className="d-block w-100 photo-bar-photo" alt="..."></img>
      <div className="d-block photo-bar-text">
        <h5>{header2}</h5>
        <p>{message2}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="tavern.jpg" className="d-block w-100 photo-bar-photo" alt="..."></img>
      <div className="d-block photo-bar-text">
        <h5>{header3}</h5>
        <p>{message3}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="gothic-castle.jpg" className="d-block w-100 photo-bar-photo" alt="..."></img>
      <div className="d-block photo-bar-text">
        <h5>{header4}</h5>
        <p>{message4}</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   )
}