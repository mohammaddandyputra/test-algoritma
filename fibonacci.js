function Fibonacci(number) {
    const number_fibonacci = []
    let n1 = 0;
    let n2 = 1;

    for(let i = 0; i < number; i++) {
        if(i === 0 || i === 1) {
            number_fibonacci.push(i)
        } else {
            let total = n1 + n2
            number_fibonacci.push(total)
            n1 = n2
            n2 = total
        }
    }

    console.log(number_fibonacci)
}

Fibonacci(10)