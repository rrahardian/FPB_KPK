let arrayA = []
let arrayB = []
let arrayGabung = []
let arrayKPKA = []
let arrayKPKB = []
let arrayKPKGab = []

let hitung = (a, b) => {
    for (i=1; i<=a; i++) {
        if (a%i == 0) {
            arrayA.push(i)
        }
    }
    for (i=1; i<=b; i++) {
        if (b%i == 0) {
            arrayB.push(i)
        }
    }
    for (i=0; i<arrayA.length; i++) {
        if (arrayA.includes(arrayB[i])) {
            arrayGabung.push(arrayB[i])
        }
    }

    for (i=1; i<=a; i++) {
        if (a<10) {
            for (i=1; i<=100; i++) {
                arrayKPKA.push(a*i)
            }
        } else {
            arrayKPKA.push(a*i)
        }
    }
    for (i=1; i<=b; i++) {
        if (b<10) {
            for (i=1; i<=100; i++) {
                arrayKPKB.push(b*i)
            }
        } else {
            arrayKPKB.push(b*i)
        }
    }
    for (i=0; i<arrayKPKA.length; i++) {
        if (arrayKPKA.includes(arrayKPKB[i])) {
            arrayKPKGab.push(arrayKPKB[i])
        }
    }

    console.log(`FPB ${a} & ${b} = ${arrayGabung[arrayGabung.length-1]}
KPK ${a} & ${b} = ${arrayKPKGab[0]}`)

}

hitung(15, 10)