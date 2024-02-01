export default function Footer() {
  return (
    <footer className="w-11/12 md:w-3/5 xl:w-2/5 sm:px-5 mx-auto mt-16">
      <h3 className="text-md font-bold mb-3">CONTACTAME</h3>
      <div className="mb-2">
        <span className="mr-12 text-stone-500">Email</span>
        <a className="ml-5" href="mailto:gianlucadonato2005@gmail.com">
          gianlucadonato2005@gmail.com
        </a>
      </div>
      <div className="mb-2">
        <span className="mr-10 text-stone-500">Github</span>
        <a className="ml-5" href="https://github.com/giannidona">
          giannidona
        </a>
      </div>
      <div className="mb-2">
        <span className="mr-7 text-stone-500">Linkedin</span>
        <a className="ml-5" href="https://www.linkedin.com/in/gianidonato/">
          in/gianidonato
        </a>
      </div>
    </footer>
  );
}
