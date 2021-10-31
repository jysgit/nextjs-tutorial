import NextLink from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between bg-blue-300 p-3">
      <NextLink href="/">
        <a>Homepage</a>
      </NextLink>
      <NextLink href="/greeting/Isaac">
        <a>Greeting To Isaac</a>
      </NextLink>
      <NextLink href="/metro/ssr">
        <a>SSR</a>
      </NextLink>
      <NextLink href="/metro/ssg">
        <a>SSG</a>
      </NextLink>
    </div>
  );
}
