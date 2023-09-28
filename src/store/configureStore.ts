import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Importe o middleware redux-thunk, se você estiver usando

// Importe seus redutores aqui
import counterReducer from '../reducers/counterReducer';

// Combine os redutores, caso você tenha mais de um
const rootReducer = combineReducers({
  counter: counterReducer,
  // Outros redutores podem ser adicionados aqui
});

// Configurar a loja Redux
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
