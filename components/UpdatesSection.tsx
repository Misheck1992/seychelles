import React from 'react';

interface UpdateItem {
  id: number;
  image: string;
  author: {
    name: string;
    image: string;
    link: string;
  };
  title: string;
  date: string;
  description: string;
}

const UpdatesSection: React.FC = () => {
  const updates: UpdateItem[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      author: {
        name: "Director of Operations",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop",
        link: "authors/director.html"
      },
      title: "Emergency Response Team Training Completed",
      date: "Apr 1, 2025",
      description: "Latest updates on emergency response team training initiatives."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      author: {
        name: "Community Outreach",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop",
        link: "authors/outreach.html"
      },
      title: "Community Disaster Preparedness Workshop",
      date: "Mar 28, 2025",
      description: "Successful completion of community disaster preparedness workshops across districts."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
      author: {
        name: "Technical Team",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop",
        link: "authors/technical.html"
      },
      title: "New Early Warning System Deployed",
      date: "Mar 15, 2025",
      description: "State-of-the-art early warning systems installed in coastal areas."
    }
  ];

  return (
    <section className="blog-wrap ptb-100">
      <div className="container">
        <img src="/img/shape-7.png" alt="Shape" className="blog-section-shape" />
        <div className="section-title style3 mb-40 text-center">
          <span>Stay Informed Updates</span>
          <h2>Latest Updates News</h2>
        </div>
        <div className="blog-slider-one owl-carousel">
          {updates.map(update => (
            <div className="blog-card style2" key={update.id}>
              <div className="blog-img">
                <img src={update.image} alt={update.title} />
              </div>
              <div className="blog-info">
                <div className="blog-author">
                  <div className="blog-author-img">
                    <img src={update.author.image} alt={update.author.name} />
                  </div>
                  <div className="blog-author-info">
                    <span>Posted By</span>
                    <h6><a href={update.author.link}>{update.author.name}</a></h6>
                  </div>
                </div>
                <h3><a href={`updates/${update.id}.html`}>{update.title}</a></h3>
                <ul className="blog-metainfo list-style">
                  <li><a href={`updates/${update.date.split(' ')[2]}-${update.date.split(' ')[0].toLowerCase()}.html`}>
                    <i className="ri-calendar-todo-line"></i>{update.date}
                  </a></li>
                </ul>
              </div>
              <a href={`updates/${update.id}.html`} className="link style1">
                Read More <i className="flaticon-right-arrow"></i>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="updates.html" className="btn style1">View All Updates</a>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;