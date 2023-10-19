export
let price = document.getElementById('price')
let cost = document.getElementById('cost')
let quantity = document.getElementById('quantity')
function changeQuantity(){
    if(quantity.value>=5){
        cost.value=0
    }else{
        cost.value=10000
    }
}