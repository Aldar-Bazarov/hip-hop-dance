// Dependencies
import React from "react";
import './dist/Slider.css'

const slides = [
    'url(https://psv4.userapi.com/c236331/u153175059/docs/d16/a0986d00488e/pexels-allan-mas-5368956.jpg?extra=wPngJY_BBB1Dk-CvmQi8V9nBlbyOe8cNxuDQC2fBQSGv08tswpDsxxmy4clY6EV1S_6MVevFqqehTz5a0T9cV4JgeCeuzr367NZWPWqdNnTDWrrkLBZ7UYdmW3Q7EHi8_QY3_AQUHXfSbhLMDi0DcQ)',
    'url(https://psv4.userapi.com/c236331/u153175059/docs/d20/036b0f7d2fd0/ilja-tulit-Rdy1AqzqcMU-unsplash.jpg?extra=ppnEOzcQ5qC7GtLkwyI0xRNeP2tKnJ0ONCrlFfNW5AQgnjiaPTdc-xGQTG_sVZaaSnTxzkVQuv8j9N6XTj07xv6ngPvAAfoukvU45bB5jFDxkse_LN5K8ogzx_6X52tUSJU4Nj3qAOctoSjzBA3SYA)',
    'url(https://psv4.userapi.com/c240331/u153175059/docs/d42/5f5d44fa2cd8/breakreate-A_IfOgYEQU4-unsplash.jpg?extra=rPkai44V5CZZkyaMCm_UuhqIcy5EU2CpFsMhIAL1NlHEfigqF1rC-yehXjLgD0255B3Yb2vrE4UfT7VorIV_kKyDZGCYKBRea1AOvvefTRFo13Z9WX4-tUuvcZtmfs84nZ55nB4SHWzh-TQ8DW5pUw)',
    'url(https://psv4.userapi.com/c240331/u153175059/docs/d50/9bcd587d3ff7/yan-berthemy-TRrBszDmuWE-unsplash.jpg?extra=PbpMZlBQLR5cF9V_BWUrvlF4JofSjypHao_dupGdDb6rA1Dw8c2QKHhqYrQbmcZauaZLXpOpqhutD2yMJjTvYN140o9A3ByIdmTPBcJm7Mil9u-s0AUJ3aBY7_kH268Rj4HiJmFFVXabdluXZzPspA)',
    'url(https://psv4.userapi.com/c534536/u150532076/docs/d31/617a73b9aa02/boy-and-girl-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light.jpg?extra=TqTFXi_Xc0yoUjmaZEH8igUJqNOMXD_vSv5zTmIShdOhRotoy5ewsRUgICEZs2SM573kcMHvFlnyIR7l_UbJKPNANJd7jLpux8AS4PCCcDnDQkV-wt18dQ9QpPJOXCVUZKiBrbBXPyy6V1ZFcylcMA)',
]

const Slider = () => {
    const [active, setActive] = React.useState(0);
    const max = slides.length;

    const nextOne = () => active < max - 1 && setActive(active + 1)

    const prevOne = () => active > 0 && setActive(active - 1)

    const isActive = value => active === value && 'active'

    const setSliderStyles = () => {
        const transition = active * - 500;

        return {
            width: (slides.length * 500) + 'px',
            transform: 'translateX(' + transition + 'px)'
        }
    }

    const renderSlides = () => 
    slides.map((item, index) => (
            <div
                className='each-slide'
                key={index}
                style={{ backgroundImage: item }}>
            </div>
        )
    );

    const renderDots = () => slides.map((silde, index) => (
        <li
            className={isActive(index) + ' dots'}
            key={index}>
            <button onClick={() => setActive(index)}>
                <span>&#9679;</span>
            </button>
        </li>
    ));

    const renderArrows = () => (
        <React.Fragment>
            <button
                type='button'
                className='arrows prev'
                onClick={() => prevOne()} >
                <svg fill='#FFFFDS' width='50' height='50' viewBox='0 0 24 24'>
                    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
                    <path d='M0 0h24v24H0z' fill='none' />
                </svg>
            </button>
            <button
                type='button'
                className='arrows next'
                onClick={() => nextOne()} >
                <svg fill='#FFFFDS' height='50' viewBox='0 0 24 24' width='50'>
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                    <path d='M0 0h24v24H0z' fill='none' />
                </svg>
            </button>
        </React.Fragment>
    )

    return (
        <div className="slider-container">
            <section className='slider'>
                <div
                    className='wrapper'
                    style={setSliderStyles()}>
                    {renderSlides()}
                </div>
                {renderArrows()}
                <ul className='dots-container'>
                    {renderDots()}
                </ul>
            </section>
        </div>
    );
};

export default Slider;