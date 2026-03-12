import { useEffect, useState } from "react";
import { Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchRecommendations, getUserProgress, type Exercise } from "@/lib/api";
import ExerciseCard from "@/components/ExerciseCard";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const progress = getUserProgress();

  const loadRecommendations = () => {
    setLoading(true);
    setError(null);
    fetchRecommendations(progress.completedExercises)
      .then(setRecommendations)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadRecommendations();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered
          </div>
          <h1 className="mb-2 text-3xl font-bold">Recommended for You</h1>
          <p className="text-muted-foreground">
            Personalized suggestions based on your {progress.completedExercises.length} completed exercises
            and learning patterns.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={loadRecommendations} disabled={loading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {/* How it works */}
      <div className="mb-8 rounded-lg border border-border bg-card p-5">
        <h2 className="mb-3 font-semibold text-card-foreground">How AI Recommendations Work</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Analyzes tags and topics from your completed exercises</li>
          <li>• Identifies skill gaps across HTML, CSS, and JavaScript</li>
          <li>• Suggests exercises at your current or next difficulty level</li>
          <li>• Encourages breadth across different categories</li>
        </ul>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="font-mono text-primary animate-pulse-glow">
            Analyzing your learning path...
          </div>
        </div>
      ) : error ? (
        <div className="text-center text-destructive">Error: {error}</div>
      ) : recommendations.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-lg text-muted-foreground">
            🎉 You've completed all exercises! Amazing work.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
