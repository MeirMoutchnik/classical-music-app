import React, { useContext, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { DataContext } from "../context/Context";

const Navbar = () => {
  const { data, user, composerFilter, setComposerFilter } = useContext(DataContext);
  const history = useHistory();
  
  const handleChange = (e) => {
    const query = e.target.value;
    setComposerFilter(query);
  };

  const resetHandler = () => {
    setComposerFilter("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/composers");
  }

  return (
    <div className="navbar">
      <Link to="/">
        <h1>aChord</h1>
      </Link>

      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={(e) => handleChange(e)} type="text" name="composerName" id="composerName" value={composerFilter} placeholder="Search for a Composer" />
        </div>
        <div className="buttons">
          <button type="submit">Search</button>
          <button onClick={resetHandler} type="reset">Reset</button>
        </div>
      </form>

      <div className="nav-menu">
        <NavLink exact to="/composers" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        {user
        ? <NavLink exact to={`/userprofile`} activeClassName="active">
        Profile
        </NavLink>
        :<>
          <NavLink exact to="/signup" activeClassName="active">
          Signup
          </NavLink>
          <NavLink exact to="/login" activeClassName="active">
            Login
          </NavLink>
        </>
        }
      </div>
    </div>
  );
};

export default Navbar;
