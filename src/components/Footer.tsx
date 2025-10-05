import { Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            <span className="font-bold">TrustCheck Home Inspections</span>
          </div>
          
          <div className="text-sm opacity-90">
            © {new Date().getFullYear()} TrustCheck. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
