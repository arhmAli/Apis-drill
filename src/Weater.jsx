import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Weater() {
    //Example 2: Searching and Displaying Weather Data
    const [weater, setweater] = useState([]);
    useEffect(() => {
        axios.get("http://api.weatherapi.com/v1/current.json?key=7faa6195c6ee417383582255233105&q=faisalabad&aqi=no")
            .then(res => {
                setweater(res.data);
            });

    }, []);
    return (
        <>
            <ul>
                <h3>The weater of the city  {weater.location&&weater.location.name} is:</h3>
                <li>{weater.current&&weater.current.temp_c}C</li>
            </ul>
        </>
    );
}
