import React from 'react'

import {BrowserRouter} from 'react-router-dom'

import StocksList from '../StocksList/StocksList'
import PortfolioAsync from '../Portfolio/PortfolioAsync'

import 'normalize.css'
import price from '../../data.json'
import styles from './App.css'
import '../../base.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      price: price,
      addedStocks: {}
    }
    this.addStock = this.addStock.bind(this)
    this.changeCount = this.changeCount.bind(this)
  }

  addStock (stock) {
    let addedStocks = Object.assign({}, this.state.addedStocks)
    if (Object.keys(addedStocks).includes(stock)) {
      return false
    }
    addedStocks[stock] = {count: 1}
    this.setState({addedStocks})
  }

  changeCount (stock, val) {
    let addedStocks = Object.assign({}, this.state.addedStocks)
    if ((addedStocks[stock]['count'] === 1 && val === -1) || val === 0) {
      delete addedStocks[stock]
    } else {
      addedStocks[stock]['count'] += val
    }
    this.setState({addedStocks})
  }

  render () {
    const stockPrices = this.state.price
    const addedStocks = this.state.addedStocks

    return (
      <BrowserRouter>
        <div>
          <div className={styles.header} />
          <div className={styles.content}>
            <h3 className={styles.heading}> smallcase portfolio builder </h3>
            <StocksList stockPrices={stockPrices} addStock={this.addStock} addedStocks={addedStocks} />
            { Object.keys(addedStocks).length > 0 &&
              <PortfolioAsync props={Object.assign({}, {stockPrices: stockPrices}, {changeCount: this.changeCount}, {addedStocks: addedStocks})} />
            }
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
