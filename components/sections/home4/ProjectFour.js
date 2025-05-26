import Link from 'next/link';

// Dynamic data for the projects
const projects = [
  {
    id: 1,
    imgSrc: "assets/images/project/project-4-1.jpg",
    subTitle: "Roof Renewal",
    title: "Expert roof expectations",
    href: "/project-details",
    colClass: "col-xl-5 col-lg-5",
    wowClass: "fadeInLeft",
    wowDelay: "100ms"
  },
  {
    id: 2,
    imgSrc: "assets/images/project/project-4-2.jpg",
    subTitle: "Roof Renewal",
    title: "Expert roof expectations",
    href: "/project-details",
    colClass: "col-xl-7 col-lg-7",
    wowClass: "fadeInRight",
    wowDelay: "200ms"
  },
  {
    id: 3,
    imgSrc: "assets/images/project/project-4-3.jpg",
    subTitle: "Roof Renewal",
    title: "Expert roof expectations",
    href: "/project-details",
    colClass: "col-xl-4 col-lg-4",
    wowClass: "fadeInLeft",
    wowDelay: "300ms"
  },
  {
    id: 4,
    imgSrc: "assets/images/project/project-4-4.jpg",
    subTitle: "Roof Renewal",
    title: "Expert roof expectations",
    href: "/project-details",
    colClass: "col-xl-4 col-lg-4",
    wowClass: "fadeInUp",
    wowDelay: "400ms"
  },
  {
    id: 5,
    imgSrc: "assets/images/project/project-4-5.jpg",
    subTitle: "Roof Renewal",
    title: "Expert roof expectations",
    href: "/project-details",
    colClass: "col-xl-4 col-lg-4",
    wowClass: "fadeInRight",
    wowDelay: "500ms"
  }
];

export default function ProjectFour() {
  return (
    <section className="project-four">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">latest gallery</span>
          </div>
          <h2 className="section-title__title">
            Top-Notch <span>Roof Solutions</span>
            <br /> Sheltering Dreams
          </h2>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.colClass} wow ${project.wowClass}`}
              data-wow-delay={project.wowDelay}
            >
              <div className="project-four__single">
                <div className="project-four__img-box">
                  <div className="project-four__img">
                    <img src={project.imgSrc} alt={project.subTitle} />
                  </div>
                  <div className="project-four__content">
                    <p className="project-four__sub-title">{project.subTitle}</p>
                    <h4 className="project-four__title">
                      <Link href={project.href}>{project.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
