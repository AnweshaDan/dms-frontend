
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
  
  class RegClinic extends React.Component {
      constructor(props)
      {
          super(props);
          this.state={
              clinname:"",
              phone:"",
              address:"",
              reg_no:"",
              
              
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
     
      
    
      handleSubmit(event) {//LATERRRRR
        console.log("New clinic")
      }




    render(){
  
      
    const {classes} = this.props;
  
    return (//LATERR
        <div>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField id="standard-basic" 
        label="Clinic Name" 
        value={this.state.clinname} 
        onChange={this.handleChange} 
        name="clinname"/>
        <TextField id="standard-basic" 
        label="Phone No." 
        value={this.state.phone} 
        onChange={this.handleChange} 
        name="phone"/>
        <TextField id="standard-basic" 
        label="Address" 
        value={this.state.address} 
        onChange={this.handleChange} 
        name="address"/>
        <TextField id="standard-basic" 
        label="Registration No." 
        value={this.state.reg_no} 
        onChange={this.handleChange} 
        name="reg_no"/>
      
       
          
      </form>
      <Link href='/' ><button onClick={this.handleSubmit}>Submit</button></Link>
      </div>
    );
      }
  }
  export default withStyles(useStyles)(RegClinic)
  