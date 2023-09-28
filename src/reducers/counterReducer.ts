// counterReducer.ts

// Importe os tipos de ação do Redux, se você tiver um arquivo de tipos separado.
// Exemplo: import { CounterActionTypes } from '../actions/types';

// Defina o estado inicial do contador
const initialState = {
    count: 0,
  };
  
  // Crie o redutor para o contador
  const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'INCREMENT':
        // Retorne um novo estado com o contador incrementado
        return {
          ...state,
          count: state.count + 1,
        };
      case 'DECREMENT':
        // Retorne um novo estado com o contador decrementado, mas não abaixo de zero
        return {
          ...state,
          count: state.count > 0 ? state.count - 1 : 0,
        };
      default:
        // Se a ação não corresponder a nenhuma das ações conhecidas, retorne o estado atual
        return state;
    }
  };
  
  export default counterReducer;
  