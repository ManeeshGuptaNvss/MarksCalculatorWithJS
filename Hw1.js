var people=[]
document.getElementById("push").addEventListener('click', push1);
document.getElementById('clear').addEventListener('click',clearTable);
document.getElementById('unshift').addEventListener('click',unshift1);
let empty =() =>{
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("email").value="";
}
let DataTo = () =>{
    var name1 = document.getElementById("name").value;
    var age1 =parseInt(document.getElementById("age").value);
    var email1 =document.getElementById("email").value;
    if(name1.length && email1.length&&age1){
        var addData=
    {
         name:name1,
         age:age1,
         email:email1
    };
    return addData;
    }
    else{
        alert("Fill all the fields")
    }
}
function unshift1()
{
    console.log(" Unshift Button!");
    people.unshift(DataTo());
    document.getElementById("data").innerHTML=``
    for(var i=0;i<people.length;i++){
        document.getElementById('data').innerHTML += `
        <tr>
        <td>${people[i].name}</td>
        <td>${people[i].age}</td>
        <td>${people[i].email}</td>
        <td><button onClick="delete1()">Delete</button></td>
    </tr>
    `
    }
    empty();
}
function push1 ()
{
    people.push(DataTo());
    
    document.getElementById("data").innerHTML=``
    for(var i=0;i<people.length;i++){
        document.getElementById('data').innerHTML += `
        <tr>
        <td>${people[i].name}</td>
        <td>${people[i].age}</td>
        <td>${people[i].email}</td>
        <td> <button onClick="delete1(${i})"> Delete </button> </td>
    </tr>
    `
    }
    empty();
}
function clearTable ( ){
    document.getElementById("data").innerHTML="";
    people=[]
    empty();

}
function delete1 (index) {
    people.splice(index,1);
    document.getElementById("data").innerHTML=``
    for(var i=0;i<people.length;i++){
        document.getElementById('data').innerHTML += `
        <tr>
        <td>${people[i].name}</td>
        <td>${people[i].age}</td>
        <td>${people[i].email}</td>
        <td> <button onClick="delete1()"> Delete </button> </td>
    </tr>
    `
}
}

