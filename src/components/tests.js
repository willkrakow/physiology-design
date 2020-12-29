import React from 'react'
import PropTypes from 'prop-types'

export const Tests = ({ count }) => {

    const handleClick = () => {
        setCounter(counter + 1)
    }

    const [ counter, setCounter ] = useState(0)

    useEffect(() => {
        setCounter(count)
    }, [count])


return (<div>hi there {counter} <button onClick={handleClick}>Increment</button></div>)
}


Tests.propTypes = {
    count: PropTypes.number,
}