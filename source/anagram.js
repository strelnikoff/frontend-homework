function to_parts(word) {
    return word.toLowerCase().split('').sort().join('');
}

function anagram(input) {
    try {
        var words_dict = {};
        for (var i in input) {
            var word = input[i].toLowerCase();
            var word_parts = to_parts(word);
            if (word_parts in words_dict && words_dict[word_parts].indexOf(word) === -1) {
                words_dict[word_parts].push(word);
            } else {
                words_dict[word_parts] = [word];
            }
        }
    }catch (err){
        return []
    }

    var output = [];
    for (var i in words_dict) {
        if (words_dict[i].length > 1) output.push(words_dict[i].sort());
    }
    return output.sort()
}

