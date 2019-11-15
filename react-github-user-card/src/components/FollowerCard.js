import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

function FollowerCard (props) {

    return(
        
      <Card >
        <Image src = {props.follower.avatar_url} wrapped ui={false}/>
        <Card.Content>
          <Card.Header>{props.follower.name}</Card.Header>

          <Card.Description>
            {props.follower.location}
          </Card.Description>

          <Card.Description>
            {props.follower.bio}
          </Card.Description>

          <Card.Description>
            {props.follower.blog}
          </Card.Description>

        </Card.Content>
        <Card.Content extra>      
                
            <Icon name='user' />
            {props.follower.followers} Followers  
                    
        </Card.Content>

      </Card>
  
    );
      


}

export default FollowerCard;