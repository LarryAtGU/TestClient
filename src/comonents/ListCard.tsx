import React from "react";
import { MyData,Card } from "../App";
import {UserDataService} from "../service/users.service"


interface MyInp{
    cds:Card[],
    setCds:React.Dispatch<React.SetStateAction<MyData["cards"]>>
}


const ListCard : React.FC<MyInp> = ({cds,setCds}) => {

    const handleClick = (val:number) => {
        console.log("in handleClick",val)


        const service=new UserDataService();

          service.delete(val)
        .then((response: any) => {
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
  
//        setCds(cds.filter((cd)=>cd.id !== val))
    }
    return (
      <ul>
        {cds.map(
          (ca) => {
            return (
              <li className='List' key={ca.id}>
                <div className='List-header'>
                  <img className="List-img" src={ca.url} alt="card " />
                  <h2>{ca.name}</h2>
                </div>
                <p>{ca.age} years old</p>
                <p className='List-note'>{ca.note}</p>

                <button
                    className="AddToList-btn"
                    onClick={() => handleClick(ca.id)}
                >
                    Delete 
                </button>


              </li>
            )
          }
        )}
      </ul>
    )
  }
  
export default ListCard;