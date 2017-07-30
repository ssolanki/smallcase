import React from 'react'

import styles from './StockInfo.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

const StockInfo = () => {
  let stockClass = cx({
    stockInfo: true,
    clearfix: true
  })
  return (
    <div className={stockClass}>
      <div className={styles.info}>
        <p className={styles.name}> ADFI </p>
        <p className={styles.type}> Financial Services </p>
      </div>
      <div className={styles.otherInfo}>
        <p className={styles.price}> &#8377; 1234 </p>
      </div>
    </div>
  )
}

export default StockInfo
