export function manageFriends(state, action){
  console.log(action["payload"])
  if (action.type === "ADD_FRIEND"){
    return Object.assign({}, state, state.friends.push( action.payload))
  } else if (action.type === "REMOVE_FRIEND"){
    let newFriends = state.friends.filter((friend)=>{
      return friend.id !== action.payload
    })
    return Object.assign({}, state, {friends: newFriends})
  } else {
    return state
  }
}
