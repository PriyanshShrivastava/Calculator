const inputtext = document.getElementById("input-text");

const outputText = document.getElementById("show-output");

let resultFlag = false; 

function btnClick(btnClicked) {
  if(resultFlag){
    inputtext.value="";
    resultFlag = false;
  }
  inputtext.value += btnClicked;
}

function equals() {
  let exp = inputtext.value;
  const ans = eval(exp);
  outputText.innerHTML += `
    <div style="background-color: #F5F5F5; height:1.5rem; padding:5px; position:relative; top:90%;">
      <span style="float:left"> 
      ${exp}  </span> 
      <span style="margin-left:30px"> = </span>
      <span style="float:right"> ${ans} </span>
    </div>
      `;
      inputtext.value=`${ans}`;
      resultFlag = true;
}

function clean(){
    inputtext.value="";
}

function back(){
    inputtext.value=inputtext.value.substring(0,(inputtext.value.length) - 1);
}

function flush(){
    outputText.textContent="";
    clean();
}

function pi(){
  inputtext.value += " 3.147";
}