import React from 'react'

import styles from './StocksList.css'
import imgSrc from '../../../images/remove_circle.png'

const StocksList = () => {
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
          <tr className={styles.oddRow}>
            <td className={styles.stockName}> adaint </td>
            <td> &#8377; 123 </td>
            <td> <div className={styles.shareInput}> <div className={styles.minus}>-</div> <input className={styles.value} value={23} /> <div className={styles.plus}>+</div> </div> </td>
            <td> 23.3% <img src={imgSrc} className={styles.removeIcon} /> </td>
          </tr>
          <tr className={styles.evenRow}>
            <td className={styles.stockName}> adaint </td>
            <td> &#8377; 123 </td>
            <td> <div className={styles.shareInput}> <div className={styles.minus}>-</div> <input className={styles.value} value={23} /> <div className={styles.plus}>+</div> </div> </td>
            <td> 23.3% </td>
          </tr>
          <tr className={styles.oddRow}>
            <td className={styles.stockName}> adaint </td>
            <td> &#8377; 123 </td>
            <td> <div className={styles.shareInput}> <div className={styles.minus}>-</div> <input className={styles.value} value={23} /> <div className={styles.plus}>+</div> </div> </td>
            <td> 23.3% </td>
          </tr>
          <tr className={styles.evenRow}>
            <td className={styles.stockName}> adaint </td>
            <td> &#8377; 123 </td>
            <td> <div className={styles.shareInput}> <div className={styles.minus}>-</div> <input className={styles.value} value={23} /> <div className={styles.plus}>+</div> </div> </td>
            <td> 23.3% </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StocksList
