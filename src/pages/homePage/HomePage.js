import React from "react";
import { useNavigate } from "react-router-dom";
import items from "../../data/items.json";

export default function HomePage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/cd/" + items?.[0]?.slug);
  }, []);
  return <div></div>;
}
