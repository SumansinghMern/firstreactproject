import React, { Component } from 'react'

export class AddStudent extends Component {

    constructor(props){
        super(props);
        this.state = {
            student: props.student
        }
    }

    handleChange = (e) =>{
        let s1 = {...this.state}
        s1.student[e.target.name] = e.target.value;
        this.setState(s1);
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        // console.log("Handle Submit",this.state.student);
        this.props.onSubmit(this.state.student);
    }

    render() {
        let {id,name} = this.state.student;
        return (
            <div className="container border">
                <h4>Enroll Student</h4>
                <div className="form-group">
                    <lable>Student Id</lable>
                    <input 
                    className="form-control" 
                    type ="text"    
                    name = "id"
                    id = "id"
                    value= {id}
                    onChange={this.handleChange}
                    />
                </div>
                <div className="form-group my-2">
                    <lable>Student Name</lable>
                    <input 
                    className="form-control" 
                    type ="text"    
                    name = "name"
                    id = "name"
                    value= {name}
                    onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Enroll</button>
            </div>
        )
    }
}

export default AddStudent
