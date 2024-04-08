// Function to extract data from HTML elements
function extractDataFromElements() {
    const animalData = [];
  
    // Loop through each animal section by its ID
    for (let i = 1; i <= 13; i++) {
      const section = document.getElementById(`animal-${i}`);
      if (!section) continue; // Skip if section not found
  
      const name = section.querySelector('h1').textContent.trim();
      const description = section.querySelector('p').textContent.trim();
      const link = section.querySelector('a').getAttribute('href');
      const image = section.querySelector('img').getAttribute('src');
  
      animalData.push({ name, description, link, image });
    }
  
    return animalData;
  }
  
  // Function to fetch data and store in local storage
  async function fetchDataAndStore() {
    try {
      const animalData = extractDataFromElements();
      console.log('Animal Data:', animalData);
  
      // Store the data in local storage
      localStorage.setItem('animalData', JSON.stringify(animalData));
      console.log('Data stored in local storage');
    } catch (error) {
      console.error('Error fetching and storing data:', error);
    }
  }
  
  // Call the fetchDataAndStore function to initiate the process
  fetchDataAndStore();
  