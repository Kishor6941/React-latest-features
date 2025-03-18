import { memo, PureComponent } from "react"

const CompPrintName = ({name,hello}) => {

  // name = 'kishor'
  // hello = rference 100

// next
// name = "kishor"
// hello = reference 101

  console.log("child called")
  return (
    <div>
      <button onClick={() => hello(name)}>Hello</button>
    </div>
  )
}

export default memo(CompPrintName)
 