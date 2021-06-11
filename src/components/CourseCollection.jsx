import React, { Component } from 'react'
import AddCourse from './AddCourse';
import AddStudent from './AddStudent';

export class CourseCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                { courseName: "JavaScript", faculty: "Suman Singh", lecture: 20, students:[{id: 'IN123',name:'Suman'}] },
                { courseName: "React", faculty: "Sonu", lecture: 28, students: [] },
                { courseName: "Angular", faculty: "Ravi", lecture: 28, students: [{id: 'IN123',name:'Suman'}] },
                { courseName: "Node.Js", faculty: "Suraj", lecture: 28, students: [] },
                { courseName: "Railway", faculty: "Piyush Goyal", lecture: 28, students: [{id: 'IN123',name:'Suman'}] },
                { courseName: "SSC", faculty: "Raj Shrama", lecture: 28, students: [] },
                { courseName: "Bank", faculty: "SitaRaman", lecture: 28, students: [{id: 'IN123',name:'Suman'}] },
                { courseName: "JEE", faculty: "Santosh", lecture: 28, students: [] },

            ],
            view: 0,
            editCourseIndex: -1,
            viewCourseIndex: -1,
        }
    }

    deleteCourse = (index) => {
        let s1 = { ...this.state };
        s1.courses.splice(index, 1);
        this.setState(s1);
    }

    editCourse = (index) => {
        let s1 = { ...this.state };
        s1.view = 1;
        s1.editCourseIndex = index;
        this.setState(s1);
    }

    handleCource = (course) => {
        let s1 = { ...this.state };
        s1.editCourseIndex >= 0
            ? s1.courses[s1.editCourseIndex] = course
            : s1.courses.push(course);
        s1.editCourseIndex = -1;
        s1.view = 0;
        this.setState(s1);
    }

    viewCourseDetails = (index) => {
        let s1 = { ...this.state };
        s1.view = 2;
        s1.viewCourseIndex = index;
        this.setState(s1);
    }

    handleStudent = (student) => {
        let s1 = { ...this.state };
        s1.courses[s1.viewCourseIndex].students.push(student);
        s1.view = 2;
        this.setState(s1);
    }

    addCourse = () => {
        let s1 = { ...this.state };
        s1.view = 1;
        s1.editCourseIndex = -1;
        this.setState(s1);
    }

    showCourseList = () => {
        let s1 = { ...this.state };
        s1.view = 0;
        s1.viewCourseIndex = -1;
        this.setState(s1);
    }

    showStudentForm = () => {
        let s1 = { ...this.state };
        s1.view = 3;
        this.setState(s1);
    }

    showCourseDetails = () => {
        let { courses, viewCourseIndex, view } = this.state;
        let { courseName, faculty, lecture, students } = courses[viewCourseIndex];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h5>Course Name: {courseName}</h5>
                        <h5>Faculty: {faculty}</h5>
                        <h5>Numbers of lecture: {lecture}</h5>
                        <h5>Numbers of students: {students.length}</h5>
                    </div>
                    <div className="col-6">
                        {
                            students.length === 0 ? ("") : (
                                <>
                                    <div className="row bg-dark text-light">
                                        <div className="col-6 border">Student Id</div>
                                        <div className="col-6 border">Student Name</div>
                                    </div>
                                    {students.map((st) => (
                                        <div className="row">
                                            <div className="col-6 border">{st.id}</div>
                                            <div className="col-6 border">{st.name}</div>
                                        </div>
                                    ))}
                                </>
                            )
                        }
                    </div>
                </div>
                {view === 2 ? (
                    <button className="btn btn-primary" onClick={() => this.showStudentForm()}>Enroll More Students</button>)
                    : (<AddStudent student={{ id: "", name: "" }} onSubmit={this.handleStudent} />)
                }
                <br />
                <button className="btn btn-primary my-2" onClick={() => this.showCourseList()}>Show List of Course</button>
            </div>
        )
    }

    render() {
        let course = { courseName: "", faculty: "", lecture: Number, students: [] }
        const { courses, view, editCourseIndex } = this.state;
        return (
            <>
                {
                    view === 0 ?
                        (<div className="container text-center">
                            <div class="jumbotron text-center bg-secondary text-white">
                                <h1>Course Portal</h1>
                            </div>
                            <div class="row my-5">
                                {
                                    courses.map((c1, index) => (
                                        // ***************Test*******************
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-auto my-2">
                                            <div class="card bg-info text-dark">
                                                <div class="card-body">

                                                    <div>
                                                        <h2 class="card-title">{c1.courseName}</h2>
                                                        <h5 class="card-subtitle mb-2">
                                                            Faculty-: <span className='text-muted'>{c1.faculty}</span>
                                                        </h5>
                                                    </div>
                                                    <div>
                                                        <h4>Lectures:- {c1.lecture}</h4>
                                                        <h4>Enroll Students:- {c1.students.length}</h4>
                                                    </div>

                                                    <div className="d-flex justify-content-around my-3">
                                                        <button
                                                            className='btn btn-success btn-sm'
                                                            onClick={() => this.viewCourseDetails(index)}
                                                        >
                                                            Details
                                                        </button>
                                                        <button
                                                            className='btn btn-warning btn-sm'
                                                            onClick={() => this.editCourse(index)}>
                                                            Edit
                                                        </button>
                                                        <button
                                                            className='btn btn-danger btn-sm'
                                                            onClick={() => this.deleteCourse(index)}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <button
                                className="btn btn-primary my-3"
                                onClick={this.addCourse}>
                                Add Course
                            </button>
                        </div>)
                        : view === 1 ?
                            (<AddCourse
                                course={editCourseIndex >= 0 ? courses[editCourseIndex] : course}
                                onChange={this.handleCource}
                                edit={editCourseIndex >= 0}
                            />)
                            : view === 2 ? (
                                this.showCourseDetails()
                            )
                                : (
                                    this.showCourseDetails()
                                )
                }
            </>
        )
    }
}

export default CourseCollection
