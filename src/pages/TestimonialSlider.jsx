import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles_css/Testimonial.css";
import BujarImage from "../images/bujar.png";
import YvonneImage from "../images/yvonne.png";
import ArberImage from "../images/arber.png";

const testimonials = [
  {
    id: 1,
    name: "Bujar Demolli",
    role: "CEO",
    company: "Dreilinden",
    image: BujarImage,
    quote:
      "Protecht has been a key partner in our digital transformation journey. Their expertise ensures our security and keeps us resilient in the fast-evolving digital landscape. With Protecht, we're prepared to face the challenges of today’s digital world.",
  },
  {
    id: 2,
    name: "Yvonne Lang",
    role: "COO",
    company: "LFT",
    image: YvonneImage,
    quote:
      "The programming and IT security implemented by Protecht have significantly enhanced our daily operations. Thanks to their expertise, we’ve been upgraded to state-of-the-art technology, which has been a profound success in our work and overall journey.",
  },
  {
    id: 3,
    name: "Arber Arifi",
    role: "Chairman of the Board",
    company: "reYa",
    image: ArberImage,
    quote:
      "Protecht’s expertise in AI and Cloud has been pivotal in transforming our datacenter into a green, AI-driven powerhouse. Their skills and dedication have been key to the success of our reYa cloud and AI datacenter, enabling us to meet the evolving challenges of modern technology.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container2">
      <div className="slider-header">
        <h2 className="slider-title">
          Hear from our <span className="title-highlight">customers</span>
        </h2>
        <div className="button-group">
          <button
            onClick={prevSlide}
            className="navigation-button"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="navigation-icon" />
          </button>
          <button
            onClick={nextSlide}
            className="navigation-button"
            aria-label="Next testimonial"
          >
            <ChevronRight className="navigation-icon" />
          </button>
        </div>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div className="testimonial-header">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">
                  {testimonial.role} {testimonial.company}
                </p>
              </div>
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
