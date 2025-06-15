let btn1 = document.querySelector("button");
let ol = document.querySelector("ol");
let inp = document.querySelector("input")

btn1.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add ("delete");

    item. appendChild (delBtn);
    ol.appendChild(item);
    inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtns of delBtns) {
//     delBtns.addEventListener("click", function () {
//         console.log ("element deleted");
//         let par = this.parentElement;
//         console.log (par);
//         par. remove();
//     });
// }

ol.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
        console.log("deleted");
    }
});
