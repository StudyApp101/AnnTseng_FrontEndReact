//Summary.js serves as the main file for our frontend, takes content in textbox, send it to flask server and gets the summary in response
import React from 'react';
import './summary.css'
import axios from 'axios';
import Display from './display'

//Setting our default URL for flask server, so that the requests are redirected to corresponding methods
axios.defaults.baseURL= "http://localhost:5000"

class Summary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
      res:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
      
    }
  
    handleChange(event) 
    {    
      this.setState({value: event.target.value});  
    }
    //this method is responsible for making api call to '/summarise' method in flask and getting the response 
    handleSubmit(event) {
      //console.log(this.state.value)
       axios.post('/summarise',{'value':this.state.value},{'content-type':'application/json'}).then((result) => {
         
      console.log("summary is: "+JSON.stringify(result));// prints the whole json object
      this.setState({res:JSON.stringify(result.data)});

      })
      
      //event.preventDefault();
    }
  
  
    render() {
      return (
       <div style={{paddingRight:'10px'}}>
          <form onSubmit={this.handleSubmit}>
            
          <label>
            Enter text to be summarised:
            <textarea type="text" value={this.state.value} onChange={this.handleChange} style={{float : 'right', paddingRight : '10px', "width" : "500px","height" : "500px", flexShrink: 1 }} />
             </label>
          <input type="submit" value="Submit" />
        </form>
        
        <Display summ={this.state.res}/>
        
       </div>
      );
    }
  }


  export default Summary;