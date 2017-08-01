import React from 'react'

import styles from './Portfolio.css'
import StocksList from './StocksList/StocksList'
import Overview from './Overview/Overview'

import Chart from 'chart.js'

class Portfolio extends React.Component {
  constructor () {
    super()
    this.state = {
      stockPrices: {'price': {}},
      addedStocks: {}
    }
    this.perPageStocks = 8
    this.changeCount = this.changeCount.bind(this)
  }
  componentDidMount () {
    this.setState({stockPrices: this.props.stockPrices, addedStocks: this.props.addedStocks})
  }
  componentWillReceiveProps (nextProps) {
    this.setState({stockPrices: nextProps.stockPrices, addedStocks: nextProps.addedStocks})
  }
  changeCount (stock, val) {
    this.props.changeCount(stock, val)
  }
  componentDidUpdate () {
    let graph = document.getElementById('chart')
    const historical = this.state.stockPrices.historical
    const stocks = this.state.addedStocks
    if (!graph) {
      return false
    }

    let netWorth = {} //  netWorth object
    Object.keys(historical).map((stock) => {
      const shareHeld = stocks[stock] ? stocks[stock]['count'] : 0
      historical[stock]['point'].forEach((priceObj, index) => {
        if (netWorth.hasOwnProperty(priceObj['date'])) {
          netWorth[priceObj['date']] += priceObj['price'] * shareHeld
        } else {
          if (priceObj['price'] * shareHeld > 0) {
            netWorth[priceObj['date']] = priceObj['price'] * shareHeld
          }
        }
      })
    })

    console.log(netWorth)
    const dateKeys = Object.keys(netWorth).map((val) => {
      const timeDiff = Math.abs((new Date(val)).getTime() - (new Date(Object.keys(netWorth)[0])).getTime())
      return Math.ceil(timeDiff / (1000 * 3600 * 24))
    })

    const data = {
      labels: dateKeys,
      datasets: [{
        backgroundColor: '#82AFE4',
        borderColor: '#1D70CA',
        data: Object.values(netWorth),
        label: 'Price/Time Graph',
        fill: 'start'
      }]
    }

    const chart = new Chart('chart', {
			type: 'line',
			data: {
        labels: data.labels,
				datasets: data.datasets
			}
		})
  }

  render () {
    const prices = this.state.stockPrices.price
    const eps = this.state.stockPrices.eps
    const addedStocks = this.state.addedStocks

    if (Object.keys(addedStocks).length === 0) {
      return false
    }

    let netWorth = 0
    Object.keys(addedStocks).map((key) => {
      netWorth += prices[key] * addedStocks[key]['count']
    })

    return (
      <div>
        <div className={styles.container}>
          <div className={styles.banner}> Manage Portfolio </div>
          <div className={styles.bannerAngle} />
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
