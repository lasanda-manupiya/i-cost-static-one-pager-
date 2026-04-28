const blogGrid = document.querySelector('#blogGrid');

if (blogGrid) {
  const blogCards = [
    {
      title: 'PPN 006 Explained: Carbon Plans for UK Contractors',
      status: 'Published March 2026',
      summary: 'Understand PPN 006 requirements and how UK contractors can build practical carbon reduction plans.',
      url: 'http://blog.i-cost.co.uk/2026/04/28/ppn-006-explained-carbon-plans-for-uk-contractors/',
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
