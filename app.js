const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(event) {
    event.preventDefault(); // this stops the default form behavior of reloading the page after submission
    const searchTerm = form.elements.query.value; // extract search term from the form
    const config = { params: { q: searchTerm} } // query string object with the name params, can have multiple params
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=`, config); // passed in params object
    makeImages(res.data)
    form.elements.query.value = '';
})

// function creates a bunch of images and appends them to the page
const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image) {
            const img = document.createElement('IMG');
        img.src = result.show.image.medium; 
        document.body.append(img);
        }
    }
}