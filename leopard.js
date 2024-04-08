// Fetch JSON data
fetch('leopard.json')
    .then(response => response.json())
    .then(data => {
        const leopardInfo = document.getElementById('leopardInfo');
        // Store fetched data in local storage
        localStorage.setItem('leopardData', JSON.stringify(data));
        
        // Clear existing content
        leopardInfo.innerHTML = '';

        // Iterate through each section
        data.forEach(section => {
            // Create a div for each section
            const sectionDiv = document.createElement('div');
            sectionDiv.classList.add('section');

            // Add title of the section
            const sectionTitle = document.createElement('h2');
            sectionTitle.textContent = section.section;
            sectionDiv.appendChild(sectionTitle);

            // Iterate through subsections of each section
            section.sections.forEach(subsection => {
                // Create a div for each subsection
                const subsectionDiv = document.createElement('div');
                subsectionDiv.classList.add('subsection');

                // Add title of the subsection
                const subsectionTitle = document.createElement('h3');
                subsectionTitle.textContent = subsection.title;
                subsectionDiv.appendChild(subsectionTitle);

                // Add description of the subsection
                const subsectionDescription = document.createElement('p');
                subsectionDescription.textContent = subsection.description;
                subsectionDiv.appendChild(subsectionDescription);

                // Append the subsection div to the section div
                sectionDiv.appendChild(subsectionDiv);
            });

            // Append the section div to the leopardInfo div
            leopardInfo.appendChild(sectionDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const leopardInfo = document.getElementById('leopardInfo');
        leopardInfo.innerHTML = `
            <h1>Error!</h1>
            <p>Failed to fetch data. Please try again later.</p>
        `;
    });