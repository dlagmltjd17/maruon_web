import React, { useState, useEffect } from "react";
import "../styles/mainSlider.css";

export default function MainSlider() {
  const images = [
    "/images/home_img_01.png",
    "/images/home_img_02.png",
    "/images/home_img_03.png",
  ];

  const [current, setCurrent] = useState(0);

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="slider-wrapper">
      <div className="slider-container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            {index === current && (
              <div className="text">클라이언트의 상상을 현실로</div>
            )}
          </div>
        ))}

        <div className="controls">
          <img src="/icon/left.svg" alt="prev" className="btn" onClick={prevSlide} />
          <img src="/icon/right.svg" alt="next" className="btn" onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
}
