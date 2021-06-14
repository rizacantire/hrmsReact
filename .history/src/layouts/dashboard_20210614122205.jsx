import React from "react";
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
      <Grid.Row>
        <Grid.Column computer={4} tablet={6} mobile={16} >
        test
        </Grid.Column>
        <Grid.Column computer={12} tablet={10} mobile={16} >
          
          test
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  );
}
