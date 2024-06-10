"use client";
import {
  fetchAll,
  selectItems,
  selectStatus,
} from "@/lib/features/items/itemsApiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { useEffect } from "react";
import { ItemRow } from "../item-row/ItemRow";

const namespace = "items";

export const Items = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  if (status === "loading") {
    return <div className={`${namespace}__loading`}>Loading...</div>;
  }

  return (
    <section className={`${namespace}__items`}>
      <h1 className={`${namespace}__main-header`}>Listings</h1>
      <ul>
        {items.map((item) => (
          <>
            <Link href={`/item/${item.id}`}>
              <ItemRow item={item} />
            </Link>
          </>
        ))}
      </ul>
    </section>
  );
};
