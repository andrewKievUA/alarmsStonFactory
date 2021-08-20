import React from 'react';
import ReactDOM from 'react-dom';

import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import { Provider } from 'react-redux'
import axios from "axios"
import {BrowserRouter} from "react-router-dom"

///   https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app/arrays
////  https://tryredux-default-rtdb.europe-west1.firebasedatabase.app/1/.json

let store
let z = 0


 axios.get(`https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app/arrays.json`).then(response =>{
//console.log(Object.values(response.data));
    function rootReducer(state = Object.values(response.data),action) {
            
            let opyskYes=0,peremeshYes=0,skvitirYes =0,opyskYesYes=0,peremeshYesYes=0,skvitirYesYes =0
           
            const yesterday = new Date().getDate()-1
            for (let index = 0; index < state[0][2].length; index++) {
              if (state[0][2][index].time.slice(8,10)==yesterday && state[0][2][index].comment === `Авария Опускания`)
              {opyskYes = opyskYes +1}
              if (state[0][2][index].time.slice(8,10)==yesterday && state[0][2][index].comment === `Авария Перемещения `)
              {peremeshYes++}
              if (state[0][2][index].time.slice(8,10)==yesterday && state[0][2][index].comment === `Авария Опускания Сквитирован`)
              {skvitirYes++}
            }

            const yesterday2 = new Date().getDate()-2
            for (let index = 0; index < state[0][2].length; index++) {
              if (state[0][2][index].time.slice(8,10)==yesterday2 && state[0][2][index].comment === `Авария Опускания`)
              {opyskYesYes = opyskYesYes +1}
              if (state[0][2][index].time.slice(8,10)==yesterday2 && state[0][2][index].comment === `Авария Перемещения `)
              {peremeshYesYes++}
              if (state[0][2][index].time.slice(8,10)==yesterday2 && state[0][2][index].comment === `Авария Опускания Сквитирован`)
              {skvitirYesYes++}
            }
          
            switch (action.type) {
              case "calculateDailyTotalAlarms": return {...state, state:state.calcdata = 33}
            
              default: return [...state,
                state.opyskYes=[
                opyskYes,peremeshYes,skvitirYes,
                opyskYesYes,peremeshYesYes,skvitirYesYes]]   
            }
            return state
            }


        const store =createStore(rootReducer)

       // console.log(store);
      // console.log(store.getState(),"getState");
    
            ReactDOM.render(
              <BrowserRouter>
                <Provider store={store}>
                  <App2 />
                </Provider> </BrowserRouter>,
                document.getElementById('root')
              );
              z=1
  })
 


reportWebVitals();


