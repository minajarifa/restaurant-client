import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default function Order() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="">
      <Cover />
      <div className="my-10">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
            console.log(index)
          }}
        >
          <TabList className="text-center">
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>
          <TabPanel>Title 1</TabPanel>
          <TabPanel>Title 2</TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
