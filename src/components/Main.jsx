import React from 'react'
import PropTypes from 'prop-types'

const ChangeLayoutButton = ({ vector }) => {
  const [isClicked, setIsClicked] = React.useState(false)

  const handleClick = () => {}

  return (
    <div onClick={handleClick} className={`arrow arrow--${vector}`}>
      <div className="arrow-top"></div>
      <div className="arrow-bottom"></div>
    </div>
  )
}

ChangeLayoutButton.propTypes = {
  vector: PropTypes.oneOf('left', 'right').isRequired,
}

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
        <ChangeLayoutButton vector="left" />
        <div className="main-container-1">{tiles}</div>
        <ChangeLayoutButton vector="right" />
      </div>
    )
  }
}
