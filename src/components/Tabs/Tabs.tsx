import { Articles, News, TabsItem } from "components";
import { useState } from "react";
import { ITab } from "types";

export const Tabs = () => {
  const tabs: ITab[] = [
    { id: "1", label: "Articles" },
    { id: "2", label: "News" },
  ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabClick = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <>
      <TabsItem selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
      {selectedTabId === tabs[0].id && <Articles />}
      {selectedTabId === tabs[1].id && <News />}
    </>
  );
};
