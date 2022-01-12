import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { GrNext , GrPrevious } from 'react-icons/gr';

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <GrPrevious style={{ color: "gray", fontSize: "45px" }}/>
      
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <GrNext style={{ color: "gray", fontSize: "45px" }}/>
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h2 className='testimonial-header' style={{ marginBottom: 20}}>TESTIMONIALS</h2>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="https://bootstrapmade.com/demo/templates/BizPage/assets/img/testimonial-5.jpg" />
          <Card img="https://bootstrapmade.com/demo/templates/BizPage/assets/img/testimonial-1.jpg" />
          <Card img="https://bootstrapmade.com/demo/templates/BizPage/assets/img/testimonial-4.jpg" />
          <Card img="https://bootstrapmade.com/demo/templates/BizPage/assets/img/testimonial-2.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
        autoplay: true,
        autoplaySpeed: 2000,
      }}
    >
      
      <img data-aos="fade-up" data-aos-delay="50" data-aos-duration="1100"
      imgProps={{ style: { borderRadius: "50%" } }}
       src={img} alt="" 
       style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          borderRadius: "50%",
          padding: 7,
          marginBottom: 20,
          
        }}
         />
         <h5 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1300" className='text-black text-bold'>PULLa Sitema</h5>
         <p>CEO</p>
      <p className='image-quote' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1600">
        <img src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/quote-sign-left.png" alt="" />
      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. <img src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/quote-sign-right.png" alt="" />
                  
      </p>
      {/* <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
        Media Analyst
      </p> */}
    </div>
  );
};

export default Testimonial;