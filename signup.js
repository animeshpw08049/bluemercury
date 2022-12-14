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

document.querySelector("form").addEventListener("submit",signup);
var signupData=JSON.parse(localStorage.getItem("userData"))||[];
var p=document.createElement("p");
p.innerText="";
function signup(){
    event.preventDefault();
    var email=document.getElementById("email").value;
    var firstname=document.getElementById("firstName").value;
    var lastname=document.getElementById("lastName").value ;
    var  password=document.getElementById("password").value ;
   
    var isPresent=signupData.filter(function(elem,i)
    {
      var Email=document.getElementById("email").value ;
       return elem.email==Email;
    });
    
   
     if(password.length<8 || password.length>12)
    {
      document.getElementById("status").innerHTML=" ";
      document.getElementById("status").innerText=" ";
      document.getElementById("status").style=" ";
      document.getElementById("color").style.color="red";

    }
    else if(isPresent.length!=0)
     {
      document.getElementById("color").style.color="#666";
      
      
      document.getElementById("status").innerHTML=" ";
      document.getElementById("status").style=" ";
       p.innerText="This email address is already associated with an account. If this account is yours, you can reset your password";
       document.getElementById("password").style.borderColor="calc()";
       p.style.color="#cb2b2b";
       p.style.width="95%"
       document.getElementById("status").style.backgroundColor="#e4c4c4";
       
        document.getElementById("status").style.textAlign="centre";
       document.getElementById("status").style.margin="auto";
       document.getElementById("status").style.fontSize="18px";

       document.getElementById("status").append(p);
       document.getElementById("email").value="";
        document.getElementById("firstName").value="";
        document.getElementById("lastName").value="";
        document.getElementById("password").value="";
       
     }
     else if(isPresent.length==0){
     
      var data={
        email:document.getElementById("email").value,
        firstname:document.getElementById("firstName").value ,
        lastname:document.getElementById("lastName").value ,
        password:document.getElementById("password").value ,
       
   };
   
    signupData.push(data);
        
    localStorage.setItem("userData",JSON.stringify(signupData));

    document.getElementById("status").innerHTML=" ";
    document.getAnimations("status").style=" ";
    document.getElementById("color").style.color="#666";
    alert("Account is Created Succesfully");
    window.location.href="login.html";


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


