import type { Metadata } from "next";
import { Items } from "./components/items/Items";

export default function IndexPage() {
  return <Items />;
}

export const metadata: Metadata = {
  title: "Real Estate Marketplace",
};
