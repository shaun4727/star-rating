const ratingInputs = document.querySelectorAll('input[name="rating"]');
const ratingValue = document.getElementById('ratingValue');

ratingInputs.forEach(input => {
    input.addEventListener('change', function () {
        const selectedRating = this.value;
        ratingValue.innerText = selectedRating;
    });
});
