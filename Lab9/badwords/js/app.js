let badWord = ["clear", "water", "tires"];

let count;
function findID () {
    count = 0;
    let text = " ";
    text = document.getElementById("sent").value;
    let words = [];
    words = text.split (" ");

    for (let i=0; i < badWord.length; i++) {
        for (let j=0; j < words.length; j++) {
            if (words[j] == badWord[i]) {
                count ++;
            }
        }
    }
    if (count == 0) {
        document.querySelector(".message").innerHTML = "no bad word found";

    }else {
        document.querySelector(".message").innerHTML = "bad word found <br> Total:  " + count;
    }
    document.getElementById("sent").value = " ";
}