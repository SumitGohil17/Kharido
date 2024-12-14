
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'



function CountdownTimer({ endTime }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    function calculateTimeLeft() {
        const difference = +endTime - +new Date()
        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }

        return timeLeft
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearTimeout(timer)
    })

    return (
        <div className="flex space-x-4 text-sm font-medium bg-black/20 rounded-full px-4 py-2">
            {Object.keys(timeLeft).map(interval => (
                timeLeft[interval] > 0 && (
                    <div key={interval} className="flex items-center">
                        <span className="text-2xl font-bold">{timeLeft[interval]}</span>
                        <span className="ml-1 text-xs uppercase">{interval.charAt(0)}</span>
                        {interval !== 'seconds' && <span className="mx-1">:</span>}
                    </div>
                )
            ))}
        </div>
    )
}

export default function SalesWomen({ handleCardClick, name, offers }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState('right');
    const containerRef = useRef(null);

    const handleScroll = (scrollDirection) => {
        const container = containerRef.current;
        if (container) {
            const scrollAmount = scrollDirection === 'left' ? -container.offsetWidth : container.offsetWidth;
            const newIndex = (activeIndex + (scrollDirection === 'left' ? -1 : 1) + offers.length) % offers.length;
            container.scrollTo({ left: newIndex * container.offsetWidth, behavior: 'smooth' });
            setActiveIndex(newIndex);
            setDirection(scrollDirection);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleScroll('right');
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [activeIndex]);

    const pageVariants = {
        initial: (direction) => ({
            opacity: 0,
            x: direction === 'right' ? '100%' : '-100%',
        }),
        in: {
            opacity: 1,
            x: 0,
        },
        out: (direction) => ({
            opacity: 0,
            x: direction === 'right' ? '-100%' : '100%',
        }),
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.8,
    };

    return (
        <div className="relative w-full overflow-hidden bg-gray-100">
            <h2 className="text-5xl font-extrabold py-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Exclusive Offers
            </h2>
            <div className="relative w-full">
                <div
                    ref={containerRef}
                    className="flex overflow-x-hidden snap-x snap-mandatory"
                    style={{ scrollBehavior: 'smooth' }}
                    onClick={() => handleCardClick(name, offers[activeIndex].query)}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        {offers.map((offer, index) => (
                            <motion.div
                                key={offer.id}
                                className="flex-shrink-0 w-full"
                                custom={direction}
                                variants={pageVariants}
                                initial="initial"
                                animate="in"
                                exit="out"
                                transition={pageTransition}
                            >
                                <div className={`${offer.backgroundColor} text-white rounded-lg px-[10px]`}>
                                    <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
                                        {index % 2 === 0 ? (
                                            <>
                                                <div className="lg:w-1/2 mb-8 lg:mb-0">
                                                    <h3 className="text-4xl lg:text-6xl font-bold mb-4">{offer.title}</h3>
                                                    <p className="text-7xl lg:text-7xl font-extrabold mb-6 leading-none">{offer.discount}</p>
                                                    <p className="text-2xl lg:text-3xl mb-8">{offer.category}</p>
                                                    <div className="mb-8">
                                                        <CountdownTimer endTime={offer.endTime} />
                                                    </div>
                                                </div>
                                                <div className="h-[450px]">
                                                    <img
                                                        src={offer.image}
                                                        alt={offer.title}
                                                        className="w-full h-full bg-cover bg-center rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="h-[450px]">
                                                    <img
                                                        src={offer.image}
                                                        alt={offer.title}
                                                        className="w-full h-full bg-cover bg-center rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="lg:w-1/2 mb-8 lg:mb-0">
                                                    <h3 className="text-4xl lg:text-6xl font-bold mb-4">{offer.title}</h3>
                                                    <p className="text-7xl lg:text-7xl font-extrabold mb-6 leading-none">{offer.discount}</p>
                                                    <p className="text-2xl lg:text-3xl mb-8">{offer.category}</p>
                                                    <div className="mb-8">
                                                        <CountdownTimer endTime={offer.endTime} />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex justify-center mt-2 space-x-2 pb-8">
                {offers.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-gray-800 w-8' : 'bg-gray-400'
                            }`}
                        onClick={() => {
                            const container = containerRef.current
                            if (container) {
                                container.scrollTo({ left: index * container.offsetWidth, behavior: 'smooth' })
                                setActiveIndex(index)
                            }
                        }}
                        aria-label={`Go to offer ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}