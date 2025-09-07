import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
export default function Order() {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  console.log(menu);
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
            ))} */}<Tab>Tab</Tab>
          </TabList>

          {menu.map((item) => (
            <FoodCard key={item._id} item={item}  TabPanel={TabPanel}></FoodCard>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
