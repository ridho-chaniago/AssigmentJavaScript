

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
        imgElm.src = conData.fotoProfile

        const usernameElm = document.getElementById('username')
        usernameElm.innerHTML = conData.fullname
    } else {
        window.location.href = 'login.html'

    }

}
getDataUser()

// console.log(getDataUser)

// const dataUser = localStorage.getItem('user')
// console.log(dataUser)