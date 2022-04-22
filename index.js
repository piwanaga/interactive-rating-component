const rating = document.querySelector('.rating')
const thankyou = document.querySelector('.thank-you')
const userRatingSpan = document.querySelector('#user-rating')
const submitBtn = document.querySelector('button')
const numbers = document.querySelectorAll('.number')
let userRating = null

const handleNumberClick = (idx) => {
    numbers.forEach((number) => {
        if (+number.innerHTML === idx + 1) {
            number.classList.add('active-number')
            userRating = +number.innerHTML
        } else {
            number.classList.remove('active-number')
        }
    })
}

numbers.forEach((number, idx) => {
    number.addEventListener('click', () => handleNumberClick(idx))
})

submitBtn.addEventListener('click', () => {
    if (!userRating) {
        return
    }
    rating.classList.add('hidden')
    thankyou.classList.remove('hidden')
    userRatingSpan.innerHTML = userRating
})

