import { useNavMenuContext } from '../context'

export const useToggleNavMenu = () => {

  const { state, dispatch } = useNavMenuContext();

  let isMenuOpen = state.isMenuOpen

  const closeMenu = () => {
    dispatch({ type: 'NAV_MENU_CLOSE' })
  }

  const openMenu = () => {
    dispatch({ type: 'NAV_MENU_OPEN' })
  }

  return {
    isMenuOpen,
    closeMenu,
    openMenu,
  }
  
}