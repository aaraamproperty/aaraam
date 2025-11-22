import GroupLanding from "@/components/GroupLanding";
import { getGroupById } from "@/data/developerGroups";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const KaamdhenubuildersLanding = () => {
  const navigate = useNavigate();
  const group = getGroupById("kaamdhenu-builders");

  useEffect(() => {
    if (!group) {
      navigate("/");
    }
  }, [group, navigate]);

  if (!group) return null;

  return <GroupLanding group={group} />;
};

export default KaamdhenubuildersLanding;
