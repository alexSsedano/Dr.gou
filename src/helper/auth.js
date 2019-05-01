import firebase from 'firebase'

let registeredUsers =[];
function loadUsers(users){
    registeredUsers = []
    for(let key in users){
        registeredUsers.push({
            userType: users[key].userType,
            userId: users[key].userId,
            username: users[key].username 
        })
    }
}

export function auth(){
    let id =localStorage.getItem('userId')
    if(id){
        firebase.database().ref('users/').on('value', snapshots => loadUsers(snapshots.val()))   
        for(let i=0; i <= registeredUsers.length; i++){ 
            if( id ==  registeredUsers[i].userId){
                return registeredUsers[i].userType; 
            }   
        }
        return "no"
    }
}

export function user(){
    let id =localStorage.getItem('userId')
    if(id){
        firebase.database().ref('users/').on('value', snapshots => loadUsers(snapshots.val()))   
        for(let i=0; i <= registeredUsers.length; i++){ 
            if( id ==  registeredUsers[i].userId){
                return registeredUsers[i].username; 
            }   
        }
        return "no"
    }
}
  