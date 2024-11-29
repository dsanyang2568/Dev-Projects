//
// Get the questions
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const question5 = document.getElementById("question5");
const question6 = document.getElementById("question6");
const question7 = document.getElementById("question7");
const question8 = document.getElementById("question8");
const question9 = document.getElementById("question9");
const question10 = document.getElementById("question10");

// One way to aet the choices
const question1Choices = document.getElementsByName("choice1");
const question2Choices = document.getElementsByName("choice2");
const question3Choices = document.getElementsByName("choice3");
const question4Choices = document.getElementsByName("choice4");
const question5Choices = document.getElementsByName("choice5");
const question6Choices = document.getElementsByName("choice6");
const question7Choices = document.getElementsByName("choice7");
const question8Choices = document.getElementsByName("choice8");
const question9Choices = document.getElementsByName("choice9");
const question10Choices = document.getElementsByName("choice10");

// // Another way to get the choices
// const question1Choices = document.querySelectorAll('input[name="choice1"]');
// const question2Choices = document.querySelectorAll('input[name="choice2"]');
// const question3Choices = document.querySelectorAll('input[name="choice3"]');
// const question4Choices = document.querySelectorAll('input[name="choice4"]');
// const question5Choices = document.querySelectorAll('input[name="choice5"]');
// const question6Choices = document.querySelectorAll('input[name="choice6"]');
// const question7Choices = document.querySelectorAll('input[name="choice7"]');
// const question8Choices = document.querySelectorAll('input[name="choice8"]');
// const question9Choices = document.querySelectorAll('input[name="choice9"]');
// const question10Choices = document.querySelectorAll('input[name="choice10"]');

// Set the correct answers
const question1CorrectAnswer = "Santa Fe"
const question2CorrectAnswer = "Mount Everest"
const question3CorrectAnswer = "Milky Way"
const question4CorrectAnswer = "Earth"
const question5CorrectAnswer = "Alpha Centauri"
const question6CorrectAnswer = "7"
const question7CorrectAnswer = "Cheetah"
const question8CorrectAnswer = "Light has no weight"
const question9CorrectAnswer = "70 %"
const question10CorrecAnswer = "78 %"

const submitMessageElement = document.getElementById("submit-message");
let choiceSelected = false;

// Additional Tasks
// Alert the user that all questions were not choiceed.
// Change background color of the correct choice to green.
// Change background color of the wrong choice to red.

function questionsAndChoices1() {

  question1Choices.forEach((choiceToQuestion1) => {    
    if (choiceToQuestion1.checked) {
      // alert(choiceToQuestion1.value);
      if (choiceToQuestion1.value === question1CorrectAnswer) {
        alert(`${choiceToQuestion1.value} is CORRECT`);
        // choiceToQuestion1.style = "background-color: green";
      } else {
        alert(`${choiceToQuestion1.value} is WRONG`);
      }
      choiceSelected = true;
    } else {
      return notAllQuestionschoiceed();
      // return submitMessageElement.innerHTML = "Not all questions were choiceed.";
    }
    
  });  
  question2Choices.forEach((choiceToQuestion2) => {
    if (choiceToQuestion2.checked) {
      // alert(choiceToQuestion2.value);
      if (choiceToQuestion2.value === question2CorrectAnswer) {
        alert(`${choiceToQuestion2.value} is CORRECT`);
      } else {
        alert(`${choiceToQuestion2.value} is WRONG`);
      }
      choiceSelected = true;
    } 
  });
  question3Choices.forEach((choiceToQuestion3) => {
    if (choiceToQuestion3.checked) {
      alert(choiceToQuestion3.value);
      choiceSelected = true;
    } 
  });
  question4Choices.forEach((choiceToQuestion4) => {
    if (choiceToQuestion4.checked) {
      alert(choiceToQuestion4.value);
      choiceSelected = true;
    } 
  });
  question5Choices.forEach((choiceToQuestion5) => {
    if (choiceToQuestion5.checked) {
      alert(choiceToQuestion5.value);
      choiceSelected = true;
    } 
  });
  question6Choices.forEach((choiceToQuestion6) => {
    if (choiceToQuestion6.checked) {
      alert(choiceToQuestion6.value);
      choiceSelected = true;
    } 
  });
  question7Choices.forEach((choiceToQuestion7) => {
    if (choiceToQuestion7.checked) {
      alert(choiceToQuestion7.value);
      choiceSelected = true;
    } 
  });
  question8Choices.forEach((choiceToQuestion8) => {
    if (choiceToQuestion8.checked) {
      alert(choiceToQuestion8.value);
      choiceSelected = true;
    } 
  });
  question9Choices.forEach((choiceToQuestion9) => {
    if (choiceToQuestion9.checked) {
      alert(choiceToQuestion9.value);
      choiceSelected = true;
    } 
  });
  question10Choices.forEach((choiceToQuestion10) => {
    if (choiceToQuestion10.checked) {
      alert(choiceToQuestion10.value);
      choiceSelected = true;
    } 
  });

  // if (!errorMessage()) { 
  //   submitMessageElement.innerHTML = "Thanks for the submission";
  //   submitMessageElement.style = "color: blue";
  // }
}

// function questionsAndChoices2() {

//   for (const choiceToQuestion1 of question1Choices) {
//     if (choiceToQuestion1.checked) {
//       alert(choiceToQuestion1.value);
//       count = 1;
//     }
//   }
//   for (const choiceToQuestion2 of question2Choices) {
//     if (choiceToQuestion2.checked) {
//       alert(choiceToQuestion2.value);
//       count = 1;
//     }
//   }
//   for (const choiceToQuestion3 of question3Choices) {
//     if (choiceToQuestion3.checked) {
//       alert(choiceToQuestion3.value);
//       count = 1;
//     }
//   }
//   for (const choiceToQuestion4 of question4Choices) {
//     if (choiceToQuestion4.checked) {
//       alert(choiceToQuestion4.value);
//       count = 1;
//     }
//   }
//   for (const choiceToQuestion5 of question5Choices) {
//     if (choiceToQuestion5.checked) {
//       alert(choiceToQuestion5.value);
//       count = 1;
//     }
//   }
//   for (const choiceToQuestion6 of question6Choices) {
//     if (choiceToQuestion6.checked) {
//       alert(choiceToQuestion6.value);
//       count = 1;
//     }
//   }
//   for (const choiceToQuestion7 of question7Choices) {
//     if (choiceToQuestion7.checked) {
//       alert(choiceToQuestion7.value);
//       count = 1;
//     }
//   }
//   for (const choiceToQuestion8 of question8Choices) {
//     if (choiceToQuestion8.checked) {
//       alert(choiceToQuestion8.value);
//       count = 1;
//     }
//   }
//   for (const choiceToQuestion9 of question9Choices) {
//     if (choiceToQuestion9.checked) {
//       alert(choiceToQuestion9.value);
//       count = 1;
//     }
//   }
//   for (const choiceToQuestion10 of question10Choices) {
//     if (choiceToQuestion10.checked) {
//       alert(choiceToQuestion10.value);
//       count = 1;
//     }
//   }

//   if (!errorMessage()) { 
//     submitMessageElement.innerHTML = "Thanks for the submission";
//     submitMessageElement.style = "color: blue";
//   }
// }

function errorMessage() {
  if (!choiceSelected) {
    return submitMessageElement.innerHTML = "Please choice at least one question.";    
  }
  // if ()
}

function notAllQuestionschoiceed() {
  // if (!choiceSelected) {
  //   return submitMessageElement.innerHTML = "Not all questions were choiceed.";    
  // }
  return submitMessageElement.innerHTML = "Not all questions were choiceed.";
}

// This function is to clear the error message if any radio is selected.
function removeErrorMessage() {
  submitMessageElement.innerHTML = "";
}

function submit() {
  questionsAndChoices1();
  // questionsAndChoices2();
  createContent();

  // // Redirect to the submit page for feedback
  // const xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     window.location.href = 'https://website.com/my-account';
  //   }
  // };
  // xhttp.open("POST", "demo_post.asp", true);
  // xhttp.send();
}

function createContent() {
  // Create questions and their choice selected from the quiz.
  // let val = document.getElementsByTagName("ul")[0].children[0].innerText;
  // let element1List = document.getElementById("question1").innerText;
  let element1List = document.getElementsByTagName("ol")[0].children[0].innerText;
  // alert(val);
  // const pTagElement = document.createElement("p");
  // const text1 = document.createTextNode(element1List);
  // pTagElement.appendChild(text1);
  document.getElementById("questionsAndChoicesListing").innerHTML = element1List;    
}


// // Old code for testing
// // Get labels ids
// // create an object instead of array
// const ids = ["Ans1A", "Ans1B", "Ans1C", "Ans1D"];
// // const properties = {};
// for (const id of ids) {
//   // const element = document.getElementById(id);
//   // properties[id] = element.checked;
//   if (choiceToQuestion1.checked.value === question1Correctchoice) {
//     document.getElementById(id).style = "background-color: green";
//     // document.getElementById("checkmark").innerHTML = "√";
//     // document.getElementById("checkmark").style = "color: green";
//   } else {
//     // document.getElementById(id).style = "background-color: red";
//     document.getElementById("checkmarka").innerHTML = "√";
//   }
// }
