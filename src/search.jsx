import {useState} from "react";

function Search(){
    const[input,setInput]=useState('');

    return(
        <div>
            <h2 className="font-normal text-xl">Search</h2>
            <input 
            type="type"
            placeholder="type a name to search"
            className="border-b-2"
            />
        </div>
    )

}
