export const ACTION_INCREASE_PAGECOUNT = "ACTION_INCREASE_PAGECOUNT";
export const ACTION_DECREASE_PAGECOUNT = "ACTION_DECREASE_PAGECOUNT";
export const ACTION_GOTO_PAGE = "ACTION_GOTO_PAGE";

interface AppReducerState {
    page: number;
  }

  export interface AcceptedActions{
      type:string,
      payload:number
  }
  

export const appState: AppReducerState = {
    page: 0
};

export default function appReducer(
  state: AppReducerState,
  action: AcceptedActions
): AppReducerState {
  switch (action.type) {
    case ACTION_INCREASE_PAGECOUNT:
        return {
            ...state,
            page: state.page+1 
        };
    case ACTION_DECREASE_PAGECOUNT:
        return {
            ...state,
            page: state.page-1 > 0 ? state.page-1 : 1
        };
    case ACTION_GOTO_PAGE:
        return {
            ...state,
            page: action.payload
        };
    default:
        return state;
  }
}
