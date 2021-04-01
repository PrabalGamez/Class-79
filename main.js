var name_of_the_student=[];
function submit(){
name1=document.getElementById("Name1").value;
name2=document.getElementById("Name2").value;
name3=document.getElementById("Name3").value;
name4=document.getElementById("Name4").value;

name_of_the_student.push(name1);
name_of_the_student.push(name2);
name_of_the_student.push(name3);
name_of_the_student.push(name4);
console.log(name_of_the_student);
document.getElementById("Display_name").innerHTML=name_of_the_student;
document.getElementById("Submit_button").style.display="none";
document.getElementById("Sort_button").style.display="inline-block";
}

function sorting(){
name_of_the_student.sort();
console.log(name_of_the_student);
document.getElementById("Display_name").innerHTML=name_of_the_student;
}