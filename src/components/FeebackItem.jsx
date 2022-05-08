import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'

function FeebackItem({ item }) {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button className='close' onClick={() => deleteFeedback(item.id)}>
				<FaTimes color='purple' />
			</button>
			<button className='edit' onClick={() => editFeedback(item)}>
				<FaEdit />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	)
}

FeebackItem.propTypes = {
	item: PropTypes.object.isRequired
}

export default FeebackItem