// Current date and date
/*const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

const time = `${hours}:${minutes}:${seconds}`;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = days[now.getDay()];
console.log(`Today is: ${day}`);
*/

// calculate multiplication and division
/*const first = document.getElementById("firstNum");
const second = document.getElementById("secondNum");

const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const clearBtn = document.getElementById("clear");

const finalOutput = document.getElementById("finalAns");

multiplyBtn.addEventListener("click", () => {
  const num1 = first.value.trim();
  const num2 = second.value.trim();
  if (num1 === "" || num2 === "") {
    finalOutput.innerText = "Enter a valid number";
    timeOut();
    return;
  }
  const result = Number(num1) * Number(num2);
  finalOutput.innerText = result;
});

divideBtn.addEventListener("click", () => {
  const num1 = first.value.trim();
  const num2 = second.value.trim();
  if (num1 === "" || num2 === "") {
    finalOutput.innerText = "Enter a valid number";
    timeOut();
    return;
  } else if (Number(num2) === 0) {
    finalOutput.innerText = "Cannot divide by 0";
    timeOut();
    return;
  }
  const result = Number(num1) / Number(num2);
  finalOutput.innerText = result;
});

clearBtn.addEventListener("click", () => {
  if (first.value === "" || second.value === "") {
    finalOutput.innerText = "Nothing to clear";
    timeOut();
    return;
  } else {
    first.value = "";
    second.value = "";
    finalOutput.innerText = "Operations are cleared";
    timeOut();
  }
});

const timeOut = () => {
  setTimeout(() => {
    finalOutput.innerText = "";
  }, 1000);
};
*/

// Guess the number game
/*
let n = Math.floor(Math.random() * 100);
n = Number(n);
let attempts = 0;
let score;
let guess;
while (true) {
  guess = prompt("Enter a random number");
  if (guess === null || guess === "") {
    console.log("Game over. No guess was made");
    break;
  }
  guess = Number(guess);
  attempts++;
  if (guess < n) {
    console.log("Less then the original number");
  } else if (guess > n) {
    console.log("Greater then the original number");
  } else {
    score = 100 - attempts;
    console.log(
      `The guess is correct. ${guess} is equals to ${n}. Your score is ${score}`
    );
    break;
  }
}
*/

// const fileName = "system.php";
// console.log(fileName.split(".").pop());

// Simple accordian
/*
const accordionItems = document.querySelectorAll(".accordion-item");
const header = document.querySelectorAll(".accordion-header");

header.forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;

    accordionItems.forEach((accordian) => {
      if (accordian !== parent) {
        accordian.classList.remove("open");
      }
    });

    parent.classList.toggle("open");
  });
});

*/

// let inputN = prompt("Enter a number");
// while (inputN != null) {
//   inputN = Number.parseInt(inputN);
//   if (inputN > 4) {
//     window.location.href = "https://google.com";
//     break;
//   } else {
//     console.log("Enter a number again");
//     inputN = prompt("Enter a number");
//   }
// }

// Snake, Water, Gun Game

/*const demo = document.getElementById("demo");

let user = prompt("Enter Snake, Water or Gun");
let cpu = Math.floor(Math.random() * 3);
let cpuChoice = ["Snake", "Water", "Gun"][cpu];

const match = (cpuChoice, user) => {
  if (cpuChoice === user) {
    return "Nothing";
  } else if (cpuChoice === "Snake" && user === "Water") {
    return "cpuChoice";
  } else if (cpuChoice === "Water" && user === "Snake") {
    return "user";
  } else if (cpuChoice === "Gun" && user === "Snake") {
    return "cpuChoice";
  } else if (cpuChoice === "Snake" && user === "Gun") {
    return "user";
  } else if (cpuChoice === "Water" && user === "Gun") {
    return "user";
  } else if (cpuChoice === "Gun" && user === "Water") {
    return "cpuUser";
  }
};
let result = match(cpuChoice, user);
demo.innerText = `CPU: ${cpuChoice} \n User: ${user} \n The winner is ${result}`;
*/

// Random Jokes using array
/*let randomjokes = Math.floor(Math.random() * 5);
let Jokes = [
  "Why don't skeletons fight each other? They don’t have the guts.",
  "What do you call fake spaghetti? An impasta.",
  "Why did the scarecrow win an award? He was outstanding in his field.",
  "What do you call cheese that isn’t yours? Nacho cheese.",
  "Why can’t your nose be 12 inches long? Because then it’d be a foot!",
][randomjokes];

const jks = document.getElementById("demo");
jks.innerText = Jokes;
*/

// Live time display
/*
const liveTime = document.getElementById("liveTime");
let timeV = () => {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let d = a.getDate();
  return `<span class="hours">${h}</span>:<span class="minutes">${m}</span>:<span class="seconds">${s}</span>:<span class="date">${d}</span>`;
};
setInterval(() => {
  liveTime.innerHTML = timeV();
}, 1000);
*/

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => {
//     console.log("Loaded script with SRC: " + src);
//     callback(null, src);
//   };
//   script.onerror = () => {
//     console.log("Script contains error: " + src);
//     callback(new Error("Src got some error"));
//   };
//   document.body.appendChild(script);
// }
// function hello(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("Hello World" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js",
//   hello
// );

/*fetch(
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3d74e504ee744809be00e6ab848eeefd"
)
  .then((response) => response.json())
  .then((data) => {
    const postContainer = document.getElementById("posts");
    let content = "";

    data.articles.slice(0, 25).forEach((post) => {
      let postImg = post.urlToImage
        ? post.urlToImage
        : "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720";
      let postDesc = post.description
        ? post.description
        : "Shigatsu wa kimi ni uso? Isogashi desu ka? Sukutte moratte ie desu ka?";
      let postCnt = post.content
        ? post.content.replace(/\[\+?\d+ chars\]/, "").trim()
        : "";
      content += `<div class="item">
    <img src="${postImg}" alt="" />   
    <div class="cntItem">
    <h2>${post.title}</h2>
    <h4>${postDesc}</h4>
    <p>${postCnt}</p>
    </div>
    </div>`;
    });
    postContainer.innerHTML = content;
  });
*/

// const formSubmit = document.getElementById("formSubmit");
// const usernameInput = document.getElementById("username");
// const passwordVal = document.getElementById("password");

// formSubmit.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const username = usernameInput.value;
//   const password = passwordVal.value;

//   sessionStorage.setItem("username", username);
//   sessionStorage.setItem("password", password);

//   window.location.href = "welcome.html";
// });

/*
let proMsg = document.getElementById("promsg");
let loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);

    script.onload = () => {
      setTimeout(() => {
        resolve(src);
      }, 3000);
    };

    script.onerror = () => {
      setTimeout(() => {
        reject(
          new Error(
            `The script didn't give a damn about promises or whatever that was. \n ${src}`
          )
        );
      }, 3000);
    };
  });
};

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
)
  .then((src) => {
    proMsg.innerText = `The script gave you face for the time being:\n ${src}`;
  })
  .catch((error) => {
    proMsg.innerText = error.message;
  });
*/

/*const fetchButton = document.getElementById("fetchWeather");
const weather = document.getElementById("weather");

const apiKey = "25d1d24ecde0ca93e92d0fccfc7a91d5";

async function fetchWeather() {
  const city = document.getElementById("city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.log("Error: ", error);
    weather.innerText = `Error: ${error.message}`;
  }
}

function displayWeather(data) {
  weather.innerHTML = `<h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>`;
}

fetchButton.addEventListener("click", fetchWeather);
*/

document.addEventListener("DOMContentLoaded", async () => {
  const searchInput = document.getElementById("search");
  const searchBtn = document.getElementById("searchBtn");
  const productContainer = document.getElementById("productList");
  const loader = document.getElementById("loader");
  const categoryButtons = document.getElementById("categoryButtons");
  let loaded = false;
  let data = [];

  // Fetch and Display the list on load
  async function fetchAndDisplayData() {
    try {
      loaded = true;
      loader.style.display = "block";
      let products = await fetch("https://fakestoreapi.com/products");
      data = await products.json();
      displayCategories(data);
      displayItems(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      productContainer.innerHTML =
        "<p>Failed to load products. Please try again.</p>";
    } finally {
      loaded = false;
      loader.style.display = "none";
    }
  }
  await fetchAndDisplayData();

  // Product categories
  function displayCategories(data) {
    const uniqueCategories = [
      ...new Set(data.map((product) => product.category)),
    ];
    uniqueCategories.forEach((category) => {
      const button = document.createElement("button");
      button.innerText = category;
      button.addEventListener("click", () => {
        filterByCategory(category);
      });
      categoryButtons.appendChild(button);
    });
  }

  // Product category filter
  function filterByCategory(category) {
    let filteredCatData;
    if (category === "All") {
      filteredCatData = data;
    } else {
      filteredCatData = data.filter((item) => item.category === category);
    }
    displayItems(filteredCatData);
  }

  // product list details
  function displayItems(data) {
    productContainer.innerHTML = "";
    data.forEach((item) => {
      const content = `<div class="Product">
      <img src="${item.image}" alt="" />
      <h3>${item.title}</h3>
      <span class="cat">${item.category}</span>
      <span className="price">$${item.price}</span>
      <p>${item.description}</p>
      <a href="product-details.html?id=${item.id}">View Product</a>
      </div>`;
      productContainer.innerHTML += content;
    });
  }

  // Search filter
  searchBtn.addEventListener("click", () => {
    try {
      let query = searchInput.value.toLocaleLowerCase();

      const filteredData = data.filter((item) => {
        return item.title.toLowerCase().includes(query);
      });
      if (filteredData.length > 0) {
        productContainer.classList.remove("no-result");
        displayItems(filteredData);
      } else {
        productContainer.classList.add("no-result");
        productContainer.innerHTML =
          "<strong>There's no product by that name dipshit!! try again.</strong>";
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      productContainer.innerHTML =
        "<p>Failed to load products. Please try again.</p>";
    }
  });
});
