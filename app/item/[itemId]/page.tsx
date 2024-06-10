"use client";

import { fetchOne, selectItem } from "@/lib/features/items/itemsApiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import "./page.scss";
import Link from "next/link";
import Image from "next/image";

const namespace = "vpp-item";

const Page = ({ params }: { params: { itemId: string } }) => {
  const dispatch = useAppDispatch();
  const item = useAppSelector(selectItem);

  const [offer, setOffer] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(fetchOne(params.itemId));
  }, [dispatch, params.itemId]);

  const handleOfferChange = (e) => setOffer(e.target.value);
  const handleVisitDateChange = (e) => setVisitDate(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleOfferSubmit = () => {
    // Emit request to backend with the offer
    console.log("Offer submitted: ", offer);
    alert("Oferta enviada con exito!");
  };

  const handleVisitSubmit = () => {
    // Emit request to backend with the visit date
    console.log("Visit date submitted: ", visitDate);
    alert("Visita agendada con exito!");
  };

  const handleMessageSubmit = () => {
    // Emit request to backend with the message
    console.log("Message submitted: ", message);
    alert("Mensaje enviado con exito!");
  };

  if (item === null) {
    return <div className={`${namespace}__loading`}>Loading...</div>;
  }

  return (
    <div className={`${namespace}__container`}>
      <Link href="/">{"<"}</Link>
      <h1>{item.title}</h1>
      <Image
        src={{
          src: item.image,
          width: 300,
          height: 300,
        }}
        alt={item.title}
      />
      <p>{item.price}</p>
      <p>{item.location}</p>
      <ul>
        {item.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <p>{item.availability}</p>
      <div className={`${namespace}__form-group`}>
        <input
          type="text"
          value={offer}
          onChange={handleOfferChange}
          placeholder="Enter your offer"
        />
        <button onClick={handleOfferSubmit}>Ofertar</button>
      </div>
      <div className={`${namespace}__form-group`}>
        <input type="date" value={visitDate} onChange={handleVisitDateChange} />
        <button onClick={handleVisitSubmit}>Agendar visita</button>
      </div>
      <div className={`${namespace}__form-group`}>
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Enter your message"
        />
        <button onClick={handleMessageSubmit}>Contactar por DM</button>
      </div>
    </div>
  );
};

export default Page;
