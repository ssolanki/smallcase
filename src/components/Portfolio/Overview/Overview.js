import React from 'react'

import styles from './Overview.css'

const Overview = () => (
  <div>
    <div className={styles.container}>
      <div className={styles.header}> Portfolio Overview </div>
      <div className={styles.overview}>
        <div className={styles.graph}>
        </div>
        <div className={styles.details}>
          <div className={styles.col6}>
            <p className={styles.heading}>
              stocks
            </p>
            <p className={styles.val}>
              6
            </p>
          </div>
          <div className={styles.col6}>
            <p className={styles.heading}>
              net worth
            </p>
            <p className={styles.val}>
              &#8377; 12456
            </p>
          </div>
          <div className={styles.col6}>
            <p className={styles.heading}>
              P/E ration
            </p>
            <p className={styles.val}>
              23.2
            </p>
          </div>
          <div className={styles.col6}>
            <p className={styles.heading}>
              P/B ratio
            </p>
            <p className={styles.val}>
              12.4
            </p>
          </div>
          <div className={styles.btn}>
            <button> Build Portfolio </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Overview
