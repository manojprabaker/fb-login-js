//options-toogle
let options = document.getElementById("profile-options");

options.addEventListener("click", function () {
    let optionList = document.getElementById("options-list");
    optionList.classList.toggle("active-options");

})

//logout

let logoutBtn = document.getElementsByClassName("log-out")[0];


logoutBtn.addEventListener("click", function () {
    location.href = "../index.html";
    console.log("hgsf")
})

//post update
let postBtn = document.getElementById("post");
let postTray = document.getElementById("post-tray");


postBtn.addEventListener("click", function () {
    let postInput = document.getElementById("post-text").value;

    let postIP=document.getElementById("post-text");
    var innerDiv = document.createElement("div");
    innerDiv.classList.add("inner-div");
    innerDiv.innerHTML = `<span id="task-names">
                    ${postInput}
                </span>

                <div class="reactions">
                <div>
                <i class="fa-solid fa-thumbs-up" style="color: #fff;"></i>
                <i class="fa-solid fa-heart" style="color: #fff;"></i>
                </div>
                <div class="edit-delete">
                <i class="fa-solid fa-pen-to-square edit-post" style="color: #919191;"></i>
                <i class="fa-solid fa-trash delete" style="color: #919191;"></i>
                </div>
                </div>
                
                `;
    postTray.appendChild(innerDiv);



    let del = document.querySelectorAll(".delete");
    for (let i = 0; i < del.length; i++) {
        // console.log(del);
        del[i].onclick = function () {
            this.parentNode.parentNode.parentNode.style.display = "none";
        }
    }

    let edit=document.querySelectorAll(".edit-post");
    console.log(edit)
    for(let i=0;i<edit.length;i++)
    {
        edit[i].onclick=function(){
           // console.log("edit")
           let postText=this.parentNode.parentNode.parentNode.getElementsByTagName("span")[0].innerText;
           console.log(postText)
           postIP.value=postText;
           this.parentNode.parentNode.parentNode.style.display = "none";
        }
    }

    postIP.value=" ";

})








