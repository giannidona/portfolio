import Link from "next/link";

export const TopBar = () => {
  return (
    <header className="mb-10 h-[auto] bg-black">
      <div className="mx-auto w-[90%] py-2 text-white md:flex md:justify-between xl:w-[45%]">
        <div className="md:max-w-[70%]">
          <p className="text-xl font-bold">¿Tenes una idea?</p>
          <p className="text-sm opacity-75">
            Si estás buscando convertir una idea en un proyecto concreto,
            podemos trabajar juntos para encontrar la mejor solución y hacerla
            realidad.
          </p>
        </div>
        <div className="flex items-center xl:justify-center">
          <Link className="text-xl font-bold hover:underline" href={"/"}>
            Hablemos →
          </Link>
        </div>
      </div>
    </header>
  );
};
