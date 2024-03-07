import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
function AppTodo({handleAddButton})
{
    const [itemName,setItemName]=useState();
    const [itemDate,setItemDate]=useState();
    const handleNameChange=(event)=>
    {
        setItemName(event.target.value);
    }
    const handleDateChange=(event)=>
    {
        setItemDate(event.target.value);
    }
    const handleAdd=()=>
    {
        handleAddButton(itemName,itemDate);
        setItemName("");
        setItemDate("");
    }
    return <div className="container">
        <div className="row kg-row">
            <div className="col-4">
                <input type="text" placeholder="Enter TODO item here" value={itemName} onChange={handleNameChange}/>
            </div>
            <div className="col-3">
                <input type="date" value={itemDate} onChange={handleDateChange}/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success kg-button" onClick={handleAdd}><IoMdAdd /></button>
            </div>
        </div>
    </div>;
}
export default AppTodo;