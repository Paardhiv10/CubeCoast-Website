fetch('blogs.json')
  .then(res => res.json())
  .then(blogs => {
    const container = document.getElementById('blog-container');
    container.innerHTML = blogs.map(blog => `
      <div class="col-md-4 mb-4">
        <article class="blog-post">
          <a href="blog.html?id=${blog.id}" class="blog-redirection-custom text-decoration-none text-dark">
            <div class="card blog-card border-secondary h-100">
              <img src="${blog.image}" class="card-img-top img-fluid" alt="${blog.title}" loading="lazy">
              <div class="card-body">
                <h2 class="card-text fw-semibold h5">${blog.title}</h2>
                <p class="small text-muted mb-2">${blog.date}</p>
                <p>${blog.description}</p>
              </div>
            </div>
          </a>
        </article>
      </div>
    `).join('');
  })
  .catch(error => {
    console.error('Error loading blogs:', error);
    document.getElementById('blog-container').innerHTML = '<p class="text-center">Error loading blogs. Please try again later.</p>';
  });