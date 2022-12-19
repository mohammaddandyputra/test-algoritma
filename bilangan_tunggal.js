function BilanganTunggal(array){
    let arrData = []
    let arrDataCount = 0
    for(let i = 0; i < array.length; i++) {
        let found = false

        for(let j = 0; j < arrData.length; j++) {
            if(array[i] === arrData[j]){
                found = true
            }
        }

        if(!found) {
            arrData.push(array[i])

            let total = 0
            for(let k = 0; k < array.length; k++) {
                if(array[i] === array[k]) {
                    total++
                }
            }

            arrDataCount += `Angka ${array[i]} ditemukan sebanyak ${total} \n`
        }
    }

    console.log('Angka => ', arrData)
    console.log('Total angka => ', arrData.length)
    console.log(arrDataCount)
}

BilanganTunggal([1,1,1,1,2,3,2,3,4,5,4])