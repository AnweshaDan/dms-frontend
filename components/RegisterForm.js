
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
  
  class RegistrationForm extends React.Component {
      constructor(props)
      {
          super(props);
          this.state={
              email:"",
              password:"",
              phone:""
              
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
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.phone);
        
       
      }
     
      
    
      handleSubmit(event) {//send to API

        console.log("first step of data done")
      }




    render(){
  
      
    const {classes} = this.props;
  
    return (//LATERR
        <div>
                 <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField id="standard-basic" 
        label="Email" 
        value={this.state.email} 
        onChange={this.handleChange} 
        name="email"/>
        <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            name="password"
            value={this.state.password} 
            onChange={this.handleChange}
           
          />
          <TextField id="standard-basic" 
        label="Phone No." 
        value={this.state.phone} 
        onChange={this.handleChange} 
        name="phone"/>
          
      </form>
      <button onClick={this.handleSubmit}>Submit</button>
      <Link href='/clinic' ><button onClick={this.handleSubmit}>Register as Clinic</button></Link>
      <Link href='/hospital' ><button onClick={this.handleSubmit}>Register as Hospital</button></Link>
      </div>
 
    );
      }
  }
  export default withStyles(useStyles)(RegistrationForm)
  //alert('A name was submitted: ' + this.state.value);
 // event.preventDefault();
  