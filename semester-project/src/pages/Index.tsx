import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cpu, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getUserProgress } from "@/lib/api";

const Index = () => {
  const progress = getUserProgress();

  const features = [
    {
      icon: Terminal,
      title: "Hands-on Exercises",
      description: "Practice HTML, CSS, and JavaScript with real coding challenges and instant feedback.",
    },
    {
      icon: Sparkles,
      title: "AI Recommendations",
      description: "Get personalized exercise suggestions based on your learning progress and skill gaps.",
    },
    {
      icon: Cpu,
      title: "Browser Programming",
      description: "Master DOM manipulation, async APIs, responsive design, and modern web architecture.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-xs text-primary">
            <Code2 className="h-3.5 w-3.5" />
            Browser Programming Bootcamp
          </div>

          <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            <span className="gradient-text">Learn to Code</span>
            <br />
            for the Browser
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            Master HTML, CSS, and JavaScript through interactive exercises. 
            Our AI engine adapts to your progress and recommends the perfect next challenge.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="glow-primary font-semibold">
              <Link to="/exercises">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {progress.completedExercises.length > 0 && (
              <Button asChild variant="outline" size="lg">
                <Link to="/progress">
                  View Progress ({progress.totalXp} XP)
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-border bg-card p-6 card-hover"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-t border-border bg-card py-12">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-12 px-4 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">12</p>
            <p className="text-sm text-muted-foreground">Exercises</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">3</p>
            <p className="text-sm text-muted-foreground">Categories</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">3</p>
            <p className="text-sm text-muted-foreground">Difficulty Levels</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
