import React from 'react'

import {BrowserRouter} from 'react-router-dom'

import StocksList from '../StocksList/StocksList'
import Portfolio from '../Portfolio/Portfolio'

import 'normalize.css'
import price from '../../data.json'
import styles from './App.css'
import '../../base.css'

const App = () => (
  <BrowserRouter>
    <div>
      <div className={styles.header}></div>
      <div className={styles.content}>
        <h3 className={styles.heading}> smallcase Portfolio Builder </h3>
        <StocksList />
        <Portfolio />
      </div>
    </div>
  </BrowserRouter>
)

export default App
