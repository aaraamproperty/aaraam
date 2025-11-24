import GroupLanding from "@/components/GroupLanding";
import { getGroupById } from "@/data/developerGroups";

const EmporiaworldLanding = () => {
  const group = getGroupById("emporia-world");
  
  if (!group) {
    return <div>Group not found</div>;
  }

  return <GroupLanding group={group} />;
};

export default EmporiaworldLanding;
