import React from "react";
import FollowerCard from "./FollowerCard.js";

function FollowersList (props) {

    return (
        <div>
            {props.followers.map ( (follower, index) => 

                <FollowerCard key = {index} follower = {follower} />            

            )}
        </div>


    );

}

export default FollowersList;