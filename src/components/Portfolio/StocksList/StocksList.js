import React from 'react'

import styles from './StocksList.css'
import imgSrc from '../../../images/remove_circle.png'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

const StocksList = ({changeStockCount, stocks, prices, netWorth}) => {
  let stocksList = []

  Object.keys(stocks).map((key, index) => {
    const stockRowClass = cx({
      stockRow: true,
      oddRow: index % 2 === 0,
      evenRow: index % 2 === 1
    })
    const weight = ((prices[key] * stocks[key].count * 100) / netWorth).toFixed(2)
    stocksList.push(
      <tr className={stockRowClass} key={key}>
        <td className={styles.stockName}> {key} </td>
        <td className={styles.price}> &#8377; {prices[key]} </td>
        <td>
          <div className={styles.shareInput}>
            <div className={styles.minus} onClick={(e) => changeStockCount(key, -1)}>-</div>
            <div className={styles.value} > {stocks[key].count} </div>
            <div className={styles.plus} onClick={(e) => changeStockCount(key, +1)}>+</div>
          </div>
        </td>
        <td className={styles.weight}> {weight}% <img src={imgSrc} className={styles.removeIcon} onClick={(e) => changeStockCount(key, 0)} /> </td>
      </tr>
    )
  })

  return (
    <div>
      <table className={styles.stocksList}>
        <thead>
          <tr className={styles.heading}>
            <th> stock </th>
            <th> price </th>
            <th> shares </th>
            <th> weight </th>
          </tr>
        </thead>
        <tbody>
          {stocksList}
        </tbody>
      </table>
    </div>
  )
}

export default StocksList
