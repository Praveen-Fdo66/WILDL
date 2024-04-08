// Fetch the JSON data
fetch('yala.json')
  .then(response => response.json())
  .then(data => {
    // Display data on the page
    data.forEach(section => {
      const sectionContainer = document.createElement('div');
      sectionContainer.classList.add('section');

      const titleElement = document.createElement('h2');
      titleElement.textContent = section.title;
      titleElement.classList.add('section-title'); // Add class for the title

      const contentElement = document.createElement('p');
      contentElement.textContent = section.content;
      contentElement.classList.add('section-content'); // Add class for the content

      const linkElement = document.createElement('a');
      linkElement.textContent = 'Read more';
      linkElement.href = section.link;
      linkElement.target = '_blank';
      linkElement.classList.add('read-more-link'); // Add class for the link

      sectionContainer.appendChild(titleElement);
      sectionContainer.appendChild(contentElement);
      sectionContainer.appendChild(linkElement);

      document.getElementById('yala-content').appendChild(sectionContainer);
    });

    // Store data in local storage
    localStorage.setItem('yalaData', JSON.stringify(data));
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
