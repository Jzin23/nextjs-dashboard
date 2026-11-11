'use client';

// Página de login dos usuários

import React, { useState } from 'react';

export default function AthleteLoginPage() {
    const [formData, setFormData] = useState({
        athleteType: 'Competidor',
        athleteId: '',
        securityKey: '',
        rememberMe: false,
    });

    // Estado para controlar a visibilidade da senha
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Autenticando Atleta:', formData);
    };

    const handleBiometricLogin = () => {
        alert('Iniciando escaneamento biométrico...');
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-sans">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop')`
                    // Esta imagem traz o detalhe de atletas lutando no tatame de kimono (Gi)
                }}
            />

            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-red-500/10 blur-[120px]" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                <div className=" lg:block lg:col-span-6 space-y-6 bg-slate-950/40 backdrop-blur-md border border-cyan-500/30 p-6 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.15)] animate-pulse">
                    <div className="flex justify-between items-center border-b border-cyan-500/20 pb-3">
                        <span className="text-xs font-mono text-cyan-400 tracking-widest">// FIGHTER BIOMETRICS</span>
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full border-4 border-dashed border-cyan-500/60 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                            <div className="w-16 h-16 rounded-full border border-red-500/40 flex items-center justify-center">
                                <span className="text-red-500 text-xs font-bold font-mono">142 BPM</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-white tracking-wide uppercase">CLASS: BJJ / Atletas do Rei</h3>
                            <div className="mt-3 flex gap-2">
                                <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-[10px] uppercase font-mono rounded border border-cyan-500/30">Preparação: 89%</span>
                                <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] uppercase font-mono rounded border border-red-500/30">Próxima Luta: Tokyo Dome</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 w-full max-w-md mx-auto">

                    <div className="text-center mb-8">
                        <h1 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-red-500 tracking-tighter uppercase italic drop-shadow-[0_2px_10px_rgba(6,182,212,0.3)]">
                            Fighter Prime
                        </h1>
                        <p className="text-[10px] font-mono tracking-[0.3em] text-cyan-400/70 uppercase mt-1">Team Management software</p>
                    </div>

                    <div className="bg-gradient-to-b from-slate-950/80 to-slate-900/90 border border-slate-800 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-red-500" />

                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-white tracking-wide">ATHLETE LOGIN</h2>
                            <p className="text-xs text-gray-400 mt-1">Identifique-se para acessar a arena digital.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="athleteId" className="block text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-2">
                                    Tipo do atleta
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                                        <svg className="w-4 h-4 text-cyan-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    </span>
                                    <input
                                        id="athleteId"
                                        name="athleteId"
                                        type="text"
                                        required
                                        value={formData.athleteId}
                                        onChange={handleChange}
                                        placeholder="FIGHTER-X"
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm font-mono tracking-wide transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="athleteId" className="block text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-2">
                                    Nome do atleta
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                                        <svg className="w-4 h-4 text-cyan-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    </span>
                                    <input
                                        id="athleteId"
                                        name="athleteId"
                                        type="text"
                                        required
                                        value={formData.athleteId}
                                        onChange={handleChange}
                                        placeholder="FIGHTER-X"
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm font-mono tracking-wide transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="securityKey" className="block text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-2">
                                    Security Key (Senha)
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                                        <svg className="w-4 h-4 text-red-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    </span>
                                    <input
                                        id="securityKey"
                                        name="securityKey"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        value={formData.securityKey}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full pl-10 pr-12 py-2.5 bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm font-mono tracking-wide transition-all"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-300 transition-colors"
                                    >
                                        {showPassword ? (
                                            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs pt-1">
                                <label className="flex items-center text-gray-400 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="mr-2 rounded bg-slate-950 border-slate-800 text-cyan-600 focus:ring-0 focus:ring-offset-0"
                                    />
                                    Manter Conectado
                                </label>
                                <a href="#forgot" className="text-red-400 hover:text-red-300 font-medium transition-colors hover:underline">
                                    Esqueceu a senha?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-2 group relative inline-flex items-center justify-center py-3 px-6 overflow-hidden rounded-lg bg-gradient-to-r from-red-600 to-orange-600 font-bold text-white text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all duration-300"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative flex items-center gap-2">
                                    Acessar Painel de Combate
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </span>
                            </button>
                        </form>

                        <div className="relative my-6 flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800" /></div>
                            <span className="relative bg-slate-950 px-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Ou use</span>
                        </div>

                        {/* Login Biométrico */}
                        <button
                            onClick={handleBiometricLogin}
                            className="w-full py-2 px-4 border border-cyan-500/30 rounded-lg text-xs font-mono text-cyan-400 hover:bg-cyan-500/10 flex items-center justify-center gap-2 transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                            Autenticação Biométrica
                        </button>

                        {/* Criar Conta */}
                        <div className="mt-6 text-center text-xs text-gray-400">
                            Novo na Federação?{' '}
                            <a href="#register" className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors hover:underline ml-1">
                                Cadastrar Novo Atleta
                            </a>
                        </div>

                    </div>

                    {/* Links Auxiliares */}
                    <div className="mt-4 flex justify-center gap-4 text-[11px] font-mono text-gray-500">
                        <a href="#help" className="hover:text-gray-300 transition-colors">Centro de Ajuda</a>
                        <span>•</span>
                        <a href="#status" className="hover:text-gray-300 transition-colors">Status do Servidor</a>
                    </div>

                </div>

            </div>
        </div>
    );
}