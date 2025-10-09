function reverseWords(sentence) {
    let result = "";
    let word = "";

    // Step 2: Loop through each character
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char !== " ") {
            // build the current word
            word += char;
        } else {
            // if we hit a space, reverse the word collected so far
            if (word.length > 0) {
                result += word.split("").reverse().join("");
                word = "";
            }
            // add the space as is
            result += " ";
        }
    }

    // Step 3: if sentence ends with a word, reverse it
    if (word.length > 0) {
        result += word.split("").reverse().join("");
    }

    return result;
}

//For the purpose of user debugging.
reverseWords("Hello World");

module.exports = reverseWords