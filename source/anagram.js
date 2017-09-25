function anagram(input) {

    if (!Array.isArray(input)){
        return [];
    }

    const words_dict = {};

    input.forEach((word) => {
        word = word.toLowerCase();
        const word_parts = word.toLowerCase().split('').sort().join('');

        if (!(word_parts in words_dict)){
            words_dict[word_parts] = {}
        }

        words_dict[word_parts][word] = true;
    });

    const output = [];

    Object.keys(words_dict).forEach((word_parts) => {
        const tmp = Object.keys(words_dict[word_parts]).sort();

        if (tmp.length > 1){
            output.push(tmp);
        }

    });

    return output.sort()
}

