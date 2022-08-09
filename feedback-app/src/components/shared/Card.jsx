import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

Card.defaultPropTypes = {
  reverse: true
}

Card.propTypes = {
  children: PropTypes.node,
  reverse: PropTypes.bool
}

export default Card