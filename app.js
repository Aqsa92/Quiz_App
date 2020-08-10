

var name = prompt("Enter your name please!")
var questionArray = [{
    head1 : "1",
    question : "What is the answer of 24+6/3?",
    answer : "26",
    options : ["26","10","15","6"]

},
{
    head1 : "2",
    question : "Accounting is the subject of...",
    answer : "commerce group",
    options : ["science group", "arts group", "commerce group" , "engineering group"]

},
{
    head1 : "3",
    question : "Full form of RAM is ",
    answer : "random access memory",
    options : ["read access memory", "random access memory", "right access memory" , "none of above"]
},
{
    head1 : "4",
    question : "Who is the prime minister of pakistan? ",
    answer : "Imran Khan",
    options : ["Nawaz Shareef", "Khadim Hussain Rizwi", "Bilawal Bhutto" , "Imran Khan"]
}]

var questionCount = 0
var score = 0

function showQuestion(e){
    var heading = document.getElementById("head1")
    heading.innerHTML = questionArray[e].head1

    var questions = document.getElementById("q1")
    questions.innerHTML = questionArray[e].question

    var option = document.getElementsByClassName("list")
    for(var i = 0;i < option.length; i++){
        option[i].innerHTML = questionArray[e].options[i]
    }


}



function next(e){

   
    var questions = document.getElementById("q1")


    var nextBtn = document.getElementById("next")
   
    questionCount++
    showQuestion(questionCount)
    //removeActiveClass()
   
 }


function hover(e){

    e.classList.add("active")


}

function out(e){
   e.classList.remove("active")


}

function check(e){
    removeActiveClass()
     e.classList.add("active2")

}

function removeActiveClass(){
   var active = document.getElementsByClassName("active2")
   for(var i = 0;i < active.length;i++){
       active[i].classList.remove("active2")
   }
}
function rslt(){
  var active = document.getElementsByClassName("active2")
  if(active[0].innerHTML == questionArray[0].answer){
     score = score+10
 
     alert("Hi!  "+ name +"  Your score is "+score)
  }


  if(active[0].innerHTML == questionArray[1].answer){
    score = score+10

    alert("Hi! "+ name +" Your score is "+score)
}



  if(active[0].innerHTML == questionArray[2].answer){
    score = score+10

    alert("Hi! "+ name +" Your score is "+score)
}



  if(active[0].innerHTML == questionArray[3].answer){
    score = score+10

    alert("Hi! "+ name +"  Your total score is "+score)
}
  else(alert("try again"))
}


