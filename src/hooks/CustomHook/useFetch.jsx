import React, { useEffect, useState } from 'react'


const useFetch = (url) => {
 const [ data, setData ] = useState([]) 

   let getTodos = async () => {
         try {
             let response = await fetch(url)
            let r = await response.json()
            console.log(r)
            setData(r)
 
         } catch (error) {
             
         }
     }
 
     useEffect(() => {
         getTodos()
     },[])

return data
}

export default useFetch