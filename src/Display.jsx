import React from 'react'

const Display = ({location,lat,long,temp,err}) => {
    return (
        <>
            <div className="description">
                <h1>Location : {location}</h1>
                <h2>Latitude : {lat}</h2>
                <h2>Longitutde : {long}</h2>
                <h2>Temperature : {temp} Kelvin</h2>
                <p style={{color:"crimson"}}>{err}</p>
            </div>
        </>
    )
}

export default Display
