import React from 'react'

import styles from './Portfolio.css'
import StocksList from './StocksList/StocksList'
import Overview from './Overview/Overview'

class Portfolio extends React.Component{
  constructor() {
    super()
    this.state = {
      stockPrices: {"price":{}},
      addedStocks: {}
    }
    this.perPageStocks = 8
    this.changeCount = this.changeCount.bind(this)
  }
  componentDidMount () {
    this.setState({stockPrices: this.props.stockPrices, addedStocks: this.props.addedStocks})
  }
  componentWillReceiveProps(nextProps) {
    this.setState({stockPrices: nextProps.stockPrices, addedStocks: nextProps.addedStocks})
  }
  changeCount(stock, val) {
    this.props.changeCount(stock, val)
  }
  render () {
    const prices = this.state.stockPrices.price
    const eps = this.state.stockPrices.eps
    const addedStocks = this.state.addedStocks
    const totalStocks = Object.keys(prices).length
    if (Object.keys(addedStocks).length === 0)
      return false

    let netWorth = 0
    Object.keys(addedStocks).map((key) => {
      netWorth += prices[key] * addedStocks[key]['count']
    })

    return (
      <div>
        <div className={styles.container}>
          <div className={styles.banner}> Manage Portfolio </div>
          <div className={styles.bannerAngle}></div>
          <div className={styles.clearfix}>
            <div className={styles.stocksInfo}>
              { Object.keys(addedStocks).length > 0 &&
                <StocksList stocks={addedStocks} changeStockCount={this.changeCount} prices={prices} netWorth={netWorth} />
              }
            </div>
            <div className={styles.overview}>
              <Overview stocks={addedStocks} prices={prices} netWorth={netWorth} eps={eps} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
