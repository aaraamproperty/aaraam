import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ProjectDetail from "@/components/ProjectDetail";
import { getProjectById, getGroupById } from "@/data/developerGroups";

const ProjectDetailPage = () => {
  const { groupId, projectId } = useParams<{ groupId: string; projectId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const group = groupId ? getGroupById(groupId) : undefined;
  const project = groupId && projectId ? getProjectById(groupId, projectId) : undefined;

  useEffect(() => {
    if (!group || !project) {
      navigate("/");
      return;
    }

    // Scroll to hero section on page load
    const scrollToHero = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        heroElement.scrollIntoView({ 
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    };

    // Slight delay to ensure DOM is ready
    const timer = setTimeout(scrollToHero, 100);
    return () => clearTimeout(timer);
  }, [group, project, navigate, location.pathname]);

  if (!group || !project) return null;

  return <ProjectDetail project={project} group={group} />;
};

export default ProjectDetailPage;
