import type { Route } from "./+types/about";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: 'about page'};
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <>
    <Link to="/">Back to index</Link>
    <Welcome message={loaderData.message} />
  </>;
}
