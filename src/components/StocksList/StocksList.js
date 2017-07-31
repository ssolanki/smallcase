import React from 'react'

import styles from './StocksList.css'
import classNames from 'classnames/bind'
import StockInfo from './StockInfo/StockInfo'
import filterImgUrl from '../../images/filter.png'

let cx = classNames.bind(styles)

class StocksList extends React.Component {
  constructor () {
    super()
    this.state = {
      stockPrices: {'price': {}},
      perPageStocks: 8,
      pageNo: 0
    }
    this.perPageStocks = 8
    this.addStock = this.addStock.bind(this)
    this.showPrevStocks = this.showPrevStocks.bind(this)
    this.showNextStocks = this.showNextStocks.bind(this)
  }
  componentDidMount () {
    this.setState({stockPrices: this.props.stockPrices, addedStocks: this.props.addedStocks})
  }
  componentWillReceiveProps (nextProps) {
    this.setState({stockPrices: nextProps.stockPrices, addedStocks: nextProps.addedStocks})
  }
  addStock (name) {
    this.props.addStock(name)
  }
  showPrevStocks () {
    this.setState({pageNo: this.state.pageNo - 1})
  }
  showNextStocks () {
    this.setState({pageNo: this.state.pageNo + 1})
  }
  render () {
    const prices = this.state.stockPrices.price
    const addedStocks = this.state.addedStocks
    const perPageItems = this.state.perPageStocks
    const totalStocks = Object.keys(prices).length
    const pageNo = this.state.pageNo
    const lowerIndex = pageNo * perPageItems + 1
    const higherIndex = (pageNo + 1) * perPageItems > totalStocks ? totalStocks : ((pageNo + 1) * perPageItems)

    const prevBtnClass = cx({
      prev: true,
      disable: (pageNo === 0)
    })
    const nextBtnClass = cx({
      next: true,
      disable: totalStocks < (pageNo + 1) * perPageItems
    })

    let stocksList = []
    Object.keys(prices).map((key, index) => {
      if (index >= (pageNo + 1) * perPageItems || (index < pageNo * perPageItems)) {
        return
      }
      const isStockAdded = Object.keys(addedStocks).includes(key)
      stocksList.push(<div className={styles.col3} key={index}> <StockInfo name={key} price={prices[key]} addStock={this.addStock} isAdded={isStockAdded} /> </div>)
    })

    return (
      <div>
        <div className={styles.container}>
          <div className={styles.banner}> Pick Stocks </div>
          <div className={styles.bannerAngle} />
          <div className={styles.info}>
            Showing {lowerIndex} - {higherIndex} of {totalStocks} matching stocks
          </div>
          <div className={styles.filters}>
            <img src={filterImgUrl} />
            <span className={styles.text}> apply filters </span>
            <span className={styles.count}> 3 </span>
          </div>
          {stocksList}
          <div className={styles.actionSection}>
            <div className={prevBtnClass} onClick={this.showPrevStocks}> prev </div>
            <div className={nextBtnClass} onClick={this.showNextStocks}> next </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StocksList
