import React from 'react'
import { NavLink } from 'react-router-dom'
function header() {
    return (
        <section className='menu'>

            <div className="title">
                <h2>Our Menu</h2>
                <div className="underline"></div>
            </div>

            <div className="btn-container">
                <NavLink   to="/"  className="filter-btn">All</NavLink>
                <NavLink   to="/breakfast" className='filter-btn'>Breakfast</NavLink>
                <NavLink   to="/lunch" className="filter-btn">Lunch</NavLink>
                <NavLink   to="/shakes" className="filter-btn">Shakes</NavLink>
            </div>
        </section>
    )
}

export default header