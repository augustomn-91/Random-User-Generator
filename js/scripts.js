let details = document.querySelector(".details");
let img_container = document.querySelector(".img-container");
let random_button = document.getElementById("get-user-btn");

let url = "https://random-data-api.com/api/v2/users?response_type=json";

let get_user = () => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {

        img_container.innerHTML = `<img src="${data.avatar}">`;
        details.innerHTML = `
        <h2>${data.first_name} ${data.last_name}</h2>
        <h3>${data.employment.title}</h3>
        <h4><i class="fa-solid fa-location-dot"></i>${data.address.city}</h4>
        `;
    });
}

window.addEventListener('load', get_user);
random_button.addEventListener("click", get_user);
