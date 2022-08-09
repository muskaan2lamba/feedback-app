import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback, handleDelete, colorTheme }) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet!</p>
    }
    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key = {item.id}
                    initial = {{ opacity: 0 }}
                    animate = {{ opacity: 1 }}
                    exit = {{ opacity: 0 }}
                >
                <FeedbackItem key={item.id} handleDelete = {handleDelete} item = {item} reverse={colorTheme}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )

    // without animation
    // return (
    //     <div className="feedback-list">
    //         {feedback.map((item) => (
    //             // <div key={item.id}>{item.rating}</div>
    //             <FeedbackItem key={item.id} handleDelete = {handleDelete} item = {item} reverse={colorTheme}/>
    //         ))}
    //     </div>
    // )
}

export default FeedbackList