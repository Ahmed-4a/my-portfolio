
// Fetch projects from the JSON file
fetch('./projects.json')
    .then(response => response.json())
    .then(data => {
        const portfolioList = document.getElementById('portfolio-list');

        // Loop through each project and create HTML for it
        data.forEach(project => {
            const listItem = document.createElement('li');
            listItem.classList.add('scrollbar-item');

            listItem.innerHTML = `
          <div class="card">
            <figure class="card-banner img-holder" style="--width: 600; --height: 675;">
              <img src="${project.image}" width="600" height="675" loading="lazy" alt="${project.title}" class="img-cover">
            </figure>
            <a href="${project.link}" class="card-content">
           
              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              <h3 class="h3 card-title">${project.title}</h3>
              <p class="card-text">${project.description}</p>
              <div class="btns">
              <button class="btn-demo">Demo</button>
              </div>
            </a>
          </div>
        `;

            // Add the project to the list
            portfolioList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error loading projects:', error));

