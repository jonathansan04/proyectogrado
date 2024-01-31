import React from "react";
import { Link } from "react-router-dom";

const links = [
    {
        name:"Inicio",
        href: "/home",
    },
    {
        name:"¿Como funciona?",
        href:"/funcion",
    },
    {
        name:"¿Quienes somos?",
        href:"/quienes",
    },
    {
        name:"Contacto",
        href:"/contact",
    },
];

const NavBar =() =>{
    return (
        <div>

        { links.map((X) =>(
                <Link to={X.href}>
                {X.name}
                </Link>
            ))
        }
    </div>
    );
   
};
export default NavBar;
