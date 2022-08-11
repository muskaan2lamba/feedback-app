import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    //Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => {
                return item.id !== id
            }))
        }
    }

    //Edit Feedback Item
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //Update Feedback
    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updatedItem} : item))
        setFeedbackEdit({
            item: {},
            edit: false
        })
    }

    return (
        <FeedbackContext.Provider value ={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext