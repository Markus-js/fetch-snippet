const cardContainer = document.getElementById("card-container");
const Name = document.getElementById("name");
const Age = document.getElementById("age");
const imgSrc = document.getElementById("image");

getData();

async function getData() {
  const apiUrl = "https://json-server-rest-grud.herokuapp.com/db";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    // RENDER HTML
    renderSingeElement(data.user);
    renderMultipleElements(data.users);
    //
  } catch (error) {
    console.log("whoops, something went wrong!", error);
  }
}

// Singe
function renderSingeElement(data) {
  Name.innerHTML = data.name;
  Age.innerHTML = data.age;
  imgSrc.setAttribute("src", data.img);
}

// let amount = 3;

// Multiple
function renderMultipleElements(data) {
  let cardEl = "";

  data.forEach((user, idx) => {
    // if (idx >= amount) {
    // } else if (idx === 0) {
    //   cardEl += `
    //     <div class="first-card card" id="card">
    //        <div class="img-wrapper" >
    //        <img class="image" src="${user.img}" alt="${user.name}" />
    //        </div>
    //        <h3>${user.name}</h3>
    //        <p>Age: ${user.age}</p>
    //     </div>`;
    // } else {
    cardEl += `
        <div class=" card" id="card">
           <div class="img-wrapper" >
           <img class="image" src="${user.img}" alt="${user.name}" />
           </div>
           <h3>${user.name}</h3>
           <p>Age: ${user.age}</p>
        </div>`;
    // }
  });
  cardContainer.innerHTML = cardEl;
}
