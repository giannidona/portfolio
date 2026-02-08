import { Title } from "../ui/Title";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/donato-gianluca" },
  { label: "Twitter", href: "https://twitter.com/giannidona_dev" },
  { label: "Gmail", href: "mailto:giannidonato2005@gmail.com" },
];

export const SocialLinks = () => {
  return (
    <div className="my-10">
      <Title title="Social Links" />
      <ul className="flex flex-wrap gap-x-6 gap-y-1">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              className="text-sm text-stone-500 underline-offset-2 hover:text-stone-700 hover:underline"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
