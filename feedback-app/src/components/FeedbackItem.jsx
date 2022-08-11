import { FaTimes } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import Card from "./shared/Card"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item, reverse}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    return (
        <Card reverse = {reverse}>
            <div className="num-display">{item.rating}</div>
            <button onClick = {() => editFeedback(item)} className="edit">
                <FaRegEdit color={reverse ? 'white' : 'purple'}/>
            </button>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color={reverse ? 'white' : 'purple'}/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.defaultProps = {
    reverse: false
}

export default FeedbackItem