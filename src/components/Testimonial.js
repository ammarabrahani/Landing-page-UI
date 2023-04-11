import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { FreeMode, Pagination, Navigation, Scrollbar, A11y } from "swiper";

const testimonialArray = [
  {
    cardTitle: "Super Helpful !!!!",
    cardText:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast written by someone who has built several 7-figure ecommerce businesses from scratch",
    img: "/boy.png",
    personTitle: "Anna Gates",
    personJob: "Web Designer",
  },
  {
    cardTitle: "Super Helpful !!!!",
    cardText:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast written by someone who has built several 7-figure ecommerce businesses from scratch",
    img: "/lady.png",
    personTitle: "Anna Gates",
    personJob: "Web Designer",
  },
  {
    cardTitle: "Super Helpful !!!!",
    cardText:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast written by someone who has built several 7-figure ecommerce businesses from scratch",
    img: "/boy.png",
    personTitle: "Anna Gates",
    personJob: "Web Designer",
  },
  {
    cardTitle: "Super Helpful !!!!",
    cardText:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast written by someone who has built several 7-figure ecommerce businesses from scratch",
    img: "/lady.png",
    personTitle: "Anna Gates",
    personJob: "Web Designer",
  },
  {
    cardTitle: "Super Helpful !!!!",
    cardText:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast written by someone who has built several 7-figure ecommerce businesses from scratch",
    img: "/boy.png",
    personTitle: "Anna Gates",
    personJob: "Web Designer",
  },
  {
    cardTitle: "Super Helpful !!!!",
    cardText:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast written by someone who has built several 7-figure ecommerce businesses from scratch",
    img: "/lady.png",
    personTitle: "Anna Gates",
    personJob: "Web Designer",
  },
  {
    cardTitle: "Super Helpful !!!!",
    cardText:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast written by someone who has built several 7-figure ecommerce businesses from scratch",
    img: "/boy.png",
    personTitle: "Anna Gates",
    personJob: "Web Designer",
  },
  {
    cardTitle: "Super Helpful !!!!",
    cardText:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast written by someone who has built several 7-figure ecommerce businesses from scratch",
    img: "/lady.png",
    personTitle: "Anna Gates",
    personJob: "Web Designer",
  },
];

const Testimonial = () => {
  return (
    <div>
      <div>
        <h1 className="text-headColor text-5xl text-center font-semibold">
          Testimonial
        </h1>
      </div>
      <div className="my-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          navigation
          modules={[FreeMode, Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper"
        >
          {testimonialArray.map((item) => {
            return (
              <SwiperSlide>
                <div className="card pl-12 pr-12 pb-12 pt-16">
                  <h5 className="title font-bold py-2">{item.cardTitle}</h5>
                  <p className="text-sm py-2 pr-9 leading-6">{item.cardText}</p>
                  <div className="flex items-center pt-2">
                    <img src={item.img} alt="Person" />
                    <div className="pl-5">
                      <span className="font-bold block">
                        {item.personTitle}
                      </span>
                      <span className="text-sm text-links">
                        {item.personJob}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
