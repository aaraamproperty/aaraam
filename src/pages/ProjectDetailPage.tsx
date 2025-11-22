import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProjectDetail from "@/components/ProjectDetail";
import { getProjectById, getGroupById } from "@/data/developerGroups";

const ProjectDetailPage = () => {
  const { groupId, projectId } = useParams<{ groupId: string; projectId: string }>();
  const navigate = useNavigate();

  const group = groupId ? getGroupById(groupId) : undefined;
  const project = groupId && projectId ? getProjectById(groupId, projectId) : undefined;

  useEffect(() => {
    if (!group || !project) {
      navigate("/");
    }
  }, [group, project, navigate]);

  if (!group || !project) return null;

  return <ProjectDetail project={project} group={group} />;
};

export default ProjectDetailPage;
