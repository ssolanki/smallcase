import React from 'react'

import styles from './Portfolio.css'
import StocksList from './StocksList/StocksList'
import Overview from './Overview/Overview'

const Portfolio = () => (
  <div>
    <div className={styles.container}>
      <div className={styles.banner}> Manage Portfolio </div>
      <div className={styles.bannerAngle}></div>
      <div className={styles.clearfix}>
        <div className={styles.stocksInfo}>
          <StocksList />
        </div>
        <div className={styles.overview}>
          <Overview />
        </div>
      </div>

    </div>
  </div>
)

export default Portfolio
