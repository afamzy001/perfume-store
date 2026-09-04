import React, { useState } from 'react';

function RegisterModal({ isOpen, onClose, onRegister }) {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.password) {
            onRegister({ name: formData.name });
            setFormData({ name: '', email: '', password: '' });
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-8 max-w-sm w-full shadow-2xl">
                <h3 className="text-xl font-light tracking-wide mb-4">Create account</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className="w-full border-b border-[#ddd8d0] bg-transparent py-2 mb-4 focus:border-[#1e1a16] outline-none transition"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <input
                        className="w-full border-b border-[#ddd8d0] bg-transparent py-2 mb-4 focus:border-[#1e1a16] outline-none transition"
                        placeholder="Email"
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <input
                        className="w-full border-b border-[#ddd8d0] bg-transparent py-2 mb-6 focus:border-[#1e1a16] outline-none transition"
                        placeholder="Password"
                        type="password"
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#1e1a16] text-[#faf8f5] py-2.5 text-sm tracking-wider hover:bg-[#3a322b] transition"
                    >
                        Register
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
export default RegisterModal