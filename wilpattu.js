document.addEventListener('DOMContentLoaded', function() {
    fetch('wilpattu.json')
        .then(response => response.json())
        .then(data => {
            // Save JSON data to local storage
            localStorage.setItem('wilpattuData', JSON.stringify(data));

            data.forEach(item => {
                // Dynamically create HTML elements
                const title = document.createElement('h2');
                title.textContent = item.title;
                title.classList.add('yala-top', 'yala-top h2', 'heading-2 h2', );

                const content = document.createElement('p');
                content.textContent = item.content;
                content.classList.add('anim');

                const link = document.createElement('a');
                link.href = item.link;
                link.textContent = item.link;
                link.classList.add('anim');

                // Append elements to the section with the corresponding ID
                if (item.title.includes('About')) {
                    const section = document.getElementById('sec1');
                    section.appendChild(title);
                    section.appendChild(content);
                    section.appendChild(link);
                } else if (item.title.includes('History')) {
                    const section = document.getElementById('sec2');
                    section.appendChild(title);
                    section.appendChild(content);
                    section.appendChild(link);
                } else if (item.title.includes('Animals')) {
                    const section = document.getElementById('sec3');
                    section.appendChild(title);
                    section.appendChild(content);
                    section.appendChild(link);
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
