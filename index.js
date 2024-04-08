

        fetch('index.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Update hero section
                const heroSection = document.getElementById('heroSection');
                heroSection.innerHTML = `
                    <h1>${data[0].heroText}</h1>
                    <p>${data[0].heroDescription}</p>
                    <a href = "introduction.html" class="hero-btn anim"${data[0].btnUrl}">LEARN MORE</a>
                    <a href = "login.html" class="hero-btn anim"${data[0].btnUrl}">LOGIN</a>
                `;

// Update content section
const contentSection = document.getElementById('sub-content');
data.forEach((item, index) => {
    if (index !== 0) {
        contentSection.innerHTML += `
            <div class="elephant-col" id="sub-content">
                <h1>${item.title}</h1><br>
                <p>${item.description}</p>
                <p>${item.description2}</p>
                <img src="Images/Sri lankan elephant img.jpg" alt="Sri lankan elephant">
                <a href="Animals in sri lanka.html" class="hero-btn btn-2" ${item.btnUrl2}>READ MORE</a>
            </div>

            <div class="leopard-col">
            <h1>${item.title}</h1><br>
            <p>${item.description}</p>
            <p>${item.description2}</p>
            <img src="Images/Section 01 leopard img.jpg" alt="Sri lankan leopard">
            <a href="Sri lankan leopard.html" class="hero-btn btn-2"${item.btnUrl2}>READ MORE</a>
        </div>
            
        `;            

    }
});

                
            })
            .catch(error => {
                console.error('There was a problem fetching the data:', error);
            });




// Storing in local storage
localStorage.setItem('index.json', JSON.stringify(index.json));



  
