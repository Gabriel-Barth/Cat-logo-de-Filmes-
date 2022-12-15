import React, { useState } from "react";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";


const Navbar = () => {
  const [search, SetSearch] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit= (e)=> {
  e.preventDefault();

 if(!search) return

 navigate(`/search?q=${search}`)
 SetSearch("")
  }
 
 
  return (
    
    <nav id="navbar">
      <h2>
        <Link to="/">
          {" "}
          <BiCameraMovie /> MoviesDb
        </Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Busque um filme..." onChange={(e)=> SetSearch(e.target.value)}
        value={search} />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
