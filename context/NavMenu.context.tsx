import { 
  createContext,
  useContext,
  useReducer,
}  from 'react'
import { navMenuReducer, INavMenuContext } from './NavMenu.reducers'

// define initial state
const initState = {
  isMenuOpen: false,
}

// create context
const NavMenuContext = createContext<INavMenuContext>({
  state: initState,
  dispatch: () => {},
})

// create provider
const NavMenuProvider = ({ ...props }) => {
  const [ state, dispatch ] = useReducer(navMenuReducer, initState)
  const valueToContext: INavMenuContext = { state, dispatch }
  return <NavMenuContext.Provider value={valueToContext} {...props} />   
}

// create useContext
const useNavMenuContext = () => useContext(NavMenuContext);

export { NavMenuProvider, useNavMenuContext }