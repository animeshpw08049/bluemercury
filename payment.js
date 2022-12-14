var paymentArr=JSON.parse(localStorage.getItem('pay')) || [];
document.querySelector('#all').addEventListener('submit',payments);

function payments(e){
e.preventDefault();
var number=document.getElementById('number').value;
var name=document.getElementById('name').value;
var date=document.getElementById('date').value;
var cvv=document.getElementById('cvv').value;
var country=document.getElementById("Country").value;
var firstname=document.getElementById("Firstname").value;
var lastname=document.getElementById("Lastname").value;
var address=document.getElementById("Address").value;
var apartment=document.getElementById("Apartment").value;
var city=document.getElementById("City").value;
var state=document.getElementById("State").value;
var code=document.getElementById("Code").value;

var obj={};
obj.number=number;
obj.name=name;
obj.date=date;
obj.cvv=cvv;
obj.country=country;
obj.firstname=firstname;
obj.lastname=lastname;
obj.address=address;
obj.apartment=apartment;
obj.city=city;
obj.state=state;
obj.code=code;

paymentArr.push(obj);

console.log(paymentArr);

localStorage.setItem('pay',JSON.stringify(paymentArr));

 window.location.href='otp.html';
}


