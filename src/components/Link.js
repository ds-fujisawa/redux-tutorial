import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton';

const Link = ({ active, children, onClick }) => {
	if (active) {
		return  <FlatButton label={children} disabled={true} />
	}
	return (
	<FlatButton href="#"
	onClick={(e) => {
		e.preventDefault()
		onClick()
	}}
	primary={true}
	label={children}
	>
	</FlatButton>
	)
}
Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}
export default Link