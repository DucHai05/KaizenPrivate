import { galleryGroups } from '../data/siteContent.js';
import SectionTitle from './SectionTitle.jsx';

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;
const hideMissingImage = (event) => {
  event.currentTarget.hidden = true;
};

export default function GallerySection() {
  return (
    <section id="khong-gian" className="section gallery-section">
      {galleryGroups.map((group) => (
        <div
          className="gallery-group"
          id={group.id === 'khong-gian' ? undefined : group.id}
          key={group.title}
        >
          <SectionTitle
            eyebrow={group.eyebrow}
            title={group.title}
            variant="red"
          />
          <p className="gallery-intro">{group.description}</p>
          <div className="gallery-grid">
            {group.images.map((image, index) => (
              <figure className="gallery-card" key={image.src}>
                <img
                  src={assetUrl(image.src)}
                  alt={image.alt}
                  loading="lazy"
                  onError={hideMissingImage}
                />
                <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
