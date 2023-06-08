import React, { useRef } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import "./logo-slider.css";

const LogoCarousel = () => {
    const scrollRef = useRef(null);
    const { scrollToNextItem, scrollToPrevItem } = useSnapCarousel(scrollRef);

    return (
        <>
            <div>
                <h3 style={{ marginLeft: '50px', marginTop: '50px' }}> Main Categories </h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: '30px 50px', overflow: 'hidden' }}>
                <button onClick={scrollToPrevItem}>&lt;</button>
                <ul
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        margin: '0',
                        padding: 0,
                        gap: '12px',
                        listStyle: 'none',
                        scrollBehavior: 'smooth',
                        scrollSnapType: 'x mandatory',
                        overflowX: 'scroll',
                        flexWrap: 'nowrap',
                    }}
                >
                    {Array.from({ length: 12 }).map((_, i) => (
                        <li
                            style={{
                                background: '#FFED4F',
                                borderRadius: '14px',
                                width: '160px',
                                height: '220px',
                                flexShrink: 0,
                                color: '#000',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            Item {i}
                        </li>
                    ))}
                </ul>
                <button onClick={scrollToNextItem}>&gt;</button>
            </div>
        </>
    );
};

export default LogoCarousel;
