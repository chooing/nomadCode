const images = ["bg-0", "bg-1", "bg-2", "bg-3", "bg-4", "bg-5"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImg = document.querySelector("#textContainer");

bgImg.classList.remove();
bgImg.classList.add(chosenImage);

// bgImg.src = `img/${chosenImage}`;
// document.body.append(bgImg);
