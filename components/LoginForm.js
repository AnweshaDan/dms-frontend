
  import React from 'react';
  import { withStyles } from '@material-ui/core/styles';
  import TextField from '@material-ui/core/TextField';
  
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

       handleChange(evt) {
        const value = evt.target.value;
        this.setState({
          ...this.state,
          [evt.target.name]: value
        });
        console.log(this.state.username);
        console.log(this.state.password);
        
       
      }
     
      
    
      handleSubmit(event) {//LATERRRRR
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }




    render(){
  
      
    const {classes} = this.props;
  
    return (//LATERR
      <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
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
    );
      }
  }
  export default withStyles(useStyles)(LoginForm)
  