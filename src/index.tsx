import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer(
  {
    routes(){
      this.namespace = "api";
      this.get('/transactions', ()=>{
        return[
          {
            id: 1,
            title: "Beliche",
            amount: -1600,
            type: "outcome",
            category: "home",
            createdAt: new Date()
          },
          {
            id: 2,
            title: "Freela de Totvs RM",
            amount: 2000,
            type: "income",
            category: "Services",
            createdAt: new Date()
          },
          {
            id: 3,
            title: "Cama Montessoriana",
            amount: -440,
            type: "outcome",
            category: "home",
            createdAt: new Date()
          },
        ]
      })
    }
  }
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);