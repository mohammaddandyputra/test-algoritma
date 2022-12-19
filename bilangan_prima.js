const Prime = (number) => {
    const number_prime = []
    for(let i = 1; i <= number; i++) {
      let bill = 0
      for(let a = 1; a <= i; a++) {
        if(i%a == 0) {
          bill = bill + 1
        }
      }

      if(bill == 2) {
        number_prime.push(i)
      }
    }

    console.log(number_prime)
}

Prime(30)