import React from 'react';
import UserCard from "./components/UserCard.js";
import FollowersList from "./components/FollowersList.js";
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      userData: {},
      followersData: [{}]
    };
  }

  

  fetchUser = () => {

    fetch("https://api.github.com/users/TishaHolder")

    //if you are using axios .json is not necessary - tells response object to return data with response (parses json in the request)    
    .then(res => res.json())
    .then(data => this.setState({ userData: data})) 
    .catch(err => console.log("there was an error")); 

  }

  fetchFollowers = () => {

    fetch("https://api.github.com/users/TishaHolder/followers")

    //if you are using axios .json is not necessary - tells response object to return data with response (parses json in the request)    
    .then(res => res.json())
    .then(data => this.setState({ followersData: data})) 
    .catch(err => console.log("there was an error")); 

  }

  //run when the component is mounted and is first created - if you want to do something once at the start of a 
  //component's life you put it inside this method 
  componentDidMount(){

    this.fetchUser();
    this.fetchFollowers();
    

  }

  //runs every time our component state is updated and we re-render it
  //this will not run on the first render of our component only on re-renders
  //make subsequent API based on things that have changed
  componentDidUpdate() {

    console.log(this.state);

  }

 

  render() {

    return (
      <div>

        <UserCard user = {this.state.userData} />

        <FollowersList followers = {this.state.followersData} />

      </div>

    );
  }

  

  
}

export default App;
