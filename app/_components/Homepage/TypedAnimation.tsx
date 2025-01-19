'use client'
import { TypeAnimation } from 'react-type-animation';

const TypedAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Engineer.',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Developer.',
                1000,
                'UI/UX Designer.',
                1000,
                'Project Manager.',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};

export default TypedAnimation