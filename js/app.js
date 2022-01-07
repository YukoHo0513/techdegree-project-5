baguetteBox.run('.gallery', {
    captions : true,
});


const input = document.getElementById("search")
const search = input.addEventListener("keyup", getValue);
function getValue() {
    const lCase = input.value.toLowerCase();
    console.log(lCase);

    let arr = document.getElementsByClassName("g-item")
    for (let i = 0; i < arr.length; i++) {
        const caption = arr[i].getAttribute('data-caption');
        const lCaption = caption.toLowerCase();

        let result = lCaption.includes(lCase);

        let aTag = arr[i];
        if (result) {
            aTag.style.display = "block";
        } else {
            aTag.style.display = "none";
        }
    }
}




