let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
console.log(homeScore)
console.log(guestScore)
let homecount =0;
function increment_home(points){
    homecount=homecount+points;
    homeScore.textContent=homecount
}

let guestcount=0;
function increment_guest(points){
    guestcount=guestcount+points;
    guestScore.textContent=guestcount
}
function reset_score(){
    homecount=0;
    guestcount=0;
    homeScore.textContent=homecount
    guestScore.textContent=guestcount

}