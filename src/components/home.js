import React from 'react';
import Section1 from './home_section1';
import './css/home.css';
import Section2 from './home_section2';
import Section3 from './home_section3';
import Section4 from './home_section4';
import Section5 from './home_section5';

function Home(props){
    return (
        <div className="home">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </div>
    );
}

export default Home;