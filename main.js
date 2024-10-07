


function getbutton(){
    document.querySelector(".slider").classList.toggle("show")
}


//form 
function getnameprocess(){
    let message = document.getElementById("input").value
    let notification = document.getElementById("name")
    notification.innerHTML= message
    console.log(message)

    let laptop = document.getElementById("text").value
    let phone = document.getElementById("fname")
    phone.innerHTML = laptop
    console.log(laptop)

    let charge = document.getElementById("beno").value
    let bettry = document.getElementById("study")
    bettry.innerHTML = charge
    console.log(charge)

    let device = document.getElementById("tv").value
    let mouse = document.getElementById("mail")
    mouse.innerHTML = device
}
function formBtn(){
    document.getElementById("form").classList.toggle("apply")
}
function formcut(){
    document.getElementById("form").classList.remove("apply")
}



document.querySelectorAll(".box1").forEach((getnames, index) => {
    getnames.addEventListener('click', function(){
        const contents = getnames.innerHTML;
        document.getElementById("popcontent").innerHTML = contents;
        document.getElementById("popup").classList.add("active");
        document.getElementById("bodie").classList.add("store")
    });
});
function processOfBtn(){
    document.getElementById("popup").classList.remove("active")
    document.getElementById("bodie").classList.remove("store")
}