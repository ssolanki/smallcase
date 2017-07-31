import React from 'react'

import styles from './StockInfo.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

const StockInfo = ({name, price, addStock, isAdded}) => {
  let stockClass = cx({
    stockInfo: true,
    clearfix: true,
    added: isAdded
  })
  return (
    <div className={stockClass}>
      <div className={styles.info}>
        <p className={styles.name}> {name} </p>
        <p className={styles.type}> Financial Services </p>
      </div>
      <div className={styles.otherInfo}>
        <p className={styles.price}> &#8377; {price} </p>
        <div className={styles.button} onClick={() => {addStock(name)}}> </div>
      </div>
    </div>
  )
}

export default StockInfo
