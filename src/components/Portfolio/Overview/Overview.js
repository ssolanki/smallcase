import React from 'react'

import styles from './Overview.css'

const Overview = ({stocks, prices, netWorth, eps}) => {
  let totalEarnings = 0
  Object.keys(stocks).map((key) => {
    totalEarnings += eps[key] * stocks[key]['count']
  })
  const PERatio = (netWorth/totalEarnings).toFixed(2)
  const PBRatio = PERatio // don't know formula so on UI showing same as PERatio

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}> Portfolio Overview </div>
        <div className={styles.overview}>
          <div className={styles.graph}>
            <canvas id="chart"></canvas>
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
                  &#8377; {netWorth.toFixed(2)}
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
