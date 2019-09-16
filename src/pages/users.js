import React from "react";
import { Divider } from "semantic-ui-react";
import Thumbline from "../components/Thumbline"

class Users extends React.Component {

state ={
   userInfo:[]
}
componentDidMount(){
  const url ='https://randomuser.me/api/?results=5';
  fetch(url).then(res=> res.json())
            .catch(error => console.error('Error:', error))
            .then((response)=>{
              console.log("response=",response);
              this.setState({
                userInfo:response.results
              }) 
            })
  }

 

  render () {

    //const thumbline= ()

    return (
      <div>
        <h1 style={{ textAlign: "center", color: "blue" }}>All Users</h1>
        <Divider />
          {
            this.state.userInfo.map((row)=> 
            
              <Thumbline userInfo={row} />
            )
          }


      </div>
    );

  }
 
};






export default Users;
