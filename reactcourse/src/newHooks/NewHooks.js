    import React, { useState } from 'react';

    const NewHooks = () => {
        const[itemName,setItemName] = useState(
            {
                id:0,
                name:"",
                age:"",
                address:""

            }
        )
    const[showItemList,setShoeitemLits] = useState([])
    const [searchUser,setSearchUser] = useState('')

    const handelChangeEvent = (event,key)=>{
        setItemName(prevObj => ({...prevObj,[key]:event.target.value}))
    }
        const saveList = ()=>{
            setShoeitemLits([...showItemList,itemName])
            setItemName({
                id:0,
                name:"",
                age:"",
                address:""
            })
        }

        // delete the itemlist
        const deleteItem = (id)=>{
            setShoeitemLits(prevObj => prevObj.filter((item,index)=> index !== id))
        }

        // Search User bassed on the UserName
        const filterUserName = showItemList.filter((item,index)=>{
            return(
                item.name.toLowerCase().includes(searchUser.toLowerCase())
            )
        })

        
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-4 text-center"> 
                            <input type="text"  placeholder='Enter item Name'className='form-control' value={itemName.name} onChange={(event)=>handelChangeEvent(event,'name')}/> <br />
                            <input type="text"  placeholder='Enter item Name'className='form-control' value={itemName.age} onChange={(event)=>handelChangeEvent(event,'age')}/> <br />
                            <input type="text"  placeholder='Enter item Name'className='form-control' value={itemName.address} onChange={(event)=>handelChangeEvent(event,'address')}/> <br />
                            <button className='btn btn-success' onClick={saveList}>add</button>
                        </div> 
                        <div className="col-8">
                            <div className="row">
                                <div className="card">
                                    <div className="card-header">
                                        <input type="text" placeholder='find users' onChange={(e)=> setSearchUser(e.target.value)} />
                                    </div>
                                </div>
                                {
                                    filterUserName.map((item,index)=>{
                                        return(
                                            <div className="col-3">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5>{item.name}</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <span>{item.age}</span> - <span>{item.address}</span>
                                                        <button type="button" className='btn btn-danger btn-sm m-1' onClick={()=> deleteItem(item.id)}>Del</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            
                            </div>
                        </div>   
                    </div>    
                </div>        
            </div>
        );
    };

    export default NewHooks;