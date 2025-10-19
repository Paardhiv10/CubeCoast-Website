const params = new URLSearchParams(window.location.search);
const blogId = params.get('id');

// Helper function to format paragraphs with bold text
function formatParagraph(text) {
  // Convert **text** to <strong>text</strong>
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// Helper function to build the blog HTML
function buildBlogHTML(blog) {
  let html = `
    <header>
      <h1 class="text-center mb-4 custom-google-text">${blog.title}</h1>
      <p class="text-center text-muted">${blog.date}</p>
    </header>
  `;

  // Add intro paragraph if exists
  if (blog.intro) {
    html += `<div class="lead mb-4"><p>${formatParagraph(blog.intro)}</p></div>`;
  }

  // Add all sections
  if (blog.sections && blog.sections.length > 0) {
    blog.sections.forEach(section => {
      html += `<section>`;
      
      // Add section heading
      if (section.heading) {
        html += `<h2 class="custom-google-text">${section.heading}</h2>`;
      }

      // Add all paragraphs in the section
      if (section.paragraphs && section.paragraphs.length > 0) {
        section.paragraphs.forEach(paragraph => {
          html += `<p>${formatParagraph(paragraph)}</p>`;
        });
      }

      html += `</section>`;
    });
  }

  return html;
}

if (!blogId) {
  document.getElementById('blog-article').innerHTML = '<h2 class="text-center mt-5">No blog selected.</h2>';
} else {
  fetch('blogs.json')
    .then(res => res.json())
    .then(blogs => {
      const blog = blogs.find(b => b.id == blogId);
      const container = document.getElementById('blog-article');

      if (!blog) {
        container.innerHTML = '<h2 class="text-center mt-5">Blog not found.</h2>';
        return;
      }

      // Update page title and meta description
      document.title = `${blog.title} | CubeCoast`;
      document.querySelector('meta[name="description"]').setAttribute('content', blog.description);

      // Render blog content
      container.innerHTML = buildBlogHTML(blog);
    })
    .catch(error => {
      console.error('Error loading blog:', error);
      document.getElementById('blog-article').innerHTML = '<h2 class="text-center mt-5">Error loading blog. Please try again later.</h2>';
    });
}