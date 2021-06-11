import React, { Component } from 'react'

export class AddCourse extends Component {
    constructor(props){
        super(props);
        this.state ={
            course: props.course
        }
    }

    handleChange = (e)=>{
        
        let s1 = {...this.state};
        s1.course[e.target.name] = e.target.value;
        this.setState(s1);
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log("handle Submit", this.state.course);
        this.props.onChange(this.state.course);
    }

    render() {
        const{courseName,faculty,lecture} = this.state.course;
        return (
            <div className="container">
                <h4>{this.props.edit ? "Edit The Couser" : "Add the Course"}</h4>
                <div className="form-group">
                    <label>Course Name</label>
                    <input
                    className="form-control" 
                    type="text"
                    name="courseName" 
                    id="courseName" 
                    value={courseName}
                    onChange={this.handleChange}    
                    />
                </div>
                <div className="form-group">
                    <label>Faculty</label>
                    <input
                    className="form-control" 
                    type="text"
                    name="faculty" 
                    id="faculty" 
                    value={faculty}
                    onChange={this.handleChange}    
                    />
                </div>
                <div className="form-group">
                    <label>Lecture</label>
                    <input
                    className="form-control" 
                    type="number"
                    name="lecture" 
                    id="lecture" 
                    value={lecture}
                    onChange={this.handleChange}    
                    />
                </div>
                <button className="btn btn-warning my-3" onClick={this.handleSubmit}>{ this.props.edit ? "Update" : "Add"}</button>
            </div>
        )
    }
}

export default AddCourse
