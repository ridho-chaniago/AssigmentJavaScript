import { dataUser } from './dataUser.js';



// tombol login dan fungsinya 
const btnLog= document.getElementById('btnLog')

btnLog.addEventListener('click', ()=>{
   login(), clear()
})
function login(){
    const username=document.getElementById('username').value
    const pass=document.getElementById('pass').value
    
    // mencari data dari file userdata.js 
    const user = dataUser.find(person=>
        person.username==username && 
        person.pass==pass)
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
function clear(){
    document.getElementById('username').value=""
    document.getElementById('pass').value=""
}

// memunculkan tombol signUp
const btnBackLog = document.getElementById('btnBackLog')
const btnChangeP = document.getElementById('btnChangeP')
const tUp= document.getElementById('tUp')
const tLog= document.getElementById('tLog')
const btnChange= document.getElementById('btnChange')
function btnChangee(){
    btnBackLog.style.display="block"
    btnChangeP.style.display="none"
    btnUp.style.display="block"
    btnLog.style.display="none"
    tLog.style.display="none"
    tUp.style.display='flex'
}
function btnBackLogg(){
    btnBackLog.style.display="none"
    btnChangeP.style.display="block"
    btnUp.style.display="none"
    btnLog.style.display="block"
    tLog.style.display="flex"
    tUp.style.display='none'
}
btnChange.addEventListener('click', ()=>btnChangee())
btnBackLog.addEventListener('click', ()=>btnBackLogg())

// fungsi tombol sigup 
function signUp(){
    const username=document.getElementById('username').value
    const usernamee=document.getElementById('username')
    
    const pass=document.getElementById('pass').value
    if(username=="" || pass ==""){
        alert('silahkan input username dan password')
    }else{
    // mencari data dari file userdata.js 
    const signUpUser = {
        username:username,
        pass:pass
    }
    const findUserLocal = localStorage.getItem('user')
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
}
// tombol signUp
const btnUp= document.getElementById('btnUp')
btnUp.addEventListener('click', ()=>{
   signUp() ,clear()
})
clear()
