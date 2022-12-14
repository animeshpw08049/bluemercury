document.getElementById("gotoship").addEventListener("click",myForm);
var infoArr=JSON.parse(localStorage.getItem("infoList"))||[];

function myForm(e){
  e.preventDefault();
  var infoObj={
    email: document.getElementById("email").value,
    country: document.getElementById("country").value,
    firstname: document.getElementById("firstname").value,
    address: document.getElementById("address").value,
    apartment: document.getElementById("apartment").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    code: document.getElementById("code").value,
    
  };
  infoArr.push(infoObj);
  localStorage.setItem("infoList",JSON.stringify(infoArr));
  document.getElementById("email").value="";
  document.getElementById("country").value="";
  document.getElementById("firstname").value="";
  document.getElementById("address").value="";
  document.getElementById("apartment").value="";
  document.getElementById("city").value="";
  document.getElementById("state").value="";
  document.getElementById("code").value="";


  window.open("shipping.html","_self");
}
function promoBefore() {
  let rightAdd = localStorage.getItem("bluemercuryFinalAmount");
  let rightConvert = JSON.parse(rightAdd);

  let insert = `<div id="discount">
  <div>
    <input type="text" name="box" id="text" placeholder="Gift Card/Promo Code">
  </div>
  <div><button onclick="applyPromo()">APPLY</button></div>
</div>
<hr style="margin: 20px auto; width: 80%;">
<div class="tot">
  <div>Subtotal</div>
  <div>${rightConvert[0].amount}</div>
</div>
<hr style="margin: 20px auto; width: 80%;">
<div class="tot">
  <div>Total</div>
  <div id="tot">${rightConvert[0].amount}</div>
</div>`

let where = document.getElementById("p-right-section");
where.innerHTML += insert;
}
promoBefore()

function applyPromo() {
  let input = document.getElementById("text").value;
  let totalAm = document.getElementById("tot").textContent;
  if (input === "masai30") {
      let a = '';
      for (let i = 1; i < totalAm.length; i++) {
          a += totalAm[i];
      }
      a = Number(a);
      a = Math.floor((a/100)*70);
      document.getElementById("tot").textContent = `$${a}`;

      let getingAm = localStorage.getItem("bluemercuryFinalAmount");
      let convertAm = JSON.parse(getingAm);
      
      convertAm[0].amount = `$${a}`;
   
      localStorage.setItem("bluemercuryFinalAmount", JSON.stringify(convertAm));
      alert("Congrats! 30% discount applied to the final price!")
  } else {
      alert("Invalid Promo Code!");
  }
}
