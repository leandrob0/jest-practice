function cipher(text, key) {
    let final = "";

    for(let  i = 0; i < text.length; i++) {
        
        if(text[i] !== " ") {
            let letter = returnLetter(text[i], key);

            final += (text[i] == text[i].toLowerCase()) ? letter : letter.toUpperCase();

        } else {
            final += " ";
        }
    }

    return final;
}

function returnLetter(start ,key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let index = alphabet.indexOf(start.toLowerCase());
    let counter = 0;
    let letter;

    while(counter < key) {
        index++;
        if(index == alphabet.length) { index = 0 }
        counter++;
    }

    return alphabet[index];
}

module.exports = cipher;