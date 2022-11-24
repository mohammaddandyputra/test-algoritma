const GanjilGenap = (number) => {
    let arrGanjil = [], arrGenap = []

    for(let i = 1; i <= number; i++) {
        if(i%2 !== 0) {
            arrGanjil.push(i)
        } 
        else if (i%2 == 0) {
            arrGenap.push(i)
        }
    }

    console.log("Bilangan ganjil = ", arrGanjil)
    console.log("Bilangan genap = ", arrGenap)
}

GanjilGenap(10)