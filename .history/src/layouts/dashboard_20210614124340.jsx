import React from "react";
import { Button, Icon, Label } from 'semantic-ui-react'

export default function Dashboard() {
  return (
    <div>
      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon"></i> Like
        </div>
        <a class="ui basic red left pointing label">1,048</a>
      </div>
      <div class="ui labeled button" tabindex="0">
        <div class="ui basic blue button">
          <i class="fork icon"></i> Forks
        </div>
        <a class="ui basic left pointing blue label">1,048</a>
      </div>
      <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
    <Button as='div' labelPosition='right'>
      <Button basic color='blue'>
        <Icon name='fork' />
        Fork
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        2,048
      </Label>
    </Button>
    </div>
  );
}
