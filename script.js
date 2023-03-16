//btn like


let hearts = document.getElementsByClassName("like");
for (let i = 0; i < hearts.length; i++) {
  let oneheart = hearts[i];
  oneheart.addEventListener("click", function () {
    if (oneheart.firstChild.style.color == "black") {
      oneheart.firstChild.style.color = "red";
    } else {
      oneheart.firstChild.style.color = "black";
    }
  });
}

//btn plus

let btnplus = document.getElementsByClassName("plus-btn");
for (let i = 0; i < btnplus.length; i++) {
  let plus = btnplus[i];
  plus.addEventListener("click", function () {
    plus.previousElementSibling.value++;
  });
}
//btn minus

let btnminus = document.getElementsByClassName("minus-btn");
for (let i = 0; i < btnminus.length; i++) {
  let minus = btnminus[i];
  minus.addEventListener("click", function () {
    if (minus.nextElementSibling.value > 1) {
      minus.nextElementSibling.value--;
      
    }
  });
}


//btn remove


// total
