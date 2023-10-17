import { dataUser } from './dataUser.js';



// tombol login dan fungsinya 
const btnLog= document.getElementById('btnLog')
console.log(btnLog)
btnLog.addEventListener('click', ()=>{
   login()
})
function login(){
    const username=document.getElementById('username').value
    const pass=document.getElementById('pass').value

    // mencari data dari file userdata.js 
    const user = dataUser.find(person=>
        person.username==username && 
        person.pass==pass)
        console.log(user)
    if (user) {
       
        // localStorage digunakan untuk menyimpan ke local browser
        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = './home.html'
    }else if(user!=true){
        const findUserLocal= localStorage.getItem('user')
        const userLocal = JSON.parse(findUserLocal)
        const username=document.getElementById('username').value
        const pass=document.getElementById('pass').value
        const log = userLocal.username==username && userLocal.pass==pass
        console.log(log)
        // alert('Username salah atau anda belum memiliki akun, silahkan lakukan pendaftaran')
        if(log){
            window.location.href = './home.html'
            
        }else{
            alert('Username dan Password Tidak Sesuai')
    
        }

    }
    else{
        alert('Username dan Password Tidak Sesuai')

    }
}


function signUp(){
    // function hapus(){
    //     localStorage.clear()
    // }
    // hapus()    
    const username=document.getElementById('username').value
    const usernamee=document.getElementById('username')
    
    const pass=document.getElementById('pass').value
    // mencari data dari file userdata.js 
    const signUpUser = {
        username:username,
        pass:pass
    }
    console.log(signUpUser)
    
    const findUserLocal = localStorage.getItem('user')
    console.log(findUserLocal)
    const userLocal= JSON.parse(findUserLocal)
    if(findUserLocal==null){
        console.log('user tidak ditemukan')
        localStorage.setItem('user', JSON.stringify(signUpUser));
        console.log('sedang membuat user baru')
    }else{
        
            const newUser = signUpUser.username==userLocal.username
            if(newUser){
                alert('username terdaftar')
            }else{
                localStorage.setItem('user',JSON.stringify(signUpUser))
                alert('Pendaftaran berhasil, silahkan melanjutkan login')
            }
    }
}

const btnUp= document.getElementById('btnUp')

btnUp.addEventListener('click', ()=>{
   signUp()
})
