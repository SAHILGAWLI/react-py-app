// src/components/Loader.js
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="loader-container">
            <ThreeDots
                height="100"
                width="100"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
            />
        </div>
    );
};

export default Loader;
