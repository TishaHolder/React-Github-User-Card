import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

function UserCard (props) {  

        return(
          
          <Card >
            <Image src = {props.user.avatar_url} wrapped ui={false}/>
            <Card.Content>
              <Card.Header>{props.user.name}</Card.Header>

              <Card.Description>
                {props.user.location}
              </Card.Description>

              <Card.Description>
                {props.user.bio}
              </Card.Description>

              <Card.Description>
                {props.user.blog}
              </Card.Description>

            </Card.Content>
            <Card.Content extra>      
                    
                <Icon name='user' />
                {props.user.followers} Followers  
                         
            </Card.Content>

          </Card>
    
        );
        
      

}

export default UserCard;