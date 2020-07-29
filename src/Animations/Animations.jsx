import React from 'react';
import styles from '../Animations/Animations.module.css';
import skybg from '../images/bg_sky.jpg';
import earthbg from '../images/bg_earth.jpg';

function Animations() {
  return (
    <div className={styles.animations__Container}>
      <div className={styles.animations__Skybg}>
        <img src={skybg} alt="sky background" />
      </div>
      <div className={styles.animations__Earthbg}>
        <img src={earthbg} alt="earth background" />
      </div>
    </div>
  );
}

export default Animations;
