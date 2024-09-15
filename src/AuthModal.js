import React, { useState } from 'react';
import './AuthModal.css';
import axios from 'axios';

const AuthModal = ({ onClose, setUser }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSwitch = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? '/api/login' : '/api/register';
        try {
            const response = await axios.post(endpoint, { email, password });
            setUser(response.data.user);
            onClose();
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="auth-modal">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>{isLogin ? 'Login' : 'Register'}</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                </form>
                <p onClick={handleSwitch}>
                    {isLogin ? 'New user? Register here.' : 'Already have an account? Login here.'}
                </p>
            </div>
        </div>
    );
};

export default AuthModal;