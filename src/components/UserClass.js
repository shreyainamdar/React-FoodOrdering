import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

      this.state={
       userinfo:{ 
        name: "NA",
        location: "NA",
        bio: "NA",
      },

      }
    }

    async componentDidMount(){
       const data=await fetch("https://api.github.com/users/shreyainamdar");
       const json=await data.json();
       this.setState({
        userinfo: json
       })
       console.log(json)
    }
    render()
    {
        const {name,location,bio}= this.state.userinfo
        return(
        
        <div className="user-card p-3 font-semibold"> 
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h3>Role: {bio}</h3>
       
        </div>

    )
}  
}

export default UserClass;