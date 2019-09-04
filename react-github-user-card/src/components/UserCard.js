import React from "react";

function UserCard (props) {

    

        return(
          <div className = "user-card">
            <img src = {props.user.avatar_url} />
            <h2>{props.user.name}</h2>
            <p>{props.user.location}</p>
            <p>{props.user.bio}</p>
            <p>{props.user.blog}</p>
    
          </div>
    
        );
        
      

}

export default UserCard;