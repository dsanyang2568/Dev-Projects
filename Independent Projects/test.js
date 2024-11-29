
const submitMessageElement = document.getElementById("submit-message");
const submitMessage = submitMessageElement.value;

// Correct Answers
const question1CorrectAnswer = "Santa Fe"

function submit() {  
  // const question1Choices = document.getElementsByName("Answer1");
  // count = 0;
  // question1Choices.forEach((choiceToQuestion1) => {
  //   if (choiceToQuestion1.checked) {
  //     alert(choiceToQuestion1.value);
  //     count = 1;
  //   }
  // });

  const question1Choices = document.getElementsByName("Answer1");
  count = 0;
  for (const choiceToQuestion1 of question1Choices) {
    if (choiceToQuestion1.checked) {
      alert(choiceToQuestion1.value);
      count = 1;
    }
  }

  // const question1Choices = document.querySelectorAll('input[name="Answer1"]');
  // count = 0;
  // for (const radioButton of question1Choices){
  //   if (radioButton.checked) {
  //     // console.log("Selected value is: ", radioButton.value);
  //     alert(radioButton.value);
  //     count = 1;
  //   }
  // }

  if (!errorMessage()) { 
    submitMessageElement.innerHTML = ""; 
  }  
}

function errorMessage() {
    if (count === 0) {
    return submitMessageElement.innerHTML = "Please select any one option.";    
  }
}

function removeErrorMessage() {
  submitMessageElement.innerHTML = "";
}


