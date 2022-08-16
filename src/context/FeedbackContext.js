import { createContext, useState, useEffect } from "react";
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchFeedback()
    }, [])

    //Fetch Feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    //Add Feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch(`/feedback`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()

        setFeedback([data,...feedback])
    }

    //Delete Feedback
    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter((item) => {
                return item.id !== id
            }))
        }
    }

    //Edit Feedback Item
    const editFeedback = async (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //Update Feedback
    const updateFeedback = async (id, updatedItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
        setFeedbackEdit({
            item: {},
            edit: false
        })
    }

    return (
        <FeedbackContext.Provider value ={{
            feedback,
            feedbackEdit,
            isLoading,
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