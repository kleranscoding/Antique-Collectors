
import { Dispatch } from 'react'

// define state interface
export interface INavMenuState {
  isMenuOpen: boolean
}

// define context interface
export interface INavMenuContext { 
  state: INavMenuState 
  dispatch: Dispatch<any>
}

// define action type
export enum ActionNavMenuType {
  NAV_MENU_OPEN = 'NAV_MENU_OPEN',
  NAV_MENU_CLOSE = 'NAV_MENU_CLOSE',
}

export const navMenuReducer = (state: INavMenuState, action: any) => {
  switch (action.type) {
    case 'NAV_MENU_OPEN':
      return { ...state, isMenuOpen: true }
    case 'NAV_MENU_CLOSE':
      return { ...state, isMenuOpen: false }
    default:
      return state
  }
}