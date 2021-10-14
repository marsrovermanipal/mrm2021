import React from "react";
import ParticleImage, { ParticleOptions } from "react-particle-image";

const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
        // Get pixel
        const pixel = image.get(x, y);
        // Make a particle for this pixel if blue > 50 (range 0-255)
        return pixel.b > 50;
    },
    color: ({ x, y, image }) => "#ffffff"
};

export default function App() {

    // return (
    //     <ParticleImage
    //         src={"Rover.png"}
    //         scale={0.3}
    //         entropy={10}
    //         maxParticles={4200}
    //         particleOptions={particleOptions}
    //     />
    // );
    return (
        <ParticleImage
            src={"Rover101.png"}
            scale={0.52}
            entropy={15}
            maxParticles={4200}
            particleOptions={particleOptions}
        />
    );
}