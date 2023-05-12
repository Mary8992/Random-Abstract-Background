let container = document.querySelector(".container");

for (let i = 0; i <= 80; i++) {

    let blocks = document.createElement('div');
    blocks.classList.add('block');
    container.appendChild(blocks);
}