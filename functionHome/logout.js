function changeProduct(){
    const selectProduct = document.getElementById('product2').value
    console.log(selectProduct)
        const olshop =document.getElementById('olshop').value
        const ultah =document.getElementById('ultah').value
        const aqiqah =document.getElementById('aqiqah').value
    if (selectProduct==olshop){
        price.value=10000
        cost.value = 10000
       
        changeQuantity()
    }
}
console.log("babi")