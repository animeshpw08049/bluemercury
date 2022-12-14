var btn = document.getElementById("disappear")
function divAppear() {
    var cll = document.getElementById("shop_hover");
    cll.style.display = "grid";
    cll.style.background = "white";
}
btn.addEventListener("mouseover", divAppear);

// work on div of shop_hover =>

var cll = document.getElementById("shop_hover");
function divDisappear() {
        cll.style.display = "none";
}
cll.addEventListener("mouseleave", divDisappear);

var loginData=JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector("form").addEventListener("submit", loginForm);
var p=document.createElement("p");

p.innerText=" ";
function loginForm(){
    event.preventDefault();
    var email=document.getElementById("email").value ;
    var password=document.getElementById("password").value ;
    if(email=="" || password=="")
    {
        var b=document.createElement("p");
        document.getElementById("error").innerHTML="";
        b.innerText="Please Enter Required Field";
        b.style.color="#cb2b2b";
         b.style.width="95%"
         document.getElementById("error").style.backgroundColor="#e4c4c4";
         
         document.getElementById("error").style.textAlign="centre";
         document.getElementById("error").style.margin="auto";
        
         document.getElementById("error").style.fontSize="18px";
  
         document.getElementById("error").append(b);
  
        
    }
    else{
     var obj={
        Email:document.getElementById("email").value ,
        Password:document.getElementById("password").value ,
    };
   
    var isPresent=loginData.filter(function(e,i){
        return email==e.email && password==e.password ;
    }
    )
    
    if(isPresent.length!=0)
    {
        
        document.getElementById("email").style.borderColor="green";
        
        document.getElementById("password").style.borderColor="green";
        document.getElementById("error").innerHTML="";
        display();
        function display(){
        alert("Login Succefull");
        }
        localStorage.setItem("loginData",JSON.stringify(obj));
        window.open("afterlogin.html","_self");
    }
    else{
        document.getElementById("error").innerHTML="";
        p.innerText="Incorrect email or password.";
       
    
       
        p.style.color="#cb2b2b";
       p.style.width="95%";
      
       document.getElementById("error").style.backgroundColor="#e4c4c4";
       
        document.getElementById("error").style.textAlign="centre";
       document.getElementById("error").style.margin="auto";
    
       document.getElementById("error").style.fontSize="18px";
       
       document.getElementById("error").append(p);
       
        document.getElementById("email").value="";
        document.getElementById("password").value="";
    }
}
}
const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
