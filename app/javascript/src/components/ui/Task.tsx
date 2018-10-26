import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import {TaskI} from '../../interfaces/task'

const styles = {
  card: {
    fontFamily: 'sans-serif',
    minWidth: 200,
    minHeight: 200,
    margin: 10
  },
}

interface TaskProps extends TaskI {
  key: number,
  classes: {
    card: string,
  },
}

const Task: React.SFC<TaskProps> = ({id, name, description, created_at, updated_at, classes}) => {
  return(
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline">
          {name}
        </Typography>
        <Typography variant="display1">
          5:30
        </Typography>
        <div>
          button goes here
        </div>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(Task);