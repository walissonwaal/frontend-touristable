import { createStore } from 'redux'

import rootReducer from './root-reducer'

let persistedState = {};

if (typeof window !== 'undefined') {
  // Verifica se estamos no navegador onde localStorage está disponível
  persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {};
}

const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  }
});

export default store