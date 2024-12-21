import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (

	<div className="text-center mt-5 d-flex-aling-items-center">
		<Link to={'/contactos'} className="btn btn-primary"> Llévame a lista de contactos </Link> 
		<p className="mt-5 pt-5">Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit.<br/> Repellendus vitae minus, <br/>id ad beatae numquam possimus facere atque,<br/> amet culpa ducimus. Veniam quos rerum eveniet sint,<br/> a ut obcaecati laborum!
        </p>
	</div>

	

);