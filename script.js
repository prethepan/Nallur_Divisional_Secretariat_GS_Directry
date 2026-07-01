// 1. Fetch the JSON data from your file
let directoryData = [];

fetch('./gs_directory_backup.json')
    .then(response => response.json())
    .then(data => {
        directoryData = data; // Saves the data for searching
        console.log("Data loaded successfully!");
    })
    .catch(error => console.error("Error loading JSON:", error));

// 2. The search function
function performSearch() {
    const searchInput = document.getElementById('searchBox').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    
    // Clear previous results
    resultsContainer.innerHTML = '';

    if (searchInput === '') return;

    // 3. Filter the JSON data (adjust 'name' or 'email' to match your JSON keys)
    const filteredResults = directoryData.filter(item => {
        // Change 'item.name' to whatever key is inside your JSON object
        return item.name && item.name.toLowerCase().includes(searchInput);
    });

    // 4. Display the results
    if (filteredResults.length === 0) {
        resultsContainer.innerHTML = '<li>No results found</li>';
    } else {
        filteredResults.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name}`; // Adjust this to display what you want
            resultsContainer.appendChild(li);
        });
    }
}