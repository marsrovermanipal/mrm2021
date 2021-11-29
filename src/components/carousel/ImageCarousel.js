import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

export default function ImageCarousel(Items) {
  const [activeIndex, setActiveIndex] = useState(0);
  const temp = Object.values(Items);
  const items = temp[0];

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem key={item.src}>
        <div className="col-12 text-center">
          <img
            src={item.src}
            alt={item.altText}
            className="img-fluid col-12 col-md-8"
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        // directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        // directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
