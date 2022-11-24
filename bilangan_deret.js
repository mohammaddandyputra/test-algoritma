const BilanganDeret = (number, different) => {
    let row
    for(let i = 1; i <= number; i++) {
        row = 1 + (i - 1) * different
        console.log(row)
    }
}

BilanganDeret(5, 3)