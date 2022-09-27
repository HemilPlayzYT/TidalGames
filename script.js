// Slope Card
let likebutton = document.querySelector(".likebutton");
let dislikebutton = document.querySelector(".dislikebutton");
let likecounter = document.querySelector(".like-counter");
let dislikecounter = document.querySelector(".dislike-counter");

likebutton.addEventListener('click', () => {
    if (likecounter.value === "0") {
        likecounter.value = parseInt(likecounter.value) + 1;
    } else
    if (likecounter.value === "1") {
        likecounter.value = parseInt(likecounter.value) - 1;
    }
})

dislikebutton.addEventListener('click', () => {
    if (dislikecounter.value === "0") {
        dislikecounter.value = parseInt(dislikecounter.value) + 1;
    } else
    if (dislikecounter.value === "1") {
        dislikecounter.value = parseInt(dislikecounter.value) - 1;
    }
})

//Menja Card
let likebutton1 = document.querySelector(".likebutton1");
let dislikebutton1 = document.querySelector(".dislikebutton1");
let likecounter1 = document.querySelector(".like-counter1");
let dislikecounter1 = document.querySelector(".dislike-counter1");

likebutton1.addEventListener('click', () => {
    if (likecounter1.value === "0") {
        likecounter1.value = parseInt(likecounter1.value) + 1;
    } else
    if (likecounter1.value === "1") {
        likecounter1.value = parseInt(likecounter1.value) - 1;
    }
})

dislikebutton1.addEventListener('click', () => {
    if (dislikecounter1.value === "0") {
        dislikecounter1.value = parseInt(dislikecounter1.value) + 1;
    } else
    if (dislikecounter1.value === "1") {
        dislikecounter1.value = parseInt(dislikecounter1.value) - 1;
    }
})

//Snake Card
let likebutton2 = document.querySelector(".likebutton2");
let dislikebutton2 = document.querySelector(".dislikebutton2");
let likecounter2 = document.querySelector(".like-counter2");
let dislikecounter2 = document.querySelector(".dislike-counter2");

likebutton2.addEventListener('click', () => {
    if (likecounter2.value === "0") {
        likecounter2.value = parseInt(likecounter2.value) + 1;
    } else
    if (likecounter2.value === "1") {
        likecounter2.value = parseInt(likecounter2.value) - 1;
    }
})

dislikebutton2.addEventListener('click', () => {
    if (dislikecounter2.value === "0") {
        dislikecounter2.value = parseInt(dislikecounter2.value) + 1;
    } else
    if (dislikecounter2.value === "1") {
        dislikecounter2.value = parseInt(dislikecounter2.value) - 1;
    }
})


//SearchBar
function search_games() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}