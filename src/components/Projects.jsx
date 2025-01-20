import React, { useEffect } from "react";
import "../styles/style.css"; // Import your CSS file for styling

// Define a sample array of project data
const projectsData = [
  {
    id: 1,
    name: "SortSight Project",
    imageUrl: "SortSight.jpg",
    desc: "SortSight brings sorting algorithms to life with captivating visuals. Watch as data seamlessly moves through algorithms like Insertion Sort,Selection Sort ,Bubble Sort, Heap Sort, Merge Sort, and Quick Sort, offering a clear, real-time understanding of how each works. Interactive and visually striking, SortSight makes learning sorting algorithms a breeze!",
    sourceCodeLink:
      "",
  },
  {
    
    id: 2,
    name: "Poker Game Project",
    imageUrl: "poker.webp",
    desc: "Developed a fully functional Texas Hold'em Poker game in C, utilizing bitwise operations for efficient card data representation. Implemented modular code design, including player management, game logic, and hand evaluation, compiled into a reusable static library. ",
    liveLink: "#",
    sourceCodeLink: "#",
  },

  {
    id: 7,
    name: "Portfolio Website",
    imageUrl: "image.png",
    desc: "Explore my portfolio, a testament to my design prowess and experience in the field. Crafted using, it showcases my journey as a dedicated web developer.",
    liveLink: "https://mehak-kanyal.vercel.app/",
    sourceCodeLink: "https://github.com/mehakkanyal16/Mehak-Kanyal",
  },
];

const ProjectBox = ({ project }) => {
  return (
    <div className="project-box">
      <div className="project-image">
        <img
          src={require(`../images/${project.imageUrl}`)}
          alt={project.name}
        />
      </div>
      <div className="project-details">
        <h2>{project.name}</h2>
        <p class="project-description">{project.desc}</p>
        <div className="project-buttons">
          <a href={project.liveLink} target="_blank">
            Live
          </a>
          <a href={project.sourceCodeLink} target="_blank">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <section className="projects" id="projects">
      <div className="project-main">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Projects</h1>
        <div className="project-grid">
          {projectsData.map((project) => (
            <ProjectBox key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
