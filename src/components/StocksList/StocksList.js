import React from 'react'

import styles from './StocksList.css'
import classNames from 'classnames/bind'
import StockInfo from './StockInfo/StockInfo'

let cx = classNames.bind(styles)

const StocksList = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.banner}>
          Pick Stocks
        </div>
        <div className={styles.bannerAngle}></div>
        <div className={styles.info}>
          Showing 6 - 12 of 23 matching stocks
        </div>
        <div className={styles.col3}>
          <StockInfo />
        </div>
        <div className={styles.col3}>
          <StockInfo />
        </div>
        <div className={styles.col3}>
          <StockInfo />
        </div>
        <div className={styles.col3}>
          <StockInfo />
        </div>
        <div className={styles.col3}>
          <StockInfo />
        </div>
        <div className={"clearfix " + styles.actionSection}>
          <div className={styles.prev}> prev </div>
          <div className={styles.next}> next </div>
        </div>
      </div>
    </div>
  )
}

export default StocksList
