// import questionsAndChoices1 from onlinequiz.js;

// const question1 = document.getElementById("question1");
document.getElementById("questionsAndChoicesListing");

function createContent() {
  // Create questions and their choice selected from the quiz.
  // let questionList = document.getElementsByTagName("ul")[0].children[0].innerText;
  // alert(questionList);
  // document.getElementById("content").innerHTML = questionList;

  let questionList1 = document.getElementsByTagName("ol");
  let questionList2 = document.getElementsByTagName("ol");
  let questionList3 = document.getElementsByTagName("ol");
  let questionList4 = document.getElementsByTagName("ol");
  // let questionList = document.getElementById("question1").innerText;
  // alert(questionList);
  // document.getElementById("questionsAndChoicesListing").innerHTML = questionList1;
  // document.getElementById("questionsAndChoicesListing").innerHTML = questionList2;
  // document.getElementById("questionsAndChoicesListing").innerHTML = questionList3;

  pTag1 = document.createElement("p");
  pTag2 = document.createElement("p");
  pTag3 = document.createElement("p");
  pTag4 = document.createElement("p");
  pTag1.innerHTML = "1. What is the capital of New Mexico?";
  pTag2.innerHTML = "2. What is considered the highest mountain in the world?";
  pTag3.innerHTML = "3. What is the name of our solar system?";
  pTag4.innerHTML = "4. What is the third planet from the Sun?";

  questionList1[0].append(pTag1);
  // Choice selected
  questionList2[0].append(pTag2);
  // Choice selected
  questionList3[0].append(pTag3);
  // Choice selected
  questionList4[0].append(pTag4);
  // Choice selected
}