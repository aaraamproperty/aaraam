import GroupLanding from "@/components/GroupLanding";
import { getGroupById } from "@/data/developerGroups";

const ShreelaxmiLanding = () => {
  const group = getGroupById("shree-laxmi");
  
  if (!group) {
    return <div>Group not found</div>;
  }

  return <GroupLanding group={group} />;
};

export default ShreelaxmiLanding;
