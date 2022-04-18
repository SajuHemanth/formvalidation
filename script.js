const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const mainContainer = document.querySelectorAll(".container")
const mainancor=mainContainer[0].querySelectorAll('a');
const stepbar=document.querySelectorAll(".bar")
const stepbardiv=document.querySelectorAll(".bar-step")
console.log(stepbardiv)
let formStepsNum = 0;
console.log(formStepsNum)
console.log(mainancor)
nextBtns.forEach((btn) => {
  console.log(formStepsNum)
  btn.addEventListener("click", () => {
    console.log(formStepsNum+"click")
    console.log(formStepsNum)

  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
  });
});


function updateFormSteps() {
  console.log(formStepsNum+"inside")
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });
  mainancor.forEach((anc)=>{
    anc.classList.contains("color-change") && 
      anc.classList.remove("color-change");
  })
  console.log(formStepsNum)
  formSteps[formStepsNum].classList.add("form-step-active");
  let inancor=formSteps[formStepsNum].querySelectorAll('a');
  mainancor[formStepsNum].classList.remove("disable-ancor")
  mainancor[formStepsNum].classList.add("color-change")
  inancor.forEach((a)=>{
    a.classList.contains("disable-ancor")&&a.classList.remove("disable-ancor")
  })
}
function jumpForm(stepNumber)
{
  console.log(stepNumber)
  formStepsNum=stepNumber-1
  updateFormSteps()
}

function clickBasicForm(){
    formStepsNum++;
    updateFormSteps();
  
}
function clickOtherForm(){
  formStepsNum++;
  updateFormSteps();
}
function clickWorkForm(){
  formStepsNum++;
  updateFormSteps();
}
function clickEducationForm(){
  formStepsNum++;
  updateFormSteps();
}
function clickTeamForm(){
  formStepsNum++;
  updateFormSteps();
}
