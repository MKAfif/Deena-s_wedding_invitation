import { useState } from "react";
import { motion } from "framer-motion";
import islamicPattern from "../assets/islamic.jpg";

export default function Envelope3D({ onOpen }) {
    const [opened, setOpened] = useState(false);

    const handleOpen = () => {
        setOpened(true);

        setTimeout(() => {
            onOpen();
        }, 800);
    };

    return (
        <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-rose-200">

            {/* Background */}
            <div
                className="absolute inset-0 bg-center bg-cover opacity-20"
                style={{ backgroundImage: `url(${islamicPattern})` }}
            ></div>

            {/* Envelope Section */}
            <>
                {/* Envelope Container */}
                <div
                    className="relative w-80 h-56 cursor-pointer"
                    onClick={handleOpen}
                    style={{
                        perspective: "1200px",
                        transformStyle: "preserve-3d"
                    }}
                >

                    {/* ✨ Sparkles */}
                    {!opened && [...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-yellow-300 text-sm"
                            style={{
                                top: "50%",
                                left: "50%"
                            }}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                x: (Math.random() - 0.5) * 120,
                                y: (Math.random() - 0.5) * 80
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity
                            }}
                        >
                            ✨
                        </motion.div>
                    ))}

                    {/* Envelope Body */}
                    <motion.div
                        animate={{
                            scale: opened ? 1 : [1, 1.05, 1],
                        }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute w-full h-full bg-rose-400 rounded-lg shadow-xl"
                    />

                    {/* Wax Seal */}
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={opened ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                    >
                        <div className="relative w-20 h-20 flex items-center justify-center rounded-full">

                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 shadow-[0_6px_20px_rgba(255,215,0,0.6)]"></div>

                            <div className="absolute inset-1 rounded-full border border-yellow-300"></div>

                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 via-transparent to-transparent"></div>

                            <motion.div
                                className="absolute inset-0 rounded-full"
                                animate={{ opacity: [0.2, 0.8, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            <span className="relative font-bold text-lg tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                                D ❤️ S
                            </span>
                        </div>
                    </motion.div>

                    {/* Envelope Flap */}
                    <motion.div
                        initial={{ rotateX: 0 }}
                        animate={opened ? { rotateX: 180 } : { rotateX: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute w-full h-28 bg-rose-500 origin-top"
                        style={{
                            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden"
                        }}
                    ></motion.div>
                </div>

                {/* 👆 Tap Hint */}
                {!opened && (
                    <motion.div
                        className="absolute bottom-10 text-3xl"
                        animate={{
                            y: [0, 10, 0],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity
                        }}
                    >
                        👆
                    </motion.div>
                )}
            </>
        </div>
    );
}