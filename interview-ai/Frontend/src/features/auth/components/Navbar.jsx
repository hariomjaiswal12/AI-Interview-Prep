import React from 'react'
import { useAuth } from '../hooks/useAuth'
import './navbar.scss'
import { useNavigate } from 'react-router'


const Navbar = () => {
    const { handleLogout } = useAuth()
    const navigate = useNavigate()
    const handleHome = () => {
        navigate('/');
    }
    return (
        <nav className="navbar">
            <div className="navbar__brand" onClick={handleHome}>
                InterviewAI
            </div>
            <button className="navbar__logout" onClick={handleLogout}>
                Logout
            </button>

        </nav>
    )
}

export default Navbar
