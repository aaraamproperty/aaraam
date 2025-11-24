import GroupLanding from "@/components/GroupLanding";
import { getGroupById } from "@/data/developerGroups";

const DeltagroupsLanding = () => {
  const group = getGroupById("delta-groups");
  
  if (!group) {
    return <div>Group not found</div>;
  }

  return <GroupLanding group={group} />;
};

export default DeltagroupsLanding;
