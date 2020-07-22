import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'


function FriendList (props){
    const [ newFriend, setNewFriend ] = useState({})

    const onInputChange = e=> {
        const name = e.target.name
        const value = e.target.value
  
        setNewFriend({
            ...newFriend,
            [name]: value 
        })
    }
  
   const onSubmit = e =>{
    e.preventDefault()
    axiosWithAuth()
    .post('/api/friends', newFriend)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
   }
    return(
        <div>
            <h2>{props.friend.name}</h2>
                <p>Age:{props.friend.age}</p>
                 <p>Email:{props.friend.email}</p>
                 <h2>Add A Friend</h2>
            <form onSubmit={onSubmit}>
                <label> Name</label>
                <input
                name='name'
                value = {newFriend.name}
                onChange={onInputChange}/>
                <label>Age</label>
                <input
                name='age'
                value={newFriend.age}
                onChange={onInputChange}/>
                <label>Email</label>
                <input 
                name='email'
                value={newFriend.email}
                onChange={onInputChange}/>
            <button>Submit</button>
            </form>
        </div>
    )
}export default FriendList