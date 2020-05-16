
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
  
  class RegHospital extends React.Component {
      constructor(props)
      {
          super(props);
          this.state={
              hospname:"",
              phone:"",
              address:"",
              reg_no:"",
              beds:""
              
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
       console.log("New hospital")
      }




    render(){
  
      
    const {classes} = this.props;
  
    return (//LATERR
        <div>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField id="standard-basic" 
        label="Hospital Name" 
        value={this.state.hospname} 
        onChange={this.handleChange} 
        name="hospname"/>
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
        <TextField id="standard-basic" 
        label="No. of beds" 
        value={this.state.beds} 
        onChange={this.handleChange} 
        name="beds"/>
       
          
      </form>
      <Link href='/' ><button onClick={this.handleSubmit}>Submit</button></Link>
      </div>
    );
      }
  }
  export default withStyles(useStyles)(RegHospital)
  