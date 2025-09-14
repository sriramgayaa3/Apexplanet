// Carousel Logic
let current = 1;

function updateImage() {
  document.getElementById("carousel-img").src = https://picsum.photos/500/300?random=${current};
}

function nextImage() {
  current++;
  updateImage();
}

function prevImage() {
  current = current > 1 ? current - 1 : 1;
  updateImage();
}

// API Logic
async function getJoke() {
  try {
    const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const data = await res.json();
    document.getElementById("joke").innerText = ${data.setup} - ${data.punchline};
  } catch (error) {
    document.getElementById("joke").innerText = "Failed to fetch joke.";
  }
}