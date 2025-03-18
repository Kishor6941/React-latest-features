import React, { useDeferredValue } from 'react'

const UseDeferredValueHook = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [data, setData] = React.useState([])
  const deferredValue = useDeferredValue(data)

  const handleChange = (e) => {
    setInputValue(e.target.value)
    let list = [];
    for(let i = 0; i < 30000; i++) {
      list.push(inputValue)
    }
    setData(list)
  }
  return (
    <div className='container mt-5 offset-3'>
      <div className="form-group">
        <label htmlFor="">Enter a text</label>
        <input type="text" value={inputValue} onChange={(e) => handleChange(e) } />
      </div>

      <ul>
        {deferredValue.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}


export default UseDeferredValueHook