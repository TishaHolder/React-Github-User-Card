import React from "react";
import FollowerCard from "./FollowerCard.js";

function FollowersList (props) {

    return (
        <div className = "grid-view">

            {props.followers.map ( (follower) => 

                <FollowerCard key = {follower.id} follower = {follower} />            

            )}
        </div>


    );

}

export default FollowersList;