import skills from "../../../data/skills.json";

export default function Skills() {
  return (
    <section className="sm:w-full md:w-3/5 xl:w-2/5 mx-auto px-5 ">
      <h3 className="text-center text-2xl font-bold my-20 mb-10">
        TECNOLOGIAS
      </h3>
      <div className="flex flex-wrap justify-center p-4">
        {skills.map((skill, index) => (
          <p
            key={index}
            className="rounded-full border-2 border-black dark:border-white px-3 py-1 text-base sm:text-lg md:text-xl mx-1 mb-3"
          >
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
}
