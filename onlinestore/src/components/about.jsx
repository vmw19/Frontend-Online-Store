import React from 'react';
import "./about.css";

const About = () => {
    const [name, setName] = React.useState("");


const handleShowName = () => {
    setName("Victoria Warren");
};

    return (
        <div className="about">
            <h1>About Me</h1>
            <h2>Hi! Welcome to Shoe City! I am Vicky the owner of Shoe City.and I am the lover of all things fancy espcially shoes. Feel free to fill up your cart for you and a friend! You can reach us at shoes4ever@gmail.com</h2>
            <hr></hr>
            <h3>{name}</h3>

            <button onClick = {handleShowName} className = "btn btn-sm btn-danger"> Click me!</button>
        </div>
    );
};

export default About;