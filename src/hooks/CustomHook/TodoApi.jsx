
import useFetch from './useFetch'

const TodoApi = () => {
let data = useFetch('https://jsonplaceholder.typicode.com/todos')
  return (
    <div>
        <ul>
            {
                data.map((ele) => (
                    <div key={ele.id}>
                        <li>{ele?.title}</li>
                        <li>{ele?.userId}</li>
                    </div>
                ))
            }

        </ul>
    </div>
  )
}

export default TodoApi