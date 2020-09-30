import React, { useState, useRef } from "react";
import smoothscroll from 'smoothscroll-polyfill';

import "./styles.css";

smoothscroll.polyfill();

const informationBoxes = [
  {
    id: "box1",
    title: "Energy Crisis",
    imageURL: "https://picsum.photos/id/237/200"
  },
  {
    id: "box2",
    title: "US privates China energy data",
    imageURL: "https://picsum.photos/id/238/200"
  },
  {
    id: "box3",
    title: "Coronavirus Impact on Oil",
    imageURL: "https://picsum.photos/id/239/200"
  },
  {
    id: "box4",
    title: "Foreclosure in Vietnam",
    imageURL: "https://picsum.photos/id/240/200"
  },
  {
    id: "box5",
    title: "Energy Crisis",
    imageURL: "https://picsum.photos/id/241/200"
  },
  {
    id: "box6",
    title: "US privates China energy data",
    imageURL: "https://picsum.photos/id/242/200"
  },
  {
    id: "box7",
    title: "Coronavirus Impact on Oil",
    imageURL: "https://picsum.photos/id/243/200"
  },
  {
    id: "box8",
    title: "Foreclosure in Vietnam",
    imageURL: "https://picsum.photos/id/244/200"
  },
  {
    id: "box9",
    title: "Coronavirus Impact on Oil",
    imageURL: "https://picsum.photos/id/242/200"
  },
  {
    id: "box10",
    title: "Foreclosure in Vietnam",
    imageURL: "https://picsum.photos/id/242/200"
  },
  {
    id: "box11",
    title: "Foreclosure in Vietnam",
    imageURL: "https://picsum.photos/id/244/200"
  },
  {
    id: "box12",
    title: "Coronavirus Impact on Oil",
    imageURL: "https://picsum.photos/id/243/200"
  }
];

export default function App() {
  const imageWidth = 200;
  const fittingBlocks = 3;
  const [position, setPosition] = useState(0);
  const refCarousel = useRef(null);

  function scroll(direction) {
    const whichDirection = direction === "right" ? 1 : -1;
    const newPosition = position + fittingBlocks * whichDirection;
    setPosition(newPosition);
    refCarousel.current.scrollTo({
      top: 0,
      left: newPosition * imageWidth,
      behavior: "smooth"
    });
  }

  return (
    <div className="carousel-container">
      {position > 0 ? (
        <button onClick={() => scroll("left")} id="left">
          Left
        </button>
      ) : null}
      <div id="carousel" className="carousel" ref={refCarousel}>
        <div id="slider" className="slider">
          {informationBoxes.map((box, idx) => (
            <div className="box" key={idx}>
              <span className="title">{box.title}</span>
              <img src={box.imageURL} alt="none" />
            </div>
          ))}
        </div>
      </div>
      {position < informationBoxes.length - fittingBlocks ? (
        <button onClick={() => scroll("right")} id="right">
          Right
        </button>
      ) : null}
    </div>
  );
}
