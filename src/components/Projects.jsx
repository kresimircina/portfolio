// Projects.jsx
// Wrapper koji renderira sve projekt kartice iz projects.js

import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="text-sm uppercase tracking-widest text-emerald-400 mb-6 lg:hidden">
        Projekti
      </h2>

      <h2 className="hidden lg:block text-2xl font-bold text-slate-100 mb-8">
        Projekti
      </h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;