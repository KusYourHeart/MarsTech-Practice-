import React, { ReactNode } from 'react';

interface BVprop {
    children: ReactNode;
  }

const BV1 = ({ children } : BVprop) => {
    return (
        <div className="Container">
     {/*  <video
                autoPlay="autoplay"
                loop="loop"
                muted   
                className="Video"
            >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
     </video> */}

            <div className="Content">
                {children}
            </div>

            <style jsx>{`
    .Container {
        background-color: rgba(230,230,235, 0.5);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100%;
        width: 100%;
        overflow: hidden;
        box-shadow: () 
    }

    .Video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -1;
        -o-object-fit: cover;
        object-fit: cover;
        transform: translate(-50%, -50%);
    }

    .Content {
        position: relative;
        z-index: 1;
    }
`}</style>
        </div>
    )
};

export default BV1;