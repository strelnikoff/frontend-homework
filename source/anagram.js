function anagram(input) {

    if (!Array.isArray(input)){
        return [];
    }

    let words_dict = {};

    input.forEach(function (word) {
        word = word.toLowerCase();
        let word_parts = word.toLowerCase().split('').sort().join('');

        if(!words_dict[word_parts]){
            words_dict[word_parts]={}
        }

        words_dict[word_parts][word]=true;
    });

    let output = [];

    Object.keys(words_dict).forEach(function (word_parts) {
        let tmp = Object.keys(words_dict[word_parts]).sort();

        if (tmp.length > 1){
            output.push(tmp);
        }

    });

    return output.sort()
}

