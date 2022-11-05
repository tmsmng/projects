


let countHome = 0
let countGuest = 0

let countHomeEl = document.getElementById("countHome-el")
let countGuestEl = document.getElementById("countGuest-el")

/* -------------------------- HOME -------------------------- */
function homePlusOne() {
    countHome += 1
    countHomeEl.textContent = countHome
}

function homePlusTwo() {
    countHome += 2
    countHomeEl.textContent = countHome
}

function homePlusThree() {
    countHome += 3
    countHomeEl.textContent = countHome
}

/* -------------------------- GUEST -------------------------- */

function guestPlusOne() {
    countGuest += 1
    countGuestEl.textContent = countGuest

}

function guestPlusTwo() {
    countGuest += 2
    countGuestEl.textContent = countGuest

}

function guestPlusThree() {
    countGuest += 3
    countGuestEl.textContent = countGuest

}

function newGame() {
    countHome = 0
    countGuest = 0
    countHomeEl.textContent = 0
    countGuestEl.textContent = 0
}