'use client'

import React, {useEffect, useState} from 'react';
import styles from './RangeSlider.module.scss'

const RangeSlider = () => {
  const [minVal, setMinVal] = useState(1200);
  const [maxVal, setMaxVal] = useState(5500);
  const priceGap = 1000;

  useEffect(() => {
    if (maxVal - minVal < priceGap) {
      if (maxVal === 5500) {
        setMinVal(maxVal - priceGap);
      } else {
        setMaxVal(minVal + priceGap);
      }
    }
  }, [minVal, maxVal, priceGap]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.element}>
        <div className={styles.slider}>
          <div className={styles.progress} style={{
            left: `${(minVal / 10000) * 100}%`,
            right: `${100 - (maxVal / 10700) * 100}%`
          }}/>
        </div>
        <div className={styles['range-input']}>
          <input type="range" className="range-min" min="100" max="10000" value={minVal}
                 onChange={(e) => setMinVal(Number(e.target.value))} step="100"/>
          <input type="range" className="range-max" min="1000" max="10000" value={maxVal} step="100"
                 onChange={(e) => setMaxVal(Number(e.target.value))}/>
        </div>
      </div>
      <div className={styles.values}>${minVal} - ${maxVal}</div>
    </div>
  );
};

export default RangeSlider;