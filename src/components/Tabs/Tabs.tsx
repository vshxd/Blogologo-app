import { Articles, News, TabsItem } from "components";
import { useState } from "react";
import { ITab } from "types";

export const Tabs = () => {
  const tabs: ITab[] = [
    { id: "1", label: "Articles", isActive: true },
    { id: "2", label: "News", isActive: false },
  ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [isActive, setIsActive] = useState(tabs[1].isActive);
  const handleTabClick = (id: string | number) => {
    setSelectedTabId(id);
    setIsActive(!isActive);
  };
  return (
    <>
      <TabsItem tabs={tabs} onClick={handleTabClick} />
      {selectedTabId === tabs[0].id && <Articles />}
      {selectedTabId === tabs[1].id && <News />}
    </>
  );
};
