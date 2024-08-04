// 1.Տրված է իրական թվերի հաջորդականություն (Մասիվ): Արտածել այդ հաջորդականության

// ա) այն տարրերի քանակը, որոնք փոքր են իրենց կարգահամարի քառակուսուց,

let square = [14, 24, 98, 5, 66, 100, 5, 84, 2]
let squareCount = 0

for(let i = 1; i <= square.length -1; i++){
    if((i * i) > square[i]){
        squareCount++
    }
}

console.log(squareCount)

console.log('-----------------------------------------------------------------------')

// բ) այն տարրերի քանակը, որոնք փոքր են իրենց ձախ և աջ հարևանների կիսագումարից,

let halfPrice = [10, 20, 6, 89, 72, 56, 24, 77]
let halfPriceCount = 0


for(let i = 1; i < halfPrice.length - 2; i++){
    if(((halfPrice[i - 1] + halfPrice[i + 1]) / 2) > halfPrice[i]){
        halfPriceCount++
    }
}

console.log(halfPriceCount)

console.log('-----------------------------------------------------------------------')

// գ) մեծագույն տարրը և նրա կարգահամարը,

let greatestElemArr = [44, 89, 63, 87, 10, 23, 91, 89]
let greatestElem = greatestElemArr[0]
let greatestElemInd = 0

for(let i = 0; i < greatestElemArr.length; i++){
    if(greatestElemArr[i] > greatestElem){
        greatestElem = greatestElemArr[i] 
        greatestElemInd = i
    }
}

console.log(greatestElem)
console.log(greatestElemInd)

console.log('-----------------------------------------------------------------------')

// դ) մեծագույն և փոքրագույն տարրերի տարբերությունը,

let largAndSmall = [45, 89, 636, 782, 87, 290, 22, 450, 453]

let maxElem = largAndSmall[0]
let minElem = largAndSmall[0]

for(let i = 0; i < largAndSmall.length -1; i++){
    if(largAndSmall[i] > maxElem){
        maxElem = largAndSmall[i]
    }
    if(largAndSmall[i] < minElem){
        minElem = largAndSmall[i]
    }
}

console.log(maxElem - minElem)

console.log('-----------------------------------------------------------------------')

// ե) մեծագույն և մեծությամբ երկրորդ տարրերը,

let arr = [20, 30, 100, 40, 50, 60, 70,  10,  80, 90,]

let max = arr[0]
let min = arr[0]


for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
        maxInd = i
    }
    if(arr[i] < min){
        min = arr[i]
        minInd = i
    }
}

console.log(max, min)
    
console.log('-----------------------------------------------------------------------')

// զ) դրական տարրերից փոքրագույնի արժեքը (եթե դրական տարր չկա, արտածել համապատասխան հաղորդագրություն):

let positiveElem = [33, 29, -77, 89, 896, 41, -90]

let minPositiveElem = positiveElem[0]
let positiveElemCount = 0

for(let i = 0; i < positiveElem.length; i++){
    if(positiveElem[i] < 0){
        positiveElemCount++
    }
}

if(positiveElemCount !== positiveElem.length){
    for(let i = 0; i < positiveElem.length; i++){
        if(minPositiveElem > positiveElem[i] && positiveElem[i] > 0){
            minPositiveElem = positiveElem[i]
        }
    }
    console.log(minPositiveElem)
}else{
    console.log('there are negative elements')
}

console.log('-----------------------------------------------------------------------')

// 1-1000 թվերի շարքում հաշվել բոլոր այն թվերի քանակը, որոնք պարունակում են 3 թվանշանը:

let count = 0

    for(let i = 0; i < 1000; i++){
        if(i.toString().includes(3)){
            count++
        }
    }

console.log(count)

console.log('-----------------------------------------------------------------------')
