
const Palindrome = (text) => {
    for(let i = 0; i < text.length; i++){
        // console.log(i + " : " + (text.length - i - 1));
        let firstText = i
        let lastText = text.length - i - 1
        
        if (text.charAt(firstText) !== text.charAt(lastText)){
            return false
        }

        return true
    }
}

console.log(Palindrome("katak"))
