import React from 'react';
import "./style.css"; 

function ContactMe (){

    return (
        
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-lg-12">
                    
                    <div className="jumbotron">
    
                        <div className="row">
    
                            <div className="col-xs-12 col-lg-6">
                                <h1 className="display">Contact Me</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <form>
                                    <div className="form-group saira">
                                        <label for="input-name">Name</label>
                                        <input type="text" className="form-control" id="input-name" aria-describedby="nameHelp"/>
                                    </div>
                                    <div className="form-group saira">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"/>
                                        <small id="emailHelp" className="form-text text-muted">
                                            </small>
                                    </div>
                                    <div className="form-group saira">
                                        <label for="exampleInputPassword1">Phone</label>
                                        <input type="phone number" className="form-control" id="exampleInputPhone1"
                                            aria-describedby="phoneHelp"/>
                                        <small id="phoneHelp" className="form-text text-muted">555-555-5555 or
                                            (555)555-5555</small>
                                    </div>
                                    <div className="form-group saira">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-outline-success" >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
    
                </div>
              </div>
      

      
    );

}

export default ContactMe; 