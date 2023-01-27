
const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')




function gettime() {

    const now = new Date()
    const second = now.getSeconds()
    const minute = now.getMinutes()
    const hour = now.getHours()
    const time = 6

    seconds.style.transform = 'rotate(' + (second * time) + 'deg)'
    minutes.style.transform = 'rotate(' + (minute * time) + 'deg)'
    hours.style.transform = 'rotate(' + (hour * 30 + minute / 2) + 'deg)'


}
setInterval(gettime, 1000)


function showtime() {
    const time = new Date().toLocaleTimeString()
    document.getElementById('showtime').innerHTML = time

}
showtime()

setInterval(showtime, 1000)