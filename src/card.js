import React from 'react'

const Weathercard = (props) => {
    return ( 
        <div className="card">
            <div className="location">
                <h1 className="city">Dhaka</h1>
                <h3 className="country">BAN</h3>
            </div>
            <img className="icon" src="./img/cloud.jpg" alt="image"/>
            <h1 className="temp">20 °C</h1>
            <h3 className="condition">clouds</h3>
        </div>
     );
}
 
export default Weathercard;