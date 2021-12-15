function capitalize(phrase) {
    if(!phrase) { return false } 

    return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

module.exports = capitalize;