import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface RedirectProps {
  to: string;
}

/**
 * Redirect component for handling 301-style redirects in React Router
 * Redirects old /groups/* URLs to new /properties/* URLs
 */
const Redirect = ({ to }: RedirectProps) => {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // Replace :groupId and :projectId params in the redirect path
    let redirectPath = to;
    if (params.groupId) {
      redirectPath = redirectPath.replace(":groupId", params.groupId);
    }
    if (params.projectId) {
      redirectPath = redirectPath.replace(":projectId", params.projectId);
    }
    
    // Replace the current history entry (simulates 301 redirect behavior)
    navigate(redirectPath, { replace: true });
  }, [navigate, params, to]);

  return null;
};

export default Redirect;
