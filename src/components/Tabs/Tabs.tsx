import { Articles, News, TabsItem } from "components";
import { SortButtons } from "components/SortButtons/SortButtons";
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
      <SortButtons />
      {selectedTabId === tabs[0].id && <Articles />}
      {selectedTabId === tabs[1].id && <News />}
    </>
  );
};
