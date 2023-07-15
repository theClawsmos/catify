// Replace all images on the page with cat pictures
const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].src = "https://static.wikia.nocookie.net/beluga/images/7/7b/Heckercat.jpg/revision/latest/thumbnail/width/360/height/360?cb=20230226064327";
}

// Play cat sounds in the background
const audio = new Audio("https://cdn.videvo.net/videvo_files/audio/premium/audio0060/watermarked/CatMeowsPurring%20PE916904_preview.mp3");
audio.loop = true;
audio.play();
