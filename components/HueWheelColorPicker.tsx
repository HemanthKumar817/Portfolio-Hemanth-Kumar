"use client";

import { AngleSlider } from "@ark-ui/react/angle-slider";
import { parseColor } from "@ark-ui/react/color-picker";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface HueWheelColorPickerProps {
    onColorChange: (hue: number) => void;
    onClose: () => void;
    initialHue?: number;
}

export default function HueWheelColorPicker({ onColorChange, onClose, initialHue = 0 }: HueWheelColorPickerProps) {
    const [hue, setHue] = useState(initialHue);

    // Update parent on hue change
    useEffect(() => {
        onColorChange(hue);
    }, [hue, onColorChange]);

    // Convert hue angle to HSL color
    const getHueColor = (hueValue: number) => {
        return `hsl(${Math.round(hueValue)}, 100%, 50%)`;
    };

    // Get hex color for display
    const getHexColor = (hueValue: number) => {
        try {
            return parseColor(`hsl(${hueValue}, 100%, 50%)`).toString("hex");
        } catch (e) {
            return "#FF0000";
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-[300px] md:max-w-sm bg-black/80 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl animate-[fadeIn_0.3s_ease-out]">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-black uppercase tracking-wider text-white">Select Color</h3>
                    <button
                        onClick={onClose}
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-8">
                    {/* Color Display */}
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                        <div
                            className="w-16 h-16 rounded-xl border-2 border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                            style={{ backgroundColor: getHueColor(hue) }}
                        />
                        <div className="flex-1">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Current Value</p>
                            <div className="font-mono text-lg text-white font-bold tracking-wider">
                                {getHexColor(hue)}
                            </div>
                            <div className="text-xs text-gray-500 font-mono mt-1">
                                Hue: {Math.round(hue)}°
                            </div>
                        </div>
                    </div>

                    {/* Hue Wheel */}
                    <div className="flex justify-center py-4">
                        <AngleSlider.Root
                            value={hue}
                            onValueChange={(details) => setHue(details.value)}
                            className="relative flex items-center justify-center touch-none select-none"
                        >
                            <AngleSlider.Control
                                className="w-48 h-48 md:w-64 md:h-64 rounded-full relative cursor-pointer [mask:radial-gradient(circle,transparent_52%,transparent_53%,black_53%,black_62%)]"
                                style={{
                                    background: `conic-gradient(
                    hsl(0, 100%, 50%) 0deg,
                    hsl(30, 100%, 50%) 30deg,
                    hsl(60, 100%, 50%) 60deg,
                    hsl(90, 100%, 50%) 90deg,
                    hsl(120, 100%, 50%) 120deg,
                    hsl(150, 100%, 50%) 150deg,
                    hsl(180, 100%, 50%) 180deg,
                    hsl(210, 100%, 50%) 210deg,
                    hsl(240, 100%, 50%) 240deg,
                    hsl(270, 100%, 50%) 270deg,
                    hsl(300, 100%, 50%) 300deg,
                    hsl(330, 100%, 50%) 330deg,
                    hsl(360, 100%, 50%) 360deg
                  )`,
                                }}
                            >
                                <AngleSlider.Thumb className="absolute top-0 right-0 bottom-0 left-[calc(50%-1.5px)] pointer-events-none h-full w-[3px] flex items-start outline-hidden z-20">
                                    <span className="border-2 border-white size-6 rounded-full shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.5)] m-1 bg-white" />
                                </AngleSlider.Thumb>
                            </AngleSlider.Control>

                            <AngleSlider.HiddenInput />
                        </AngleSlider.Root>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                        Apply Theme
                    </button>
                </div>
            </div>
        </div>
    );
}
