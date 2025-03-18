import { useState } from "react";

const WithHOC = (OriginalComponent) => {
    const NewComponent = () => {
        const [count, setCount] = useState(0);
        return <OriginalComponent count={count} setCount={setCount} />
           
    }
    return NewComponent
}

export default WithHOC