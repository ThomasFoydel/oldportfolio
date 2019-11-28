import React from 'react';

const CTX = React.createContext();

export { CTX };

export function reducer(state, action) {
  const { currentPage } = action.payload;
  switch (action.type) {
    case 'UPDATE_CURRENT_PAGE':
      return {
        ...state,
        currentPage: currentPage
      };
    default:
      return state;
  }
}

export default function Store(props) {
  const stateHook = React.useReducer(reducer, {
    currentPage: 'home'
  });

  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}
