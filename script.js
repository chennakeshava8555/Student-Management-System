let students=[];
let form=document.getElementById("StudentForm");
form.addEventListener("submit",function(event){
    event.preventDefault();
    addStudent();
})
function addStudent(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let age=document.getElementById("age").value;
    let course=document.getElementById("course").value;
    if(name==="" || email==="" || age==="" || course==="" ){
        document.getElementById("message").textContent="Fill all the fields";
        return;
    }
    if(age<18){
        return document.getElementById("message").textContent="Age must be 18 or Above";
        
    }
    // creating student objects
    let student={
        name:name, 
        email:email,
        age:age,
        course:course
    }
    // add student details into students array
    students.push(student);
    displayStudents();
    form.reset();
    document.getElementById("message").textContent="Registraction successfull";
}
function displayStudents(){
    let table=document.getElementById("studentTable");
    // clear the existing rows
    table.innerHTML=`
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Course</th>
    </tr>
    `;
    for(let i=0;i<students.length;i++){
        let row=`
        <tr>
        <td>${students[i].name}</td>
        <td>${students[i].email}</td>
        <td>${students[i].age}</td>
        <td>${students[i].course}</td>
        </tr>
        `;
        table.innerHTML+=row;
    };
}

//1.import * as math from'./math.js';
//  console.log(math.pi);
//2.import{pi,add as sum} from './math.js';
//  console.log(pi);
//  console.log(sum(2,3));
// console.log(math.add(2,3));
// import a from './math.js';
// console.log(a(10,30));

// import user from './math.js';
// console.log(user.name);







