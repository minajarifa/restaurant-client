import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch(`/menu.json`)
      .then((res) => res.json())
      .then((data) => {
        const poputarItem = data.filter((item) => item.category === "popular");
        setMenu(poputarItem);
      });
  }, []);
  return[menu]
};
export default useMenu;
