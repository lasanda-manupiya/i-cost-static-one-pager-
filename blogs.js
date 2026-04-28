const blogGrid = document.querySelector('#blogGrid');

if (blogGrid) {
  const blogCards = [
    {
      title: 'Embodied Carbon for UK Contractors: A Starter Guide',
      status: 'Published April 2026',
      summary: 'Read our practical starting point for reducing embodied carbon across UK construction projects.',
      url: 'http://blog.i-cost.co.uk/2026/04/27/extended-producer-responsibility-eprfor-packaging-in-the-uk/',
      cardClass: 'featured-blog featured-blog-primary'
    },
    {
      title: 'PPN 006 Explained: Carbon Plans for UK Contractors',
      status: 'Published March 2026',
      summary: 'Understand PPN 006 requirements and how UK contractors can build practical carbon reduction plans.',
      url: 'http://blog.i-cost.co.uk/2026/04/28/ppn-006-explained-carbon-plans-for-uk-contractors/',
      cardClass: 'featured-blog featured-blog-secondary'
    },
    ...Array.from({ length: 6 }, (_, index) => ({
      title: `Blog ${String(index + 3).padStart(2, '0')}`,
      status: 'Coming soon',
      summary: 'Publishing updates.'
    }))
  ];

  blogCards.forEach((blog, index) => {
    const cardTag = blog.url ? 'a' : 'article';
    const card = document.createElement(cardTag);
    card.className = `blog-card reveal reveal-delay-${(index % 4) + 1}${blog.cardClass ? ` ${blog.cardClass}` : ''}`;
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
