import React from 'react'

import {BrowserRouter} from 'react-router-dom'

import StocksList from '../StocksList/StocksList'
import Portfolio from '../Portfolio/Portfolio'

import 'normalize.css'
import price from '../../data.json'
import styles from './App.css'
import '../../base.css'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      price: price,
      addedStocks: []
    }
    this.addStock = this.addStock.bind(this)
  }

  addStock (stock) {
    let addedStocks = this.state.addedStocks
    if(addedStocks.includes(stock))
      return
    this.setState({addedStocks: addedStocks.concat(stock)})
  }

  render() {
    const stockPrices = this.state.price
    const addedStocks = this.state.addedStocks
    console.log(addedStocks, stockPrices)
    return (
      <BrowserRouter>
        <div>
          <div className={styles.header}></div>
          <div className={styles.content}>
            <h3 className={styles.heading}> smallcase portfolio builder </h3>
            <StocksList stockPrices={stockPrices} addStock={this.addStock} addedStocks={addedStocks}/>
            <Portfolio stockPrices={stockPrices} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
