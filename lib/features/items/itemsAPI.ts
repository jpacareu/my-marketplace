import { Item } from "./itemsApiSlice";

export const fetchItems = async () => {
  const response = await fetch("http://localhost:3000/api/items", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result: { data: Item[] } = await response.json();

  return result;
};

export const fetchItem = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/items/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result: { data: Item } = await response.json();

  return result;
};
