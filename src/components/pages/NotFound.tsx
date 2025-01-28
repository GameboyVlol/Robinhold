import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
// import { useAuth } from '../contexts/AuthContext';

export default function NotFound() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    navigate(currentUser ? "/portfolio" : "/login");
  }, [currentUser, navigate]);

  return null;
}
