document.getElementById("submit").addEventListener("click",openpaymentfunc);
function openpaymentfunc(){
  window.open("payment.html");
}

var infoArr=JSON.parse(localStorage.getItem("infoList"))||[];
displayData(infoArr);

  function displayData(infoArr){
    document.getElementById("body2").innerText="";
    infoArr.map(function(el){
      var tr=document.createElement("tr");

      var td1=document.createElement("td");
      td1.innerText=el.firstname;

      var td2=document.createElement("td");
      td2.innerText=el.email;

      var td3=document.createElement("td");
      td3.innerText=el.apartment;

      var td4=document.createElement("td");
      td4.innerText=el.address;

      var td5=document.createElement("td");
      td5.innerText=el.city;

      var td6=document.createElement("td");
      td6.innerText=el.state;

      var td7=document.createElement("td");
      td7.innerText=el.code;


      var td8=document.createElement("td");
      td8.innerText=el.country;

      tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
      document.getElementById("body2").append(tr);
      localStorage.removeItem("infoList");
    });
    
}
