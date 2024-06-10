import { Item } from "@/lib/features/items/itemsApiSlice";

interface ItemRowProps {
  item: Item;
}

const namespace = "item-row";

export const ItemRow = ({ item }: ItemRowProps) => {
  return (
    <div className={`${namespace}__detail`}>
      <h2 className={`${namespace}__title`}>{item.title}</h2>
      <p className={`${namespace}__price`}>{item.price}</p>
      <p className={`${namespace}__location`}>{item.location}</p>
      <ul>
        {item.features.map((feature) => (
          <li key={feature} className={`${namespace}__main-header`}>
            {feature}
          </li>
        ))}
      </ul>
      <p className={`${namespace}__availability`}>{item.availability}</p>
    </div>
  );
};
