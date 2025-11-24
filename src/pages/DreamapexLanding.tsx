import GroupLanding from "@/components/GroupLanding";
import { getGroupById } from "@/data/developerGroups";

const DreamapexLanding = () => {
  const group = getGroupById("dreamapex");
  
  if (!group) {
    return <div>Group not found</div>;
  }

  return <GroupLanding group={group} />;
};

export default DreamapexLanding;
