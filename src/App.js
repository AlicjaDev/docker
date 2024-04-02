import React, { useState, useEffect } from "react";
import "./App.css";


function App() {

const [data, setData] = useState("");

useEffect(() => {
    fetchData();
    }, []); 
    

const fetchData = async () => {
try {
const response = await fetch("http://localhost:5000/api/data"); 
if (!response.ok) {
throw new Error("Failed Lo felch dala");
}
const jsonData = await response.json(); 
setData(jsonData.message);
} catch (error){
console.error("Error fetching data:", error);
}
};

return (
<div className="App">
<header className="App-header">
<h1>Microservices Frontend</h1>
<div id="backendResponse">{data}</div> </header>
</div>
);
}
export default App;
