import React from 'react';
import styles from '../Animations/Animations.module.css';
import skybg from '../images/bg_sky.jpg';
import earthbg from '../images/bg_earth.jpg';
import cloud from '../images/cloud.png';
import alice from '../images/alice.png';
import rook from '../images/rook1.png';
import palm2 from '../images/palm2.png';
import bush from '../images/bush.png';
import useWebAnimations from '@wellyshen/use-web-animations';

function Animations() {
  const { ref: clouds, getAnimation: animationCloud } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(1400px)' },
      { transform: 'translateX(-100%)' },
    ],
    timing: {
      duration: 10500,
      iterations: Infinity,
      playbackRate: -2,
    },
  });

  const {
    ref: background,
    getAnimation: animationBackground,
  } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-600%)' },
    ],
    timing: {
      duration: 36000,
      iterations: Infinity,
      // playbackRate: 0.2,
    },
  });

  const {
    ref: background_bush,
    getAnimation: animationBackgroundBush,
  } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(200%)' },
      { transform: 'translateX(-600%)' },
    ],
    timing: {
      duration: 36000,
      iterations: Infinity,
      // playbackRate: 0.2,
    },
  });

  const {
    ref: foreground,
    getAnimation: animationForeground,
  } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(200%)' },
      { transform: 'translateX(-600%)' },
    ],
    timing: {
      duration: 15000,
      iterations: Infinity,
      // playbackRate: 1,
    },
  });

  const {
    ref: alice_queen,
    getAnimation: animationAliceQueen,
  } = useWebAnimations({
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' },
    ],

    timing: {
      easing: 'steps(7, end)',
      duration: 600,
      iterations: Infinity,
      playbackRate: 1,
    },
  });

  let animations = [
    animationCloud,
    animationBackground,
    animationBackgroundBush,
    animationForeground,
    animationAliceQueen,
  ];

  const handleIncreaseSpeed = () => {
    animations.forEach((e) => e().updatePlaybackRate(e().playbackRate * 1.2));
  };

  const handleDecreaseSpeed = () => {
    animations.forEach((e) => e().updatePlaybackRate(e().playbackRate / 1.2));
  };

  return (
    <div className={styles.animations__Container}>
      <div className={styles.animations__DecSpeed}>
        <button onClick={() => handleDecreaseSpeed()}>Decrease Speed</button>
      </div>

      <div className={styles.animations__Clouds}>
        <img ref={clouds} src={cloud} alt="clouds" />
      </div>

      <div>
        <div className={styles.animations__Skybg}>
          <img src={skybg} alt="sky background" />
        </div>
        <div className={styles.animations__Earthbg}>
          <img src={earthbg} alt="earth background" />
        </div>
      </div>

      <div>
        <img
          className={styles.animations__bgRook}
          src={rook}
          alt="backgrounditems"
          ref={background}
        />
      </div>

      <div>
        <img
          src={bush}
          alt="backgrounditems"
          className={styles.animations__bgbush}
          ref={background_bush}
        />
      </div>

      <div>
        <img
          className={styles.animations__fgpalm}
          src={palm2}
          alt="foregrounditems"
          ref={foreground}
        />
      </div>

      <div
        className={styles.animations__wrapper}
        onClick={() => handleIncreaseSpeed()}
      >
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
