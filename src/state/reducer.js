import { ACTIONS } from './actions';

export const reducer = (state, action) => {
   switch (action.type) {

      // payload => string
      case ACTIONS.SET:
         return { ...state, [action.entity]: action.payload, }
         case ACTIONS.OPEN_DIALOG:
            return { ...state, dialogs: { ...state.dialogs, [action.entity]: { ...action.payload, isOpen: true } } }
            case ACTIONS.CLOSE_DIALOG:
               return { ...state, dialogs: { ...state.dialogs, [action.entity]: { isOpen: false } } }
      default:
         return state
   }
};

