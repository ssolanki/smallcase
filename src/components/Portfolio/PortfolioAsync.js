import React from 'react'
import styles from './PortfolioAsync.css'

class PortfolioAync extends React.Component {
  constructor () {
    super()
    this.state = {
      component: null
    }
  }
  componentDidMount () {
    // load component on mount
    require.ensure([], (require) => {
      const Component = require('./Portfolio').default
      this.setState({
        component: Component
      })
    })
  }
  render () {
    console.log(this.props)
    if (this.state.component) {
      return <this.state.component {...this.props.props} />
    }
    return (<div className={styles.loader}>Loading...</div>)
  }
}

export default PortfolioAync
