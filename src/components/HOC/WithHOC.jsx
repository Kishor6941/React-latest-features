import React from 'react'

const WithHOC = (OriginalComponent) => {
    const NewComponent = (props) => {

        const [count ,setCount] = React.useState(0)

        const increment = (c) => {
            setCount(count => count + c)
        }

        const decrement = () => {
            setCount(count => count - 1)

        }
        
        return (
            <OriginalComponent {...props} count={count} increment={increment} decrement={decrement} />
        )
    }

    return NewComponent
}

export default WithHOC