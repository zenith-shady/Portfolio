import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "AI CRM SaaS",
    subtitle: "Intelligent customer relationship platform",
    image: "/images/ai.webp",
    tools: "React, Node.js, OpenAI API, PostgreSQL",
  },
  {
    title: "ERP SaaS",
    subtitle: "Enterprise resource planning system",
    image: "/images/erp.webp",
    tools: "Next.js, NestJS, MongoDB, Redis",
  },
  {
    title: "Business SaaS",
    subtitle: "Business operations & analytics dashboard",
    image: "/images/bussiness.webp",
    tools: "Angular, Express, MySQL, AWS",
  },
  {
    title: "Ecommerce SaaS",
    subtitle: "Full-stack ecommerce platform",
    image: "/images/ecommerce.webp",
    tools: "Next.js, Stripe, MongoDB, Tailwind",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      {/* Decorative Orb */}
      <div className="decor-orb" />

      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-divider top-divider" />

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    {/* Watermark Number */}
                    <div className="carousel-number-watermark">
                      0{index + 1}
                    </div>

                    <div className="carousel-info">
                      <div className="carousel-details">
                        <span className="project-category">{project.subtitle}</span>
                        <h4>{project.title}</h4>
                        <div className="carousel-tools">
                          <span className="tools-label">TOOLS & FEATURES</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-image-wrapper">
                      <div className="project-preview-container">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-preview-img"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="work-divider bottom-divider" />

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>

        {/* Bottom Right Resume Link remains handled by global SocialIcons or kept if requested uniquely */}
        {/* The user requested "Bottom-right: 'RESUME ⬛' text link" in previous instruction, but SocialIcons also has a resume button. 
            I'll keep it here just in case they want it specifically in this section too. */}
        <div className="work-resume">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">

          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
