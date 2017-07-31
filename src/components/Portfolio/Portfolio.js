import React from 'react'

import styles from './Portfolio.css'
import StocksList from './StocksList/StocksList'

const Portfolio = () => (
  <div>
    <div className={styles.container}>
      <div className={styles.banner}> Manage Portfolio </div>
      <div className={styles.bannerAngle}></div>
      <div className={styles.stocksInfo}>
        <StocksList />
      </div>
    </div>
  </div>
)

export default Portfolio
