import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer(
  {
    models:{
      transaction: Model
    }, //instanciando o banco de dados e indicando que a transaction é um model
    seeds(server){
      server.db.loadData({
        transactions:[
          {
            id: 1,
            title: "Freela de Totvs RM",
            value: 6000,
            type: "income",
            category: "service",
            createdAt: new Date("2021-11-01 10:00:00")
          },
          {
            id: 2,
            title: "Cama Montessoriana",
            value: 440,
            type: "outcome",
            category: "home",
            createdAt: new Date("2021-11-10 10:00:00")
          },
        ]
      })
    },
    routes(){
      this.namespace = "api";

      this.get('/transactions', ()=>{
        return this.schema.all("transaction")
      });

      this.post("/transactions", (schema, request)=>{
        const data = JSON.parse(request.requestBody)

        return schema.create("transaction",data)
      });
    }
  }
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);