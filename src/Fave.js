import React, { useState, useEffect } from 'react'

const Fave = (props) => {
    const [toggle, setToggle] = useState('add_to_queue')

    useEffect(() => {
        setToggle(props.isFave ? 'remove_from_queue' : 'add_to_queue')
    }, [props.isFave])

    const handleClick = (e) => {
        e.stopPropagation()
        console.log("handling fave click!");
        props.onFaveToggle()
    }

    return (
        <div className={`film-row-fave ${toggle}`} onClick={handleClick}>
            <p className="material-icons">{toggle}</p>
        </div>
    );
}

export default Fave