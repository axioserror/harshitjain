import React, { useEffect } from "react";
import "./Loader.css";

const Loader = () => {
    useEffect(() => {
        // Simulate the window load event for asset loading
        window.addEventListener("load", () => {
            const loader = document.querySelector('.cssloader');
            if (loader) {
                loader.style.transition = "opacity 0.5s ease-out";
                loader.style.opacity = "0";
                setTimeout(() => {
                    loader.remove(); 
                }, 500); 
            }
        });
    }, []);

    return (
        <div className="cssloader">
            <div className="sh1"></div>
            <div className="sh2"></div>
            <h4 className="lt">Loading</h4>
        </div>
    );
};

export default Loader;
