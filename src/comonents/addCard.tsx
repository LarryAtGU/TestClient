import React from "react";
import { useState } from "react";
import { MyData } from "../App";
import { Card } from "../App";
import {UserDataService} from "../service/users.service"

interface MyInp{
    cds:Card[],
    setCds:React.Dispatch<React.SetStateAction<MyData["cards"]>>
}




const AddCard : React.FC<MyInp> = ({cds,setCds})=> {


    const [errmsg, setErrorMsg]=useState("");

    const handleClick  = () => {
        setErrorMsg("")
        if(!input.name) {
            setErrorMsg("name can't be empty!")
            return;
        }
        if(!input.age) {
            setErrorMsg("Age can't be zero")
            return;
        }
        if(!input.url) {
            setErrorMsg("You need to provide the URL of the image")
            return;
        }

        const addUser=(usr:Card)=> {
            const service=new UserDataService();
            service.create(usr)
              .then((response: any) => {
                console.log(response.data);
              })
              .catch((e: Error) => {
                console.log(e);
              });
          }
        
          addUser({
            id:0,
                    name:input.name,
                    url:input.url,
                    note:input.note,
                    age:input.age
          })
/*        
        const newID= cds.reduce((pre,cd) => 
            Math.max(cd.id, pre),0
        )+1
        setCds(
            [
                ...cds,
                {
                    id:newID,
                    name:input.name,
                    url:input.url,
                    note:input.note,
                    age:input.age
                }
            ]
        )

*/
        setInput({
            id: 0,
            name: "",
            age: 0,
            url: "",
            note: ""
        })
    }
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {

        setInput({...input,
            [e.target.name]:e.target.value
        })
    }
        

const [input, setInput] = useState(
    {
        id: 0,
        name: "",
        age: 0,
        url: "",
        note: ""
    }
)


    return (
        <div className="AddToList">
            <p className="Error-msg">{errmsg}</p>
        <input
            type="text"
            placeholder="name"
            className="AddToList-input"
            value={input.name}
            onChange={handleChange}
            name="name"
        />

        <input
            type="text"
            placeholder="Age"
            className="AddToList-input"
            value={input.age}
            onChange={handleChange}
            name="age"
        />
        <input
            type="text"
            placeholder="ImageURL"
            className="AddToList-input"
            value={input.url}
            onChange={handleChange}
            name="url"

        />
        <textarea
            placeholder="Note"
            className="AddToList-input"
            value={input.note}
            onChange={handleChange}

            name="note"

        />

    <button
        className="AddToList-btn"
        onClick={handleClick}
    >
        Add To List 
    </button>
    </div>
)
}



export default AddCard