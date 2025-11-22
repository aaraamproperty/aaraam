import GroupLanding from "@/components/GroupLanding";
import { getGroupById } from "@/data/developerGroups";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ParadiseGroupLanding = () => {
  const navigate = useNavigate();
  const group = getGroupById("paradise-group");

  useEffect(() => {
    if (!group) {
      navigate("/");
    }
  }, [group, navigate]);

  if (!group) return null;

  return <GroupLanding group={group} />;
};

export default ParadiseGroupLanding;
