import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import HookNavBar from "../pages/HookNavBar";
// import UseStateHook from "../hooks/UseStateHook";
// import UseEffectHook from "../hooks/UseEffectHook";
// import UseMemoHook from "../hooks/UseMemoHook";
// import UseCallbackHook from "../hooks/UseCallbackHook";
// import UseIdHook from "../hooks/UseIdHook";
// import UseRefHook from "../hooks/UseRefHook";
// import UseReducerHook from "../hooks/UseReducerHook";
// import UseDeferredValueHook from "../hooks/UseDeferredValueHook";
// import UseTransitionHook from "../hooks/UseTransitionHook";
// import UseContextHook from "../hooks/UseContextHook";
import ProtectedRoutes from "./ProtectedRoutes";
// import FormHandle from "../components/FormHandle";
import HOCNav from "../pages/HOCNav";
// import CounterOne from "../components/HOC/CounterOne";
// import CounterTwo from "../components/HOC/CounterTwo";
// import PortalComp from "../components/PortalComp";
import ReduxNav from "../pages/ReduxNav";
// import TodoComp from "../components/redux-toolkit/TodoComp";
// import ReactVirtualization from "../components/ReactVirtualization";
// import ContextAPI from "../hooks/ContextAPI";

const UseStateHook = React.lazy(() => import("../hooks/UseStateHook"));
const UseEffectHook = React.lazy(() => import("../hooks/UseEffectHook"));
const UseMemoHook = React.lazy(() => import("../hooks/UseMemoHook"));
const UseCallbackHook = React.lazy(() => import("../hooks/UseCallbackHook"));
const UseIdHook = React.lazy(() => import("../hooks/UseIdHook"));
const UseRefHook = React.lazy(() => import("../hooks/UseRefHook"));
const UseReducerHook = React.lazy(() => import("../hooks/UseReducerHook"));
const UseDeferredValueHook = React.lazy(() =>
  import("../hooks/UseDeferredValueHook"));
const UseTransitionHook = React.lazy(() =>
  import("../hooks/UseTransitionHook"));
const UseContextHook = React.lazy(() => import("../hooks/UseContextHook"));
const FormHandle = React.lazy(() => import("../components/FormHandle"));
const CounterOne = React.lazy(() => import("../components/HOC/CounterOne"));
const CounterTwo = React.lazy(() => import("../components/HOC/CounterTwo"));
const PortalComp = React.lazy(() => import("../components/PortalComp"));
const TodoComp = React.lazy(() => import("../components/redux-toolkit/TodoComp"));
const ReactVirtualization = React.lazy(() => import("../components/ReactVirtualization"));
const ContextAPI = React.lazy(() => import("../hooks/ContextAPI"));

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HookNavBar />,

      children: [
        {
          path: "/",
          element: <Navigate to="useState" />,
        },
        {
          path: "useState",
          element: <UseStateHook />,
        },
        {
          path: "useEffect",
          element: <UseEffectHook />,
        },
        {
          path: "useMemo",
          element: <UseMemoHook />,
        },
        {
          path: "useCallback",
          element: <UseCallbackHook />,
        },
        {
          path: "useId",
          element: <UseIdHook />,
        },
        {
          path: "useRef",
          element: <UseRefHook />,
        },
        {
          path: "useReducer",
          element: <UseReducerHook />,
        },
        {
          path: "useDeferredValue",
          element: <UseDeferredValueHook />,
        },
        {
          path: "useTransition",
          element: <UseTransitionHook />,
        },
        {
          path: "useContext",
          element: (
            <ProtectedRoutes>
              <UseContextHook />
            </ProtectedRoutes>
          ),
        },
        {
          path : 'context-api',
          element : <ContextAPI />
        }
      ],
    },

    {
      path: "form-handle",
      element: <FormHandle />,
    },
    {
      path: "HOC",
      element: <HOCNav />,
      children: [
        {
          path: "/HOC",
          element: <Navigate to="counter1" />,
        },
        {
          path: "counter1",
          element: <CounterOne />,
        },
        {
          path: "counter2",
          element: <CounterTwo />,
        },
      ],
    },
    {
      path : 'portal',
      element : <PortalComp />
    },
    {
      path : 'redux-toolkit',
      element : <ReduxNav />,
      children : [
        {
          path : '/redux-toolkit',
          element : <Navigate to="todo" />
        },
        {
          path : 'todo',
          element : <TodoComp />
        }
      ]
    },
    {
      path : 'virutalization',
      element : <ReactVirtualization />
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ]);
  return routes;
};

export default AppRoutes;
