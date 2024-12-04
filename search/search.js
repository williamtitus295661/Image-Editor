document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    searchImages(query);
});

function searchImages(query) {
    const apiKey = 
 'DiECU8REHbJErdkroDDlrGJCWP6DlpH5Qscl5102M8DH2gXlsrBMcu1H'
;
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=15`;

    fetch(url, {
        headers: {
            Authorization: apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const results = document.getElementById('search-results');
        results.innerHTML = '';
        data.photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.src.medium;
            results.appendChild(img);
        });
    })
    .catch(error => console.error('Error fetching images:', error));
}
