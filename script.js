let students=[];
let form=document.getElementById("StudentForm");
form.addEventListener("submit",function(event){
    event.preventDefault();
    addStudent();
})

function addStudent(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let age=document.getElementById("age".value);
    let course=document.getElementById("course".value);
    if(name==="" || email==="" || age==="" || course==="" ){
        return document.getElementById("message").textContent="Fill all the fields";
    }
    if(age>18){
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
    <th>name</th>
    <th>email</th>
    <th>age</th>
    <th>course</th>
    </tr>
    `;
    for(let i=0;i<students.length;i++){
        let row=`
        <tr>
        <td>${students[i].name.value}</td>
        <td>${students[i].email.value}</td>
        <td>${students[i].age}</td>
        <td>${students[i].course}</td>
        </tr>
        `;
        table.innerHTML+=row;
    };
}
function rest(){

}