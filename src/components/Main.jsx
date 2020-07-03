import React from 'react'
import PropTypes from 'prop-types'

export default class Main extends React.Component {
  static propTypes = {
    tileNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }

  static defaultProps = {
    tileNumber: 5,
  }

  state = {
    tiles: [],
  }

  constructor(props) {
    super(props)

    const { tileNumber } = props
    this.state.tiles = this.tilesGenerator(tileNumber)
  }

  handleDrag = (event) => {}

  tilesGenerator = (number) => {
    number = Number(number)
    if (number < 0 || number > 10) return
    const tiles = []
    for (let i = 1; i <= number; i++) {
      tiles.push(<div className={`metro metro-${i}`} key={Date.now() * Math.random()} />)
    }
    return tiles
  }

  render() {
    const { tileNumber } = this.props
    const { tiles } = this.state
    return (
      <div className="main-container">
        <div className="main-container-1">{tiles}</div>
      </div>
    )
  }
}
