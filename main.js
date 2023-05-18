//let submtBtn =document.querySelector("#submit-btn");

let loginBtn = document.getElementsByClassName("login-btn")[0];
let emailBtn = document.getElementsByClassName("login-email")[0];
let pswdLoginBtn = document.getElementsByClassName("login-pswd")[0];
let emailL=localStorage.getItem("emailR");
let pswdL=localStorage.getItem("pswdR");
loginBtn.addEventListener("click", function (e) {
	e.preventDefault();
	let emailLogin = document.getElementsByClassName("login-email")[0].value;
// 	if(true)
// 	{
// 	if ((emailLogin === "")) {
// 		emailBtn.classList.add("login-error");
// 		//console.log(emailLogin);
// 		emailBtn.nextElementSibling.classList.add("error-show");

// 	}
// 	else {
// 		emailBtn.classList.remove("login-error");
// 		emailBtn.nextElementSibling.classList.remove("error-show");
// 	}

// 	var pswdLogin = document.getElementsByClassName("login-pswd")[0].value;
	
// 	if (pswdLogin.length < 5) {
// 		pswdLoginBtn.classList.add("login-error");
// 		pswdLoginBtn.nextElementSibling.classList.add("error-show");
// 		//console.log("else")
// 	}
// 	else {
// 		pswdLoginBtn.classList.remove("login-error");
// 		pswdLoginBtn.nextElementSibling.classList.remove("error-show");
// 	}

	
// }
var pswdLogin = document.getElementsByClassName("login-pswd")[0].value;
if((emailL == emailLogin) && (pswdL == pswdLogin ) )
{
	
	
	emailBtn.parentNode.children[1].classList.remove("error-show");
	emailBtn.parentNode.children[2].classList.remove("error-show");
	pswdLoginBtn.parentNode.children[1].classList.remove("error-show");
	pswdLoginBtn.parentNode.children[2].classList.remove("error-show");
	 window.alert("Success")
	location.href="home-page/index.html"
}
else
{
	
	
	emailBtn.parentNode.children[1].classList.add("error-show");
	emailBtn.parentNode.children[2].classList.add("error-show");
	pswdLoginBtn.parentNode.children[1].classList.add("error-show");
	pswdLoginBtn.parentNode.children[2].classList.add("error-show");
	
	//window.alert("Please Check your email and password")
}

})


















// submtBtn.addEventListener("click",function(e){
// 	e.preventDefault();

// })