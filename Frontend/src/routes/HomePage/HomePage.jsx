import React from "react";
import "./homepage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function HomePage(){
    const navigate = useNavigate();
    
    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);

        const startLocation = formData.get("start").toLowerCase();
        const destination = formData.get("destination").toLowerCase();

        try{
            const startCoodinates = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${startLocation}&appid=2fff924c9c8a2c983674fe33ac5b6555`);
            const destinationCoodinates = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${destination}&appid=2fff924c9c8a2c983674fe33ac5b6555`);
            
            const start = startCoodinates.data[0];
            const dest = destinationCoodinates.data[0];
            
            navigate(`/map/?startLocation=${[start.lat, start.lon]}&destination=${[dest.lat, dest.lon]}`);
        } catch(err){
            console.log(err);
        }
    }
    
    return (
        <div className="homepage-container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="input">
                    <label htmlFor="start">Start Location: </label>
                    <input type="text" id="start" name="start"></input>
                    </div>
                    <div className="input">
                    <label htmlFor="destination">Destination: </label>
                    <input type="text" id="destination" name="destination"></input>
                    </div>
                    <button type="submit">Go</button>
                </form>
            </div>
        </div>
    )
}