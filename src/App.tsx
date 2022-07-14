import React, {useEffect, useState} from 'react';
import ListCard from './comonents/ListCard';
import AddCard from './comonents/addCard';
import {UserDataService} from './service/users.service'
import './App.css';


export interface Card{
  id: number,
  name: string,
  age: number,
  url: string,
  weight?:number,
  note?: string

}
export interface MyData {
  cards: Card[]
}


function App() {
  const [cas, setCards] = useState<MyData["cards"]> ([])
  useEffect(()=>{
    retrieveUsers();
  });


  const retrieveUsers=()=> {
    const service=new UserDataService();
    service.getAll()
      .then((response: any) => {
        setCards(response.data.users);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  return (
    <div className="App">
    <ListCard cds={cas} setCds={setCards} />
    <AddCard cds={cas} setCds={setCards}/>

    </div>
  );
}

export default App;
