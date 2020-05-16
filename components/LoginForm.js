
  import React from 'react';
  import { withStyles } from '@material-ui/core/styles';
  import TextField from '@material-ui/core/TextField';
  import Link from 'next/link'

  
  const useStyles = (theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  });
  
  class LoginForm extends React.Component {
      constructor(props)
      {
          super(props);
          this.state={
              username:"",
              password:""
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }

       handleChange(evt) 
       {
        const value = evt.target.value;
        this.setState({
          ...this.state,
          [evt.target.name]: value
        });
        console.log(this.state.username);
        console.log(this.state.password);
       }
     
      
    
      handleSubmit(event) 
      {//send data to API
        console.log("Done");
        
      }

      handleNew(event)
      {
          console.log("New.")
      }




    render(){
  
      
        const {classes} = this.props;
  
        return (
          <div>
             <form className={classes.root} noValidate autoComplete="off" >
                 <TextField id="standard-basic" 
                            label="Standard" 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                            name="username"/>
                <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                name="password"
                value={this.state.password} 
                onChange={this.handleChange}
           
                />
          
          
          
            </form>
            <Link href='/' ><button onClick={this.handleSubmit}>Submit</button></Link>
            <Link href='/Registration' ><button onClick={this.handleNew}>New User ?</button></Link>
        </div>
        );
    }
  }
  export default withStyles(useStyles)(LoginForm)
  //alert('A name was submitted: ' + this.state.username);
  //event.preventDefault();