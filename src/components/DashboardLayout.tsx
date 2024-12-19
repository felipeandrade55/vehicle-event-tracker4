import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, LogOut, User, FileText, Car } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/ancore-logo.png" 
                alt="Ancore Proteção Veicular" 
                className="h-8"
              />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">{user?.name}</span>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white shadow-md min-h-[calc(100vh-4rem)]">
          <nav className="p-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => navigate("/dashboard")}
            >
              <User className="mr-2 h-4 w-4" />
              Perfil
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => navigate("/occurrences")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Ocorrências
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => navigate("/plan")}
            >
              <Car className="mr-2 h-4 w-4" />
              Meu Plano
            </Button>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          {children}
          <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 text-center text-sm text-gray-600">
            Ancore Proteção Veicular - Uma empresa subsidiária do Grupo ARX
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;