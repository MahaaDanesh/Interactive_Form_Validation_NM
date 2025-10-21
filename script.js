const steps = document.querySelectorAll(".step");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back2 = document.getElementById("back2");
const back3 = document.getElementById("back3");
const form = document.getElementById("multiStepForm");
const successMsg = document.getElementById("successMsg");
const progressBar = document.querySelector(".progress-bar div");
const password = document.getElementById("password");
const pwMeter = document.querySelector(".pw-meter div");
const carRadio = document.getElementsByName("car");
const carModel = document.getElementById("carModel");

function showStep(index){
  steps.forEach((s,i)=>s.classList.add("hidden"));
  steps[index].classList.remove("hidden");
  progressBar.style.width = `${((index+1)/steps.length)*100}%`;
}

next1.onclick = ()=>{ showStep(1); }
next2.onclick = ()=>{ showStep(2); }
back2.onclick = ()=>{ showStep(0); }
back3.onclick = ()=>{ showStep(1); }

password.addEventListener("input", ()=>{
  let val = password.value;
  let strength = Math.min(3, (val.length>=6)+( /\d/.test(val)) + (/[!@#$%^&*]/.test(val)));
  pwMeter.style.width = `${(strength/3)*100}%`;
});

carRadio.forEach(r=> r.addEventListener("change", ()=>{
  if(r.value==="Yes") carModel.classList.remove("hidden");
  else carModel.classList.add("hidden");
}));

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  confetti();
  successMsg.classList.remove("hidden");
  setTimeout(()=>{
    form.reset();
    carModel.classList.add("hidden");
    successMsg.classList.add("hidden");
    showStep(0);
    pwMeter.style.width="0";
    progressBar.style.width="0";
  }, 3000);
});

showStep(0);
