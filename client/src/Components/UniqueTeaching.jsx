import { Users, Heart, Leaf } from 'lucide-react';


const UniqueTeaching = () => {
  const features = [
    {
      image: "https://ik.imagekit.io/q0224i8bc/WhatsApp%20Image%202026-02-15%20at%205.39.40%20PM%20(1).jpeg?updatedAt=1771177728515",
      title: "Comprehensive & Holistic",
      description: "Deep anatomical understanding with injury prevention, customized curriculum, integration of strength AND flexibility, both calming and energizing pranayama, powerful meditation practices, and yogic philosophies."
    },
    {
      image: "https://media.istockphoto.com/id/2182829701/photo/mental-confusion.webp?a=1&b=1&s=612x612&w=0&k=20&c=2zG7LL5mIiRWktN12h5HQnqRGZ2g-hgpnYSImnVHoBE=",
      title: "Empathic & Genuine",
      description: "Tailored instruction based on individual needs, patient and gentle approach respecting each person's unique journey, clear explanations ensuring deep understanding, special focus on beginners, elderly, and those with injuries."
    },
    {
      image:"https://media.istockphoto.com/id/1413449465/photo/two-people-sit-opposite-each-other-and-talk.webp?a=1&b=1&s=612x612&w=0&k=20&c=XRDCSKaUlKcVEDw-FO_Sf4UmAKhz_TTqPEt_VlVYZNo=",
      title: "Preventative Wellness",
      description: "Teaching yoga as preventative medicine to stay free from diseases, build a strong vital body aligned with nature's design, and maintain energy, calmness, and overall wellbeing."
    }
  ];

  return (
    <section className="unique-teaching-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What Sets Me Apart</span>
          <h2 className="section-title">What Makes My Teaching Unique</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={feature.image}  className="feature-icon"/>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueTeaching