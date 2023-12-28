let input = document.getElementById("inp")
let text = document.querySelector(".text")
// Add button ky ooper function lagiya
function Add() {
    // Aghar input my kuch bhe ni hoga to alert show hoga
    if(input.value  == ''){
       alert("Enter Task")
    }
    // New elements ko add karna javascript ke help sy
    else{
        let newEle = document.createElement("ul")
        console.log(newEle)
        newEle.innerHTML=`${input.value} <i class="fa-solid fa-xmark"></i>`
        // Element ko add karna
        text.appendChild(newEle)
        // inputs ke value ko clear karna 
        input.value = ""
        // Elemets ko remove karna 
        newEle.querySelector("i").addEventListener('click' ,remove)
        function remove(){
            newEle.remove()
        }

    }
}