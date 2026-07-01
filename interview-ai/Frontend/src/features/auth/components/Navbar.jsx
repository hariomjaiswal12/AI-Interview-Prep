import React from 'react'
import { useAuth } from '../hooks/useAuth'
import './navbar.scss'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const { user, handleLogout } = useAuth()
    const navigate = useNavigate()
    const handleHome = () => {
        navigate('/');
    }
    return (
        <nav className="navbar">
            <div className="navbar__brand" onClick={handleHome}>
                <span className="logo-icon">🎯</span>
                <span className="logo-text">InterviewAI</span>
            </div>
            <div className="navbar__right">
                {user && (
                    <div className="navbar__user">
                        <span className="user-avatar">{user.username ? user.username[0].toUpperCase() : 'U'}</span>
                        <span className="user-name">{user.username}</span>
                    </div>
                )}
                <button className="navbar__logout" onClick={handleLogout}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar
