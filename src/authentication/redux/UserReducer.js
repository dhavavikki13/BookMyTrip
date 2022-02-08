import UserService from "../../user/service/UserService";

let service = new UserService();

var IntialState ={
    userId:0,
    userType:''    
}


var x = 0;
var y = '';


function UserReducer(state=IntialState,action){
    if(action.type==='GET_USER'){
        console.log(sessionStorage.getItem('userName'));
        service.getUserByName(sessionStorage.getItem('userName')).then((data)=>{
            x = data.data;
            console.log(x);
            service.getUserType(x).then((data)=>{
                y = data.data;
                console.log(y);
            }).catch(()=>{
                alert("Problem in getting user data 2");
            })
        }).catch(()=>{
            alert("Problem in getting user data");
        });
        return{
            userId : x,
            userType: y
        }
     }
     return state;
}
export default UserReducer;