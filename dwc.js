// Use the fetch method to get the JSON data
fetch('dwc.json')
 .then(response => response.json())
 .then(data => {
    // Store the data in local storage
    localStorage.setItem('departmentInfo', JSON.stringify(data));

    // Get the HTML element where we want to insert the data
    const departmentInfo = document.getElementById('departmentInfo');

    // Create a new <h2> element and set its text content to the department name
    const h2 = document.createElement('h2');
    h2.textContent = data.department.name;

    // Create a new <p> element and set its text content to the department description
    const p = document.createElement('p');
    p.textContent = data.department.description;

    // Create a new <span> element and set its text content to the department citation
    const span = document.createElement('span');
    span.classList.add('citation');
    span.textContent = `(${data.department.citation})`;

    // Append the <h2>, <p>, and <span> elements to the HTML element
    departmentInfo.appendChild(h2);
    departmentInfo.appendChild(p);
    departmentInfo.appendChild(span);
  })
 .catch(error => {
    console.error('Error fetching data:', error);

    // If there is an error fetching the data, try to retrieve it from local storage
    const data = JSON.parse(localStorage.getItem('departmentInfo'));
    if (data) {
      const departmentInfo = document.getElementById('departmentInfo');
      departmentInfo.innerHTML = `
        <h2>${data.department.name}</h2>
        <p>${data.department.description}</p>
        <p><span class="citation">(${data.department.citation})</span></p>
      `;
    }
  });