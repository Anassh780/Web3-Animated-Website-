"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}

export function MagneticButton({
    children,
    className = "",
    strength = 30, // How far the button pulls towards the mouse
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();

        // Calculate distance from center of button
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Move element slightly towards the mouse
        setPosition({ x: middleX * (strength / 100), y: middleY * (strength / 100) });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
}
