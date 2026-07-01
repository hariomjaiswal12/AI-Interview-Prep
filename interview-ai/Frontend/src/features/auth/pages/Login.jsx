import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({email,password})
        navigate('/')
    }

    if(loading){
        return (
            <main>
                <div className="blob blob--pink"></div>
                <div className="blob blob--purple"></div>
                <div className="auth-loader-card">
                    <div className="spinner"></div>
                    <h2>Logging you in...</h2>
                </div>
            </main>
        )
    }

    return (
        <main>
            {/* Animated Ambient Blobs */}
            <div className="blob blob--pink"></div>
            <div className="blob blob--purple"></div>

            <div className="form-container">
                <h1>Welcome Back</h1>
                <p style={{ textAlign: 'center', color: '#7d8590', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    Prepare for your next career jump
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            Email Address
                        </label>
                        <div className="input-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email" id="email" name='email' placeholder='name@example.com' required />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            Password
                        </label>
                        <div className="input-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password" id="password" name='password' placeholder='••••••••' required />
                        </div>
                    </div>
                    <button className='button primary-button' type="submit">Sign In</button>
                </form>
                <p>Don't have an account? <Link to={"/register"} >Create one</Link> </p>
            </div>
        </main>
    )
}

export default Login