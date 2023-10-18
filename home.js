function getDataUser() {
    //1.get data localstorage
    //2.Convert data ke object
    //3. display ke dom

    const dataUser = localStorage.getItem('user')
    console.log(dataUser)

    if (dataUser) {
        const conData = JSON.parse(dataUser)
        console.log(conData)
        const imgElm = document.getElementById('img_user')
        imgElm.src = 'https://th.bing.com/th/id/R.f29406735baf0861647a78ae9c4bf5af?rik=GKTBhov2iZge9Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_206976.png&ehk=gCH45Zmryw3yqyqG%2fhd8WDQ53zwYfmC8K9OIkNHP%2fNU%3d&risl=&pid=ImgRaw&r=0'

        const usernameElm = document.getElementById('username')
        usernameElm.innerHTML = conData.username
    } else {
        window.location.href = './index.html'

    }

}
getDataUser()


function onLogOut(){
    // localStorage.removeItem('user')
    window.location.href = './index.html'
}

function input(){
    const product1 = document.getElementById('product1').value
    const product2 = document.getElementById('product2').value
        const olshop =document.getElementById('olshop').value
        console.log(olshop)
        const ultah =document.getElementById('ultah')
        const aqiqah =document.getElementById('Aqiqah')
    const price = document.getElementById('price').value
    const quantity = document.getElementById('quantity').value
    const cost = document.getElementById('cost').value
    const amount = parseInt(price)*parseInt(quantity)+parseInt(cost)
    console.log(amount)
    const table= document.getElementById('tableList')
    const row=table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const prodList= {
        product1 : product1,
        product2: product2,
        price : price,
        quantity : quantity,
        cost : cost,
        amount : amount
    }
    cell1.innerHTML=new Date()
    if(product1){
        cell2.innerHTML=prodList.product1
    }else{
        cell2.innerHTML=prodList.product2
    }
    // cell2.innerHTML=prodList.product2
    cell3.innerHTML=prodList.price
    cell4.innerHTML=prodList.quantity
    cell5.innerHTML=prodList.cost
    cell6.innerHTML=amount
    console.log(prodList)
}
function clear(){
    document.getElementById('product1').value=""
    document.getElementById('product2').value=""
    document.getElementById('price').value=""
    document.getElementById('quantity').value=""
    document.getElementById('cost').value=""
    document.getElementById('amount').value=""
}
const btnSubmit = document.getElementById('btnSubmit')
btnSubmit.addEventListener('click', ()=> {input(), clear()})
const btnCancel = document.getElementById('btnCancel') 
btnCancel.addEventListener('click', ()=>{clear()})