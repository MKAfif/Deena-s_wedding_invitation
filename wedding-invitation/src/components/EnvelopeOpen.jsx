import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import islamicPattern from "../assets/islamic.jpg";

export default function Envelope3D({ onOpen }) {

    const [opened, setOpened] = useState(false);
    const [showBismillah, setShowBismillah] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBismillah(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleOpen = () => {
        setOpened(true);

        setTimeout(() => {
            onOpen();
        }, 1500);
    };

    return (
        <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-rose-200">

            {/* Islamic Pattern Background */}
            <div
                className="absolute inset-0 bg-center bg-cover opacity-20"
                style={{ backgroundImage: `url(${islamicPattern})` }}
            ></div>

            {/* Bismillah Intro */}
            {showBismillah && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute text-center z-20"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-yellow-500 drop-shadow-lg">
                        بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ
                    </h1>

                    <p className="mt-4 text-gray-600">
                        In the name of Allah, the Most Merciful
                    </p>
                </motion.div>
            )}

            {/* Envelope Section */}
            {!showBismillah && (
                <>
                    <p className="absolute bottom-16 text-gray-600 text-lg">
                        Tap the envelope 💌
                    </p>

                    <div
                        className="relative w-80 h-56 cursor-pointer"
                        onClick={handleOpen}
                        style={{
                            perspective: "1200px",
                            transformStyle: "preserve-3d"
                        }}
                    >

                        {/* Envelope Body */}
                        <div className="absolute w-full h-full bg-rose-400 rounded-lg shadow-xl"></div>

                        {/* Envelope Flap (opens to front) */}
                        <motion.div
                            initial={{ rotateX: 0 }}
                            animate={opened ? { rotateX: 180 } : { rotateX: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute w-full h-28 bg-rose-500 origin-top rounded-t-lg"
                            style={{
                                transformStyle: "preserve-3d",
                                backfaceVisibility: "hidden"
                            }}
                        ></motion.div>

                        {/* Invitation Card */}
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={opened ? { y: -120, opacity: 1 } : { y: 40, opacity: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute left-4 right-4 top-10 bg-white rounded-lg shadow-lg p-4 text-center"
                        >
                            <h2 className="text-lg font-bold text-rose-700">
                                Deena ❤️ Safwan
                            </h2>

                            <p className="text-sm text-gray-600">
                                Wedding Invitation
                            </p>
                        </motion.div>

                    </div>
                </>
            )}

        </div>
    );
}