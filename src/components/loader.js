import React, { useEffect } from 'react';
import './css/loader.css';

function Loader(props){
    return (
        <div className="loader">
            <div className="group">
                <div className="load-icon">
                    <svg version="1.1" id="Layer_1" x="0px" y="0px"
                    viewBox="0 0 150 90" style={{"enableBackground":"new 0 0 150 90"}} >
                        <path id="d1" style={{fill:"transparent",stroke:"#F29238","strokeMiterlimit":10}} d="M36,0H1c0,2.3,0,10.3,0,20.7h24.6c2.9,0,5.3,2.3,5.3,5.2v43.8
                            c0,2.9-2.4,5.2-5.3,5.2H1c0,5.8,0,11,0,15h35c7.6,0,13.8-5.4,13.8-12V12C49.8,5.4,43.6,0,36,0z"/>
                        <path id="d2" style={{fill:"transparent",stroke:"#F29238","strokeMiterlimit":10}} d="M124.4,20.9H150c0-7,0-13.9,0-20.9h-35c-7.6,0-13.8,5.4-13.8,12
                            v66c0,6.6,6.2,12,13.8,12h35c0-5,0-9.9,0-14.9h-25.6c-2.9,0-5.3-2.4-5.3-5.2V26.1C119.1,23.2,121.5,20.9,124.4,20.9z"/>
                    </svg>
                </div>
                <div className="txt">Loading...</div>
            </div>
        </div>
    )
}

export default Loader;