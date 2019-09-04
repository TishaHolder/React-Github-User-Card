import React from "react";

function FollowerCard (props) {

    return(
        <div className = "user-card">
          <img src = {props.follower.avatar_url} />
          <h2>{props.follower.login}</h2>
          <p>{props.follower.type}</p>
          <p>{props.follower.url}</p>          
  
        </div>
  
      );
      


}

export default FollowerCard;