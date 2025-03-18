import React, { Suspense } from 'react'
// import UseStateHook from './hooks/UseStateHook'
// import UseEffectHook from './hooks/UseEffectHook'
// import UseMemoHook from './hooks/UseMemoHook'
// import UseCallbackHook from './hooks/UseCallbackHook'
// import UseIdHook from './hooks/UseIdHook'
// import UseRefHook from './hooks/UseRefHook'
import Navbar from './pages/Navbar'
import AppRoutes from './Routes/AppRoutes'


const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseIdHook /> */}
      {/* <UseRefHook /> */}

      <Suspense fallback={<div>Loading...</div>}>
      {<AppRoutes />} 
      </Suspense>
    </div>
  )
}

export default App