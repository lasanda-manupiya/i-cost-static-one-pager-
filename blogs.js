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
    {
      title: 'PPN 006 Explained: Carbon Plans for UK Contractors',
      status: 'Published March 2026',
      summary: 'Understand what PPN 006 means in practice and how UK contractors can build compliant carbon reduction plans.',
      url: 'http://blog.i-cost.co.uk/2026/04/28/ppn-006-explained-carbon-plans-for-uk-contractors/',
      backgroundImage: 'https://images.pexels.com/photos/9951823/pexels-photo-9951823.jpeg'
    },
    {
      title: 'Intelligent Cost & Compliance: Why UK SMEs Need a New Operating Model',
      status: 'Published February 2026',
      summary: 'Discover why UK SMEs need a smarter operating model to stay cost-efficient and compliance-ready.',
      url: 'https://148360023.hs-sites-eu1.com/blog/i-cost.co.uk/intelligent-cost-compliance-why-uk-smes-need-a-new-operating-model',
      backgroundImage: 'https://images.pexels.com/photos/3943748/pexels-photo-3943748.jpeg'
    },
    {
      title: 'Five Hidden Margin Leaks on UK Construction Projects',
      status: 'Published January 2026',
      summary: 'Explore five hidden margin leaks that can quietly erode profitability on UK construction projects.',
      url: 'http://blog.i-cost.co.uk/2026/04/28/five-hidden-margin-leaks-on-uk-construction-projects/',
      backgroundImage: 'https://images.pexels.com/photos/9755376/pexels-photo-9755376.jpeg'
    },
    {
      title: 'The Full Cost of Business for UK SMEs in 2026',
      status: 'Published December 2025',
      summary: 'Understand the full cost pressures UK SMEs faced going into 2026 and where margins were most exposed.',
      url:'http://blog.i-cost.co.uk/2026/04/28/the-full-cost-of-business-for-uk-smes-in-2026/',
      backgroundImage: 'https://images.pexels.com/photos/8970682/pexels-photo-8970682.jpeg'
    },
    ...Array.from({ length: 3 }, (_, index) => ({
      title: `Blog ${String(index + 6).padStart(2, '0')}`,
      status: 'Coming soon',
      summary: 'Publishing updates.'
    }))
  ];

  blogCards.forEach((blog, index) => {
    const cardTag = blog.url ? 'a' : 'article';
    const card = document.createElement(cardTag);
    card.className = `blog-card reveal reveal-delay-${(index % 4) + 1}${blog.featured ? ' featured-blog' : ''}${blog.backgroundImage ? ' image-blog' : ''}`;
    card.setAttribute('data-index', String(index + 1).padStart(2, '0'));

    if (blog.url) {
      card.href = blog.url;
      card.setAttribute('aria-label', `${blog.title} (opens blog post)`);
    }

    if (blog.backgroundImage) {
      card.style.backgroundImage = `linear-gradient(160deg, rgba(8,11,15,0.88) 5%, rgba(14,19,25,0.66) 45%, rgba(8,11,15,0.9) 100%), url('${blog.backgroundImage}')`;
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'center';
    }

    card.innerHTML = `
      <h3>${blog.title}</h3>
      <p class="blog-meta">${blog.status}</p>
      <p>${blog.summary}</p>
    `;
    blogGrid.appendChild(card);
  });
}
