function add(){
  const num1 = parseInt(document.querySelector("#num1").value);
  const num2 = parseInt(document.querySelector("#num2").value);

  if(isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
      alert("Please enter positive numbers for both inputs");
  }
  else {
      const answer = num1 + num2;
      document.querySelector("#answer").innerText = answer;
  }
}