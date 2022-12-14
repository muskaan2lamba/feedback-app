import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return <p>No Feedback Yet!</p>
    }
    return (
        <div className="feedback-list">
            {(isLoading)?
                <Spinner />
                :
                <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key = {item.id}
                        initial = {{ opacity: 0 }}
                        animate = {{ opacity: 1 }}
                        exit = {{ opacity: 0 }}
                    >
                    <FeedbackItem key={item.id} item = {item}/>
                    </motion.div>
                ))}
                </AnimatePresence>

            }
        </div>
    )

    // without animation
    // return (
    //     <div className="feedback-list">
    //         {feedback.map((item) => (
    //             // <div key={item.id}>{item.rating}</div>
    //             <FeedbackItem key={item.id} handleDelete = {handleDelete} item = {item}/>
    //         ))}
    //     </div>
    // )
}

export default FeedbackList