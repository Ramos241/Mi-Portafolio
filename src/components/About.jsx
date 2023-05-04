import Profile from "../assets/yo.jpg";
export default function About() {
  return (
    <>
      <section id="about" className="mb-10 py-24 px-10">
        <div className="flex justify-center mb-14">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-700 dark:text-slate-300 mb-5">
            SOBRE MÍ
          </h2>
        </div>
        <div className="grid grid-cols-1 items-center h-auto gap-10 lg:my-0 md:grid-cols-2 place-items-center">
          <p className="text-gray-600 dark:text-slate-300 text-start font-semibold text-base md:text-xl lg:text-2xl">
            Soy{" "} desarrollador web e ingeniero en sistemas.
            Me considero proactivo, comprometido y apasionado por la tecnología
            🖥️, orientado a las buenas prácticas y buen diseño. Apasionado por
            mejorar cada día con desafíos que lleven mis habilidades
            y conocimientos al siguiente nivel.
          </p>
          <img
            src={Profile}
            alt="profile"
            loading="lazy"
            className="rounded-3xl border-4"
            width={300}
          />
        </div>
      </section>
    </>
  );
}
