import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState(true)
    const [rating, setRating] = useState(10)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
        }
    }, [feedbackEdit])

    const handleEvent = (e) => {
        let text = e.target.value
        setText(text)
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== ''  && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage("Review has to be atleast 10 characters")
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            feedbackEdit.edit ?
            updateFeedback(feedbackEdit.item.id, newFeedback) :
            addFeedback(newFeedback)
        }
        setBtnDisabled(true)
        setText('')
    }

    return (
        <Card>
            <form onSubmit = {handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select = {(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange = {handleEvent} type="text" placeholder="Write a review" value={text}/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm