(this.webpackJsonpfirst_react_project=this.webpackJsonpfirst_react_project||[]).push([[0],{13:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),a=s(8),r=s.n(a),i=(s(13),s.p,s(1)),u=s(3),l=s(4),o=s(6),d=s(5),j=s(0),b=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).handleChange=function(e){var t=Object(i.a)({},n.state);t.course[e.target.name]=e.target.value,n.setState(t)},n.handleSubmit=function(e){e.preventDefault(),console.log("handle Submit",n.state.course),n.props.onChange(n.state.course)},n.state={course:e.course},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state.course,t=e.courseName,s=e.faculty,n=e.lecture;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h4",{children:this.props.edit?"Edit The Couser":"Add the Course"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Course Name"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"courseName",id:"courseName",value:t,onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Faculty"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"faculty",id:"faculty",value:s,onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Lecture"}),Object(j.jsx)("input",{className:"form-control",type:"number",name:"lecture",id:"lecture",value:n,onChange:this.handleChange})]}),Object(j.jsx)("button",{className:"btn btn-warning my-3",onClick:this.handleSubmit,children:this.props.edit?"Update":"Add"})]})}}]),s}(n.Component),h=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).handleChange=function(e){var t=Object(i.a)({},n.state);t.student[e.target.name]=e.target.value,n.setState(t)},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state.student)},n.state={student:e.student},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state.student,t=e.id,s=e.name;return Object(j.jsxs)("div",{className:"container border",children:[Object(j.jsx)("h4",{children:"Enroll Student"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("lable",{children:"Student Id"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"id",id:"id",value:t,onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-group my-2",children:[Object(j.jsx)("lable",{children:"Student Name"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"name",id:"name",value:s,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit,children:"Enroll"})]})}}]),s}(n.Component),m=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).deleteCourse=function(e){var t=Object(i.a)({},n.state);t.courses.splice(e,1),n.setState(t)},n.editCourse=function(e){var t=Object(i.a)({},n.state);t.view=1,t.editCourseIndex=e,n.setState(t)},n.handleCource=function(e){var t=Object(i.a)({},n.state);t.editCourseIndex>=0?t.courses[t.editCourseIndex]=e:t.courses.push(e),t.editCourseIndex=-1,t.view=0,n.setState(t)},n.viewCourseDetails=function(e){var t=Object(i.a)({},n.state);t.view=2,t.viewCourseIndex=e,n.setState(t)},n.handleStudent=function(e){var t=Object(i.a)({},n.state);t.courses[t.viewCourseIndex].students.push(e),t.view=2,n.setState(t)},n.addCourse=function(){var e=Object(i.a)({},n.state);e.view=1,e.editCourseIndex=-1,n.setState(e)},n.showCourseList=function(){var e=Object(i.a)({},n.state);e.view=0,e.viewCourseIndex=-1,n.setState(e)},n.showStudentForm=function(){var e=Object(i.a)({},n.state);e.view=3,n.setState(e)},n.showCourseDetails=function(){var e=n.state,t=e.courses,s=e.viewCourseIndex,c=e.view,a=t[s],r=a.courseName,i=a.faculty,u=a.lecture,l=a.students;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-6",children:[Object(j.jsxs)("h5",{children:["Course Name: ",r]}),Object(j.jsxs)("h5",{children:["Faculty: ",i]}),Object(j.jsxs)("h5",{children:["Numbers of lecture: ",u]}),Object(j.jsxs)("h5",{children:["Numbers of students: ",l.length]})]}),Object(j.jsx)("div",{className:"col-6",children:0===l.length?"":Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"row bg-dark text-light",children:[Object(j.jsx)("div",{className:"col-6 border",children:"Student Id"}),Object(j.jsx)("div",{className:"col-6 border",children:"Student Name"})]}),l.map((function(e){return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-6 border",children:e.id}),Object(j.jsx)("div",{className:"col-6 border",children:e.name})]})}))]})})]}),2===c?Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return n.showStudentForm()},children:"Enroll More Students"}):Object(j.jsx)(h,{student:{id:"",name:""},onSubmit:n.handleStudent}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn btn-primary my-2",onClick:function(){return n.showCourseList()},children:"Show List of Course"})]})},n.state={courses:[{courseName:"JavaScript",faculty:"Suman Singh",lecture:20,students:[{id:"IN123",name:"Suman"}]},{courseName:"React",faculty:"Sonu",lecture:28,students:[]},{courseName:"Angular",faculty:"Ravi",lecture:28,students:[{id:"IN123",name:"Suman"}]},{courseName:"Node.Js",faculty:"Suraj",lecture:28,students:[]},{courseName:"Railway",faculty:"Piyush Goyal",lecture:28,students:[{id:"IN123",name:"Suman"}]},{courseName:"SSC",faculty:"Raj Shrama",lecture:28,students:[]},{courseName:"Bank",faculty:"SitaRaman",lecture:28,students:[{id:"IN123",name:"Suman"}]},{courseName:"JEE",faculty:"Santosh",lecture:28,students:[]}],view:0,editCourseIndex:-1,viewCourseIndex:-1},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t={courseName:"",faculty:"",lecture:Number,students:[]},s=this.state,n=s.courses,c=s.view,a=s.editCourseIndex;return Object(j.jsx)(j.Fragment,{children:0===c?Object(j.jsxs)("div",{className:"container text-center",children:[Object(j.jsx)("div",{class:"jumbotron text-center bg-secondary text-white",children:Object(j.jsx)("h1",{children:"Course Portal"})}),Object(j.jsx)("div",{class:"row my-5",children:n.map((function(t,s){return Object(j.jsx)("div",{class:"col-lg-3 col-md-4 col-sm-6 col-xs-auto my-2",children:Object(j.jsx)("div",{class:"card bg-info text-dark",children:Object(j.jsxs)("div",{class:"card-body",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{class:"card-title",children:t.courseName}),Object(j.jsxs)("h5",{class:"card-subtitle mb-2",children:["Faculty-: ",Object(j.jsx)("span",{className:"text-muted",children:t.faculty})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h4",{children:["Lectures:- ",t.lecture]}),Object(j.jsxs)("h4",{children:["Enroll Students:- ",t.students.length]})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-around my-3",children:[Object(j.jsx)("button",{className:"btn btn-success btn-sm",onClick:function(){return e.viewCourseDetails(s)},children:"Details"}),Object(j.jsx)("button",{className:"btn btn-warning btn-sm",onClick:function(){return e.editCourse(s)},children:"Edit"}),Object(j.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return e.deleteCourse(s)},children:"Delete"})]})]})})})}))}),Object(j.jsx)("button",{className:"btn btn-primary my-3",onClick:this.addCourse,children:"Add Course"})]}):1===c?Object(j.jsx)(b,{course:a>=0?n[a]:t,onChange:this.handleCource,edit:a>=0}):this.showCourseDetails()})}}]),s}(n.Component);var x=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(m,{})})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};s(15);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.09c85292.chunk.js.map