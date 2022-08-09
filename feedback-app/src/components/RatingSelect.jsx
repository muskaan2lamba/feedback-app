import { useState } from "react"

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(10)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    const renderRatings = () => {
        let listItems = []
        for(let i = 1;i <= 10;i++){
            listItems.push(<li key={i}>
                <input
                    type="radio"
                    id={`num${i}`}
                    name='rating'
                    value={i}
                    onChange={handleChange}
                    checked={selected === i}
                />
                <label htmlFor={`num${i}`}>{i}</label>
            </li>)
        }
        return listItems
    }

  return (
    <ul className="rating">{renderRatings()}</ul>
  )
}

export default RatingSelect