const dropdown = document.querySelector("select");
const circlesContainer = document.querySelector(".circles");

dropdown.onchange = function () {
    console.log(event.target.value);

    const selectedValue = this.value;

    // circlesContainer.innerHTML = `<div class="spinner"></div>`;

    setTimeout(function () {
        circlesContainer.innerHTML = "";

        for (let i = 1; i <= selectedValue; i++) {
            let className = "";

            if (i % 2 === 0) {
                className = "highlight";
            }

            circlesContainer.innerHTML += `<div class="circle ${className}">${i}</div>`;
        }
    }, 1000);
};
