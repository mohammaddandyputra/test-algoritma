const Prime = (number) => {
    let factor;
    for (let i = 0; i < number; i++) {
      factor = 0;
      for (let j = 1; j <= number; j++) {
        if (i % j == 0) {
          factor++;
        }
      }

      if (factor == 2 && i !== 2) console.log(i);
    }
}

Prime(30)