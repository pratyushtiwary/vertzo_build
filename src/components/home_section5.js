import React from 'react';

function Section5(){


    return (
        <section className="fifth" id="contact">
            <div className="upper-curve"></div>
            <div className="center">
                <div className="title">Contact Us</div>
                <div className="subtitle">
                    <span>We Are Here For You</span>
                    For more information or inquiry about our products, projects and pricing please feel free to get in touch with us.
                </div>
                <div className="address">
                    <div className="add t"><span className="icon">room</span> Address :</div>
                    <div className="addr">Block 13-205<br/>
                        Student Organization Cell<br/>
                        Division of Student Welfare<br/>
                        Lovely Professional University
                    </div>
                </div>
                <div className="telephone">
                    <span className="te t"><span className="icon">call</span> Telephone : </span>
                    <a href="tel:+91 9315070494"><span className="tel">+91 9315070494</span></a>
                </div>

                <div className="email">
                    <span className="em t"><span className="icon">mail</span> Email : </span>
                    <a href="mailto:officialvertzo@gmail.com"><span className="ema">officialvertzo@gmail.com</span></a>
                </div>

            </div>
        </section>
    )

}

export default Section5;