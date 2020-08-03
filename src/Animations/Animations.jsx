import React from 'react';
import styles from '../Animations/Animations.module.css';
import skybg from '../images/bg_sky.jpg';
import earthbg from '../images/bg_earth.jpg';
import cloud from '../images/cloud.png';
import alice from '../images/alice.png';
import useWebAnimations from '@wellyshen/use-web-animations';

function Animations() {
  const { ref: clouds } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(1400px)' },
      { transform: 'translateX(-100%)' },
    ],
    timing: {
      duration: 10000,
      iterations: Infinity,
      playbackRate: -2,
    },
  });

  const { ref: alice_queen } = useWebAnimations({
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' },
    ],

    timing: {
      easing: 'steps(7, end)',
      duration: 1200,
      iterations: Infinity,
      playbackRate: 1 / 2,
    },
  });

  return (
    <div className={styles.animations__Container}>
      <div className={styles.animations__Clouds}>
        <img ref={clouds} src={cloud} alt="clouds" />
      </div>
      <div className={styles.animations__Skybg}>
        <img src={skybg} alt="sky background" />
      </div>
      <div className={styles.animations__Earthbg}>
        <img src={earthbg} alt="earth background" />
      </div>

      <div className={styles.animations__wrapper}>
        <img
          className={styles.animations__aliceAndQueen}
          src={alice}
          alt="alice and queen running"
          ref={alice_queen}
        />
      </div>
    </div>
  );
}

export default Animations;
