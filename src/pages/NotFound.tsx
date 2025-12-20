import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center animate-fade-up">
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-bold text-primary/20">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="coral" size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Link>
            </Button>
            <Button variant="navy-outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
