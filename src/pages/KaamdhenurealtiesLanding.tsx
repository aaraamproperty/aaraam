import GroupLanding from "@/components/GroupLanding";
import { getGroupById } from "@/data/developerGroups";

const KaamdhenurealtiesLanding = () => {
  const group = getGroupById("kaamdhenu-realties");
  
  if (!group) {
    return <div>Group not found</div>;
  }

  return <GroupLanding group={group} />;
};

export default KaamdhenurealtiesLanding;
