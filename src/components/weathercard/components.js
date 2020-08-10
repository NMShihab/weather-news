import React from 'react';
import styled  from '@emotion/styled';
import Location from './Location';



const Weathercard = (props) => {
    const Card = styled.div`
        margin: 0 auto;
        background: linear-gradient(to bottom, red,pink);
        width: 200px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 20px;  
    `
    return ( 
        <Card >

            <Location/>
            <img className="icon" src="./img/cloud.jpg" alt=""/>
            <h1 className="temp">20 °C</h1>
            <h3 className="condition">clouds</h3>
        </Card>
     );
}
 
export default Weathercard;