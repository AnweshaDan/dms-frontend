import { withStyles } from '@material-ui/core/styles';
import React, {Component} from "react";

const useStyles = theme => ({
        root: {
           flexGrow: 1,
         },
  });

class App extends Component {
       render() {
                const { classes } = this.props;
                return(
                    <div className={classes.root}>
                       Test
                </div>
                )
          }
} 

export default withStyles(useStyles)(App)