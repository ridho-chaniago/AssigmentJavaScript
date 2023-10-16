import { dataUser } from './dataUser.js';



// tombol login dan fungsinya 
const btnLog= document.getElementById('btnLog')
console.log(btnLog)
btnLog.addEventListener('click', ()=>{
   login()
})
function login(){
    const username=document.getElementById('username').value
    console.log(username)
    const pass=document.getElementById('pass').value
    console.log(pass)

    // mencari data dari file userdata.js 
    const user = dataUser.find(person=>
        person.username==username && 
        person.pass==pass)
        console.log(user)
        
    if (user) {
        // localStorage digunakan untuk menyimpan ke local browser
        localStorage.setItem('user', JSON.stringify(user))
        const local=localStorage.getItem('user')
        console.log(local +'ini get item')

        window.location.href = './home.html'
    } else {
        alert('Username dan Password Tidak Sesuai')
    }
}


// function masuk(){
//     let newUser = document.getElementById('username').value
//     let newPass = document.getElementById('pass').value
    
//      dataUser.push(`username : ${newUser}`)
//      dataUser.push(newPass)
//      console.log(dataUser)

// }

// const btnSign= document.getElementById('btnUp');console.log(btnSign)
// btnSign.addEventListener('click', ()=>{
//     masuk()
//     console.log('triger')
// })

