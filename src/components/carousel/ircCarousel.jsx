import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, UncontrolledCarousel } from "reactstrap";

const tems = [
    {
        src: "/comp/ircTasks/abex.jpg",
        altText: "AbEx",
        caption:
            "The mission involves the rover serving as a Mobile Science Laboratory to collect and evaluate samples from designated Martian sites",
        header: "AbEx",
        key: 1,
    },
    {
        src: "/comp/ircTasks/autex.jpg",
        altText: "AutEx",
        caption:
            "Throughout this mission, the rover will need to navigate autonomously through moderately rugged terrain, moving between designated markers.",
        header: "AutEx",
        key: 2,
    },
    {
        src: "/comp/ircTasks/rdo.jpg",
        altText: "RDO",
        caption: "Rovers in the mission must search, pick up, and deliver objects to specified coordinates or store them for later retrieval.",
        header: "RDO",
        key: 3,
    },
    {
        src: "/comp/ircTasks/idmo.jpg",
        altText: "IDMO",
        caption:
            "The rover is to cover a brief distance to engage with a simulated instrument panel, executing a series of specific maintenance and deployment tasks using robotic manipulators.",
        header: "IDMO",
        key: 4,
    },
];

function IRCCarousel(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    const slides = items.map((item) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.header} />
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default IRCCarousel;
