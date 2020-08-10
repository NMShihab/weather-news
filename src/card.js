import React from 'react'

const Weathercard = (props) => {
    return ( 
        <div className="card">
            <h1 className="city">Dhaka</h1>
            <h3 className="country">BAN</h3>
            <img className="image" src="" alt=""/>
            <h1 className="temp">20 °C</h1>
            <h3 className="condition">clouds</h3>
        </div>
     );
}
 
export default Weathercard;