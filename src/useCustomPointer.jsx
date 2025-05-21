import { useState, useEffect } from "react"

export default function useCustomPointer(cursor) {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", updatePosition);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
        }
    }, []);

    return (
        <div style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)'
        }}>
            {cursor}
        </div>
    )
}
