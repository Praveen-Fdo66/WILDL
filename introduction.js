// Fetch JSON data
fetch('introduction.json')
  .then(response => response.json())
  .then(data => {
    // Accessing intro-content
    const introContent = data['intro-content'];
    const introContent2 = data['intro-content2'];
    const introContent3 = data['intro-content3'];

    // Accessing intro-left and intro-right
    const introLeft = introContent.row.intro['intro-left'];
    const introRight = introContent.row.intro['intro-right'];

    // Accessing headings and paragraphs
    const h2 = introLeft.h2;
    const p1 = introLeft.p1;
    const p2 = introLeft.p2;
    const p3 = introLeft.p3;
    const p4 = introLeft.p4;
    const p5 = introLeft.p5;
    const p6 = introLeft.p6;

    // Populate HTML elements
    document.getElementById('h2').textContent = h2;
    document.getElementById('p1').textContent = p1;
    document.getElementById('p2').textContent = p2;
    document.getElementById('p3').textContent = p3;
    document.getElementById('p4').textContent = p4;
    document.getElementById('p5').textContent = p5;
    document.getElementById('p6').textContent = p6;
    

  })
  .catch(error => console.error('Error fetching data:', error));

    // Store JSON data in localStorage
    localStorage.setItem('introContent', JSON.stringify(introContent));
    localStorage.setItem('introContent2', JSON.stringify(introContent2));
    localStorage.setItem('introContent3', JSON.stringify(introContent3));
