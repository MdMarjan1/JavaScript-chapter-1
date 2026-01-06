// practice
let products=[
    {id:1, name:"mi Phone", price: 19000},
    {id:2, name:"samsung phone", price: 25000},
    {id:3, name:"vivo for high", price:30000},
    {id:4, name:"realme phone", price:35000},
    {id:5, name:"infinix button phone", price:89000},
    {id:6, name:"apple Iphone", price:78000}
]

// for(let product of products){
//     console.log(product)
// }

function findPhone(products, surch){
    let matbox = []
    for(let product of products){
        if(product.name.toLowerCase().includes(surch)){
            matbox.push(product)
        }
    }
    return matbox
}
let socislWork = findPhone(products,'phone'.toLowerCase())
console.log(socislWork)