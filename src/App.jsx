import React from 'react'
import ReactDOM from 'react-dom'

import styles from './styles/summary.scss'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <Main tileNumber={parseInt(styles.tileAmount)} />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
