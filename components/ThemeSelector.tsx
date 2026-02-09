import React from 'react';
import { Palette, X, Check } from 'lucide-react';
import { THEMES, Theme } from '../constants';

interface ThemeSelectorProps {
    currentThemeId: string;
    onThemeChange: (theme: Theme) => void;
    onClose: () => void;
}

export default function ThemeSelector({ currentThemeId, onThemeChange, onClose }: ThemeSelectorProps) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-[400px] bg-black/80 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl animate-[fadeIn_0.3s_ease-out]">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                        <Palette className="w-5 h-5 text-[var(--accent-primary)]" />
                        <h3 className="text-xl font-extrabold uppercase tracking-wider text-white font-display">Select Theme</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Theme Grid */}
                <div className="grid grid-cols-1 gap-4">
                    {THEMES.map((theme) => {
                        const isActive = currentThemeId === theme.id;
                        return (
                            <button
                                key={theme.id}
                                onClick={() => onThemeChange(theme)}
                                className={`group relative flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 overflow-hidden ${isActive
                                    ? 'border-[var(--accent-primary)] bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                                    : 'border-white/5 hover:border-white/20 hover:bg-white/5'
                                    }`}
                            >
                                {/* Preview Circle */}
                                <div className="relative w-12 h-12 rounded-full border border-white/10 shadow-lg shrink-0 overflow-hidden">
                                    <div className="absolute inset-0 grid grid-cols-2">
                                        <div style={{ backgroundColor: theme.colors.bgPrimary }} />
                                        <div style={{ backgroundColor: theme.colors.bgSecondary }} />
                                        <div style={{ backgroundColor: theme.colors.accent }} />
                                        <div style={{ backgroundColor: theme.colors.textPrimary }} />
                                    </div>
                                </div>

                                {/* Text Info */}
                                <div className="flex-1 text-left">
                                    <h4 className={`text-base font-bold uppercase tracking-wide font-display ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                        {theme.name}
                                    </h4>
                                    <div className="flex gap-2 mt-1">
                                        <span className="text-[10px] uppercase tracking-wider opacity-50" style={{ color: theme.colors.accent }}>
                                            {theme.id === 'neon-noir' ? 'Dark Mode' : theme.id === 'alabaster' ? 'Light Mode' : 'Custom'}
                                        </span>
                                    </div>
                                </div>

                                {/* Active Indicator */}
                                {isActive && (
                                    <div className="absolute right-4 text-[var(--accent-primary)] animate-[fadeIn_0.3s_ease-out]">
                                        <Check size={20} strokeWidth={3} />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
