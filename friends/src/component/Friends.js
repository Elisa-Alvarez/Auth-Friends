import React, {useState, useEffect} from "react"
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {v4 as uuid4} from 'uuid'
import FriendsList from './FriendsList'



function Friends (props){
  const [friends , setFriend]= useState([])
  
   useEffect( () =>{
  axiosWithAuth ()
    .get('/api/friends')
    .then(res =>{
      return setFriend(res.data)
    })
  
    .catch( err => err)
  })

  return(
    <div>
    {
      friends.map(friend =>
        <FriendsList key={friend.id} friend={friend}/>

      )
    }
         
    </div>
  )
}export default Friends

