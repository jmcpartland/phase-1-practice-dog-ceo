// Challenge 1 ***************************************************



function renderOneDog(dog) {
    const imgContainer = document.querySelector('#dog-image-container');
    const dogImg = document.createElement("img");
    dogImg.src = dog;
    imgContainer.appendChild(dogImg);
};
    
    
function getDogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

        fetch(imgUrl)
            .then(response => response.json())
            .then(results => {
                results.message.forEach(dog => renderOneDog(dog))
            })

};

document.onload = getDogImages();


// Challenge 2 ***************************************************

function getDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    
    fetch(breedUrl)
        .then(response => response.json())
        .then(results => {
            for (const key in results.message) {
                breedList(key)
            }
        })
};

function breedList(breed) {
    const breeds = document.getElementById('dog-breeds')
    const li = document.createElement('li')
    li.innerText = breed;
    breeds.appendChild(li);
};

document.onload = getDogBreeds();