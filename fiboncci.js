function Fiboncci(number) {
    const number_fiboncci = []
    let n1 = 0;
    let n2 = 1;

    for(let i = 0; i < number; i++) {
        if(i === 0 || i === 1) {
            number_fiboncci.push(i)
        } else {
            let total = n1 + n2
            number_fiboncci.push(total)
            n1 = n2
            n2 = total
        }
    }

    console.log(number_fiboncci)
}

Fiboncci(10)