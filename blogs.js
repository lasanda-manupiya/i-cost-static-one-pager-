const blogGrid = document.querySelector('#blogGrid');

if (blogGrid) {
  const blogCards = [
    {
      title: 'Embodied Carbon for UK Contractors: A Starter Guide',
      status: 'Published April 2026',
      summary: 'Read our practical starting point for reducing embodied carbon across UK construction projects.',
      url: 'http://blog.i-cost.co.uk/2026/04/27/extended-producer-responsibility-eprfor-packaging-in-the-uk/',
      featured: true
    },
    ...Array.from({ length: 7 }, (_, index) => ({
      title: `Blog ${String(index + 2).padStart(2, '0')}`,
      status: 'Coming soon',
      summary: 'Publishing updates.'
    }))
  ];

  blogCards.forEach((blog, index) => {
    const cardTag = blog.url ? 'a' : 'article';
    const card = document.createElement(cardTag);
    card.className = `blog-card reveal reveal-delay-${(index % 4) + 1}${blog.featured ? ' featured-blog' : ''}`;
    card.setAttribute('data-index', String(index + 1).padStart(2, '0'));

    if (blog.url) {
      card.href = blog.url;
      card.setAttribute('aria-label', `${blog.title} (opens blog post)`);
    }

    card.innerHTML = `
      <h3>${blog.title}</h3>
      <p class="blog-meta">${blog.status}</p>
      <p>${blog.summary}</p>
    `;
    blogGrid.appendChild(card);
  });
}
