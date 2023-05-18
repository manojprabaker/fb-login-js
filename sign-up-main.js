let fName = document.getElementsByClassName("first-name")[0];
let sName = document.getElementsByClassName("sur-name")[0];
let emailBtn = document.getElementsByClassName("login-email")[0];
let pswdLoginBtn = document.getElementsByClassName("login-pswd")[0];
let submtBtn = document.getElementById("submit-btn");



submtBtn.addEventListener("click", function (c) {

    c.preventDefault();
    let emailLogin = document.getElementsByClassName("login-email")[0].value;
    let pswdLogin = document.getElementsByClassName("login-pswd")[0].value;
    let pswdR = pswdLogin;
    let emailR = emailLogin;
    let flag = true;
    if (true) {
        validate("firstName");
        validate("surName");
        validate("login-email");
        validate("date-select");
        validate("mon-select");
        validate("year-select");
        validateRadio("form-check-input");
        function validate(clssName) {

            let ele = document.getElementsByClassName(clssName)[0]
            let eleValue = ele.value;
            if ((eleValue === "")) {
                ele.classList.add("login-error");
                console.log(eleValue);
                flag = false;
            }
            else {
                ele.classList.remove("login-error");
                console.log(eleValue);
            }
        }

        function validateRadio(radioName) {
            let ele = document.getElementsByClassName(radioName);
            let gender = true;

            if(!((ele[0].checked) || (ele[1].checked) || (ele[2].checked)))
            {
                ele[0].parentNode.classList.add("login-error");
                ele[1].parentNode.classList.add("login-error");
                ele[2].parentNode.classList.add("login-error");
            }
            else{
                ele[0].parentNode.classList.remove("login-error");
                ele[1].parentNode.classList.remove("login-error");
                ele[2].parentNode.classList.remove("login-error");

            }
            // for (let i = 0; i < ele.length; i++) {
            //     if (ele[i].checked == false) {
            //         gender = false;
            //     }
            //     if (gender == false) {
                    
            //             if (gender == false) {
            //                 ele[i].parentNode.classList.add("login-error");
            //                 console.log("add class")
            //             }
            //             else {
            //                 ele[i].parentNode.classList.remove("login-error");
            //                 console.log("remove class")

            //             }
                    
            //     }
            // }
        }







        // if ((emailLogin === "")) {
        //     emailBtn.classList.add("login-error");
        //     console.log(emailLogin);
        //     flag = false;
        // }
        // else {
        //     emailBtn.classList.remove("login-error");
        // }


        // console.log(pswdLogin)
        var re = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/
        if (!(re.test(pswdLogin))) {
            pswdLoginBtn.classList.add("login-error");
            console.log("else")
            flag = false;
        }
        else {
            pswdLoginBtn.classList.remove("login-error");
        }
    }
    console.log(flag)
    if (flag == true) {
        localStorage.setItem("pswdR", pswdR);
        localStorage.setItem("emailR", emailR);
        window.alert("Registration Successful");
        location.href = "index.html";
    }
});
