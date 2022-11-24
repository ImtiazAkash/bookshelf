import Carousel from "react-bootstrap/Carousel";
import image from "../assests/images/forest.png";
import Classes from "../styles/CarouselwithInterval.module.css";

function CarouselwithInterval() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className={`${Classes.coureselImg} "d-block w-100"`}
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>kira vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className={`${Classes.coureselImg} "d-block w-100"`}
          src={image}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${Classes.coureselImg} "d-block w-100"`}
          src={image}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselwithInterval;
