import React, { useState } from 'react';

function LoginModal({ isOpen, onClose, onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            onLogin({ name: email.split('@')[0] || 'Guest' });
            setEmail('');
            setPassword('');
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-8 max-w-sm w-full shadow-2xl">
                <h3 className="text-xl font-light tracking-wide mb-4">Sign in</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className="w-full border-b border-[#ddd8d0] bg-transparent py-2 mb-4 focus:border-[#1e1a16] outline-none transition"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="w-full border-b border-[#ddd8d0] bg-transparent py-2 mb-6 focus:border-[#1e1a16] outline-none transition"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#1e1a16] text-[#faf8f5] py-2.5 text-sm tracking-wider hover:bg-[#3a322b] transition"
                    >
                        Login
                    </button>
                </form>
                <button
                    onClick={onClose}
                    className="mt-4 text-xs text-[#6b6256] hover:text-[#1e1a16]"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
export default LoginModal