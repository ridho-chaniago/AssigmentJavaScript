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

// console.log(getDataUser)

// const dataUser = localStorage.getItem('user')
// console.log(dataUser)