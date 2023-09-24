import React, { useEffect, useState } from 'react';
import "./Styles Folder/Banner.css";

function Banner() {


    const imageArray = [
        require('./shopping1.jpg'),
        require('./shopping2.jpg'),
        require('./shopping3.jpg'),
        require('./shopping4.jpg'),
        require('./shopping5.jpg'),
        // Add more image paths here
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            // Calculate the index for the next image
            const nextIndex = (currentImageIndex + 1) % imageArray.length;
            setCurrentImageIndex(nextIndex);
        }, 3000); // Change image every 3 seconds (adjust as needed)

        return () => {
            // Cleanup by clearing the timer when the component unmounts
            clearInterval(timer);
        };
    }, [currentImageIndex]);
    return (
        <>

            <div className="slideshow-container">
                {imageArray.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="Current Slide"
                        className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
        </>
    )
}

export default Banner;