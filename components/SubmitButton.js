import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
});

class SubmitButton extends Component {
  
  render(){
    const {classes }= this.props;
  return (
    <div className={classes.root}>
      
      <Button variant="contained" color="primary">
        Submit
      </Button>
     
    </div>
  );
  }
}
export default withStyles(useStyles)(SubmitButton)
