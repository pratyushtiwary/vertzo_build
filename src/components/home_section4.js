import React from 'react';

function Section4(){

    return (
        <>
            <section className="fourth" id="events">
            <div className="upper-curve"></div>
            <div className="title">Our Events</div>
            <div className="events">
                <div className="event">
                    <img src="https://www.vertzo.in/assets/img/events3.png" width="250px" height="250px"/>
                    <div className="name">Mind Seek Drill 1.0</div>
                    <div className="info">
                        <div className="place">LPU NCC</div>
                        <div className="date"><span className="icon">event</span>July 26, 2020</div>
                    </div>
                </div>
                <div className="event">
                    <img src="https://www.vertzo.in/assets/img/event1.png" width="250px" height="250px"/>
                    <div className="name">Coding Camp</div>
                    <div className="info">
                        <div className="place">Coding Blocks</div>
                        <div className="date"><span className="icon">event</span>Aug 4, 2020</div>
                    </div>
                </div>
                <div className="event">
                    <img src="https://www.vertzo.in/assets/img/events2.png" width="250px" height="250px"/>
                    <div className="name">Swatantra Bharat</div>
                    <div className="info">
                        <div className="place">Factum</div>
                        <div className="date"><span className="icon">event</span>Aug 15, 2020</div>
                    </div>
                </div>
            </div>
            <div className="bottom-curve"></div>
        </section>
        </>
    )
}

export default Section4;