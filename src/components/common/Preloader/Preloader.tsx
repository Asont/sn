import React from 'react';
import preloader from "../../../assets/images/preloader.gif";

const Preloader = (props:any) => {
    return (
        <div>
            <img src={preloader} alt={""}/>
        </div>
    );
};

export default Preloader;