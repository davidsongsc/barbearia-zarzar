// counterActions.ts

// Importe os tipos de ação do Redux, se você tiver um arquivo de tipos separado.
// Exemplo: import { ActionTypes } from './types';

// Defina constantes para identificar as ações
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Crie ação para incrementar o contador
export const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// Crie ação para decrementar o contador
export const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// Se você tiver um arquivo de tipos, você pode definir os tipos de ação aqui
// Exemplo:
// export type CounterActionTypes = ReturnType<typeof incrementCounter | typeof decrementCounter>;
