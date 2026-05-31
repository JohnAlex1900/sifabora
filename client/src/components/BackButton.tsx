// components/BackButton.tsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-sm text-secondary mb-4 hover:underline"
    >
      <ArrowLeft className="w-4 h-4 mr-1" />
      Go Back
    </button>
  );
};

export default BackButton;
