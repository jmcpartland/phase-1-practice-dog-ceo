// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const imgContainer = document.querySelector('#dog-image-container');

// function renderOneDog(dog) {
//     const li = document.createElement('li');
//     li.className = 'dogs';
//     li.innerHTML = `<img src="${dog}">`
//     imgContainer.appendChild(li);
// };

function renderOneDog(dog) {
    const dogImg = document.createElement("img");
    dogImg.src = dog;
    // dogImg.innerHTML = `<img src="${dog}">`
    imgContainer.appendChild(dogImg);
};


function getDogImages() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(results => {
        // console.log(results.message);
        results.message.forEach(dog => renderOneDog(dog))
      });

};

getDogImages();
