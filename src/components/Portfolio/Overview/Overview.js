import React from 'react'

import styles from './Overview.css'
import * as d3 from 'd3';

const Overview = ({stocks, prices, netWorth, eps}) => {
  let totalEarnings = 0
  Object.keys(stocks).map((key) => {
    totalEarnings += eps[key] * stocks[key]['count']
  })
  const PERatio = (netWorth/totalEarnings).toFixed(2)
  const PBRatio = PERatio
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}> Portfolio Overview </div>
        <div className={styles.overview}>
          <div className={styles.graph}>
          </div>
          <div className={styles.details}>
            <div className={styles.stats}>
              <div className={styles.col6}>
                <p className={styles.heading}>
                  stocks
                </p>
                <p className={styles.val}>
                  {Object.keys(stocks).length}
                </p>
              </div>
              <div className={styles.col6}>
                <p className={styles.heading}>
                  net worth
                </p>
                <p className={styles.val}>
                  &#8377; {netWorth}
                </p>
              </div>
              <div className={styles.col6}>
                <p className={styles.heading}>
                  P/E ratio
                </p>
                <p className={styles.val}>
                  {PERatio}
                </p>
              </div>
              <div className={styles.col6}>
                <p className={styles.heading}>
                  P/B ratio
                </p>
                <p className={styles.val}>
                  {PBRatio}
                </p>
              </div>
            </div>
            <div className={styles.btn}>
              <button> Build Portfolio </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
