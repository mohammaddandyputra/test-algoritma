const FizzBuzz = (number) => {
    let i = 1
    while(i <= number) {
        if(i%3 == 0 && i%5 == 0) {
            console.log("Fizz Buzz")
        } else if (i%3 == 0) {
            console.log("Fizz")
        } else if (i%5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
        i++
    }
}

FizzBuzz(30)