import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
export default function Order() {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");
  const salad = menu?.filter((item) => item.category === "salad");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const drinks = menu?.filter((item) => item.category === "drinks");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const soup = menu?.filter((item) => item.category === "soup");
  const offered = menu?.filter((item) => item.category === "offered");
  return (
    <div className="">
      <Cover />
      <div className="my-10">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
            console.log(index);
          }}
        >
          <TabList className="text-center">
            {/* {menu.map((item) => (
              <Tab>{ item?.category}</Tab>
            ))} */}
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
            <Tab>popular</Tab>
            <Tab>offered</Tab>
          </TabList>
          <TabPanel>
            {salad.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </TabPanel>
          <TabPanel>
            {pizza.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </TabPanel>
          <TabPanel>
            {soup.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </TabPanel>
          <TabPanel>
            {dessert.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </TabPanel>
          <TabPanel>
            {drinks.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </TabPanel>
          <TabPanel>
            {popular.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </TabPanel>
          <TabPanel>
            {offered.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
