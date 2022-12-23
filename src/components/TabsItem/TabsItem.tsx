import { ITab } from "types";
import { StyledTabsItem, TabItem } from "./styles";

export interface ITabsProps {
  tabs: ITab[];
  onClick: (id: string | number) => void;
}
export const TabsItem = ({ tabs, onClick }: ITabsProps) => {
  return (
    <StyledTabsItem>
      {tabs &&
        tabs.map((tab) => (
          <TabItem isActive={tab.isActive} key={tab.id} onClick={() => onClick(tab.id)}>
            {tab.label}
          </TabItem>
        ))}
    </StyledTabsItem>
  );
};
