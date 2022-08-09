import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"

function FeedbackItem({item, reverse, handleDelete}) {
    return (
        <Card reverse = {reverse}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
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