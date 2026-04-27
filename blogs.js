const blogGrid = document.querySelector('#blogGrid');

if (blogGrid) {
  const blogCards = Array.from({ length: 8 }, (_, index) => ({
    title: `Blog ${String(index + 1).padStart(2, '0')}`,
    status: 'Coming soon',
    summary: 'Publishing updates.'
  }));

  blogCards.forEach((blog, index) => {
    const card = document.createElement('article');
    card.className = `blog-card reveal reveal-delay-${(index % 4) + 1}`;
    card.setAttribute('data-index', String(index + 1).padStart(2, '0'));
    card.innerHTML = `
      <h3>${blog.title}</h3>
      <p class="blog-meta">${blog.status}</p>
      <p>${blog.summary}</p>
    `;
    blogGrid.appendChild(card);
  });
}
