function vowelAndConsonant(text){
    const vokal = ['a', 'i', 'u', 'e', 'o'];
    
    const lowerCase = text.replace(/ /g,'').toLowerCase();
    const arrString = lowerCase.split('');
    const sort = arrString.sort().reverse();
    
    const arrVowel = []
    const arrConsonant = []
    for(let i = 0; i < sort.length; i++) {
        if(vokal.includes(sort[i])){
            arrVowel.push(sort[i])
        }

        if(!vokal.includes(sort[i])){
            arrConsonant.push(sort[i])
        }
    }

    const vowel = arrVowel.join('')
    const consonant = arrConsonant.join('')

    console.log("VOWEL :")
    console.log(vowel)

    
    console.log("VOWEL :")
    console.log(consonant)
}

vowelAndConsonant("NGODING Melulu")