import { createContext, useReducer } from 'react';
import { PART } from './c/PART';
import './App.css';

export let AppContext = createContext(null);

function reducer(state, action) {
  const { type, pay } = { ...action }
  switch (type) {

    case "SWITCH_PART":
      state.partIndex = +pay;
      break;

    case "UPD_FIELD":
      state.form[pay.f] = pay.v
      break;

    default:
      break;
  }
  return { ...state }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {
    form: {},
    partIndex: 1,
    ajax: window.ipajax,
    o: window.o === undefined ? { fields: [], localize: [] } : window.o
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div id="ip_registration">
        <form id="ip_registration_form">
          <PART index={state.partIndex} />
        </form>
      </div>
    </AppContext.Provider>
  );
}

export default App;
