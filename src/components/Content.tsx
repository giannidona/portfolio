import Image from "next/image";
import Link from "next/link";
export const Content = () => {
  return (
    <section id="content" className="py-5">
      <h3 className="text-xl font-bold">Content upload 📈</h3>
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <div className="mb-3">
          <Link className="text-lg font-semibold" href={"/"} target="_blank">
            <Image
              className="mx-auto rounded-lg"
              src={"/youtube1.png"}
              alt="yt video"
              width={600}
              height={200}
            />
            Youtube Title
          </Link>
        </div>
        <div className="mb-3">
          <Link className="text-lg font-semibold" href={"/"} target="_blank">
            <Image
              className="mx-auto rounded-lg"
              src={"/youtube2.png"}
              alt="yt video"
              width={600}
              height={200}
            />
            Youtube Title
          </Link>
        </div>
        <div className="mb-3">
          <Link className="text-lg font-semibold" href={"/"} target="_blank">
            <Image
              className="mx-auto rounded-lg"
              src={"/youtube3.png"}
              alt="yt video"
              width={600}
              height={200}
            />
            Youtube Title
          </Link>
        </div>
        <div className="mb-3">
          <Link className="text-lg font-semibold" href={"/"} target="_blank">
            <Image
              className="mx-auto rounded-lg"
              src={"/youtube4.png"}
              alt="yt video"
              width={600}
              height={200}
            />
            Youtube Title
          </Link>
        </div>
      </div>
    </section>
  );
};
