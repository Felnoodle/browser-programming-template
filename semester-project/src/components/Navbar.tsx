import { Link, useLocation } from "react-router-dom";
import { Code2, BookOpen, Sparkles, BarChart3 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: Code2 },
    { to: "/exercises", label: "Exercises", icon: BookOpen },
    { to: "/recommendations", label: "AI Recommend", icon: Sparkles },
    { to: "/progress", label: "Progress", icon: BarChart3 },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-mono text-lg font-bold text-primary">
          <Code2 className="h-6 w-6" />
          <span className="hidden sm:inline">BrowserDev</span>
          <span className="text-xs font-normal text-muted-foreground">.bootcamp</span>
        </Link>

        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <link.icon className="h-4 w-4" />
                <span className="hidden md:inline">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
