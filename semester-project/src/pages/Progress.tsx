import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Zap, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchExercises, getUserProgress, type Exercise } from "@/lib/api";

const Progress = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const progress = getUserProgress();

  useEffect(() => {
    fetchExercises()
      .then(setExercises)
      .finally(() => setLoading(false));
  }, []);

  const completedExercises = exercises.filter((e) =>
    progress.completedExercises.includes(e.id)
  );

  const totalXpPossible = exercises.reduce((sum, e) => sum + e.xp, 0);
  const percentComplete = exercises.length
    ? Math.round((completedExercises.length / exercises.length) * 100)
    : 0;

  const categoryCounts = exercises.reduce<Record<string, { total: number; completed: number }>>(
    (acc, ex) => {
      if (!acc[ex.category]) acc[ex.category] = { total: 0, completed: 0 };
      acc[ex.category].total++;
      if (progress.completedExercises.includes(ex.id)) acc[ex.category].completed++;
      return acc;
    },
    {}
  );

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="font-mono text-primary animate-pulse-glow">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Your Progress</h1>

      {/* Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6 text-center">
          <Zap className="mx-auto mb-2 h-8 w-8 text-primary" />
          <p className="text-3xl font-bold text-primary">{progress.totalXp}</p>
          <p className="text-sm text-muted-foreground">of {totalXpPossible} XP</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 text-center">
          <BookOpen className="mx-auto mb-2 h-8 w-8 text-accent" />
          <p className="text-3xl font-bold text-accent">{completedExercises.length}</p>
          <p className="text-sm text-muted-foreground">of {exercises.length} exercises</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 text-center">
          <Trophy className="mx-auto mb-2 h-8 w-8 text-warning" />
          <p className="text-3xl font-bold text-foreground">{percentComplete}%</p>
          <p className="text-sm text-muted-foreground">complete</p>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="mb-10">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Overall Progress</span>
          <span className="font-mono text-primary">{percentComplete}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full gradient-primary transition-all duration-500"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">By Category</h2>
        <div className="space-y-4">
          {Object.entries(categoryCounts).map(([cat, { total, completed }]) => {
            const pct = Math.round((completed / total) * 100);
            return (
              <div key={cat}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-mono text-foreground">{cat}</span>
                  <span className="text-muted-foreground">
                    {completed}/{total}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      {percentComplete < 100 && (
        <div className="text-center">
          <Button asChild className="glow-primary">
            <Link to="/recommendations">
              Get AI Recommendations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Progress;
