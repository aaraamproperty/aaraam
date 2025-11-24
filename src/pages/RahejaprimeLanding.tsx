import GroupLanding from "@/components/GroupLanding";
import { getGroupById } from "@/data/developerGroups";

const RahejaprimeLanding = () => {
  const group = getGroupById("raheja-prime");
  
  if (!group) {
    return <div>Group not found</div>;
  }

  return <GroupLanding group={group} />;
};

export default RahejaprimeLanding;
