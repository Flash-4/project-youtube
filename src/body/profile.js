
import React from "react";

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {name:'abdul',age:20}
    //   this.state = {color: "red"};
    }
     componentDidMount(){
        console.log("The component has mounted");
     }
    changeName = ()=>{ 
        this.setState({name:"Deviprasath",age:30});
      }
    render() {
        {console.log("component Rendered");}
        return(
            <>
              <h2>This my {this.state.name} name</h2>
              <span>This is my age {this.state.age}</span>
                <button onClick={this.changeName}> Change Name</button>
            </>
        )
    }
  }

  export default Profile;