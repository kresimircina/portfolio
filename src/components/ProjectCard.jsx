// ProjectCard.jsx
// Kartica za jedan projekt — koristi se u Projects.jsx

function ProjectCard({ project }) {
  const { title, tagline, description, tech, highlights, liveUrl, githubUrl, imageUrl } = project;

  return (
    <article className="group bg-slate-800/40 border border-slate-700 rounded-lg p-6 hover:border-emerald-400/50 transition-all">
      <div className="flex flex-col lg:flex-row gap-6">

        {imageUrl && (
          <div className="lg:w-2/5">
            <img
              src={imageUrl}
              alt={`Screenshot ${title}`}
              className="w-full rounded border border-slate-700 group-hover:border-emerald-400/30 transition"
            />
          </div>
        )}

        <div className="lg:w-3/5 flex flex-col">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition">
            {title}
          </h3>
          <p className="text-sm text-emerald-400 mt-1">
            {tagline}
          </p>

          <p className="text-slate-300 mt-4 leading-relaxed">
            {description}
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {highlights.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-emerald-400 shrink-0">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="text-xs font-mono px-2 py-1 rounded bg-emerald-400/10 text-emerald-400"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 flex gap-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-200 hover:text-emerald-400 transition border-b border-slate-600 hover:border-emerald-400 pb-1"
              >
                Live →
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-200 hover:text-emerald-400 transition border-b border-slate-600 hover:border-emerald-400 pb-1"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;