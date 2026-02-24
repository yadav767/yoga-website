import { useSelector } from 'react-redux'
import { SquareMousePointer } from 'lucide-react'

const Experience = () => {
  const { data } = useSelector((state) => state.root)
  const experiences = data.experiences

  const stats = [
    { number: "1000+", label: "Classes Conducted", sublabel: "At Cult.fit with exceptional ratings" },
    { number: "95%", label: "Positive Rating", sublabel: "Consistently high client satisfaction" },
    { number: "8", label: "Years of Practice", sublabel: "Deep immersion in yoga philosophies" }
  ];

  // const experiences = [
  //   {
  //     title: "Yoga Instructor at Cult.fit",
  //     period: "July 2024 – Present",
  //     description: "1000+ classes conducted with 95% positive rating, specializing in advanced yoga with props, wheels, and Hatha yoga"
  //   },
  //   {
  //     title: "Corporate Wellness Programs",
  //     period: "Ongoing",
  //     description: "Successfully conducted sessions at SBI, RBI, Union Bank, and Technova (IT company)"
  //   },
  //   {
  //     title: "Advanced Training & Internship",
  //     period: "2023",
  //     description: "4-month internship at The Yoga Institute, advanced workshop with Samiksha Shetty on adjustments, cues, and alignments"
  //   },
  //   {
  //     title: "Personal Client Consultations",
  //     period: "January 2025 – Present",
  //     description: "One-on-one wellness guidance and customized yoga programs"
  //   }
  // ];

  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">My Experience</h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sublabel">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className='flex items-center gap-3'>
                  <h3>{exp.title} </h3>
                  {exp.certificate && (
                    <a className='cursor-pointer active:scale-93 transition-all' href={exp.certificate}><SquareMousePointer size={17} /></a>
                  )}
                </div>
                <span className="timeline-period">{exp.period}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience