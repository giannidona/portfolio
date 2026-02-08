import { Title } from "../ui/Title";

const stack = ["next", "typescript", "tailwindcss", "supabase"];

export const TechStack = () => {
  return (
    <div className="my-10">
      <Title title="Tech Stack" />
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="rounded-lg bg-stone-400/20 px-1 font-light text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
