import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, Eye, EyeOff, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchExerciseById, completeExercise, getUserProgress, type Exercise } from "@/lib/api";

const ExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchExerciseById(id)
      .then((ex) => {
        setExercise(ex);
        setCode(ex.starterCode);
        setIsCompleted(getUserProgress().completedExercises.includes(ex.id));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleComplete = () => {
    if (!exercise) return;
    completeExercise(exercise.id);
    setIsCompleted(true);
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="font-mono text-primary animate-pulse-glow">Loading exercise...</div>
      </div>
    );
  }

  if (error || !exercise) {
    return (
      <div className="container mx-auto px-4 py-10">
        <p className="text-destructive">Error: {error || "Exercise not found"}</p>
        <Link to="/exercises" className="mt-4 inline-block text-primary hover:underline">
          ← Back to exercises
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Back link */}
      <Link
        to="/exercises"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to exercises
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">
            {exercise.category}
          </span>
          <span className="font-mono text-xs capitalize text-muted-foreground">
            {exercise.difficulty}
          </span>
          <span className="flex items-center gap-1 font-mono text-xs text-primary">
            <Zap className="h-3.5 w-3.5" /> {exercise.xp} XP
          </span>
          {isCompleted && (
            <span className="flex items-center gap-1 text-xs text-accent">
              <CheckCircle2 className="h-4 w-4" /> Completed
            </span>
          )}
        </div>
        <h1 className="mb-3 text-3xl font-bold">{exercise.title}</h1>
        <p className="text-muted-foreground">{exercise.description}</p>
      </div>

      {/* Instructions */}
      <div className="mb-6 rounded-lg border border-border bg-card p-5">
        <h2 className="mb-3 text-lg font-semibold">Instructions</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{exercise.instructions}</p>
      </div>

      {/* Hints */}
      <div className="mb-6">
        <button
          onClick={() => setShowHints(!showHints)}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          {showHints ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          {showHints ? "Hide Hints" : "Show Hints"} ({exercise.hints.length})
        </button>
        {showHints && (
          <ul className="mt-3 space-y-2 pl-6">
            {exercise.hints.map((hint, i) => (
              <li key={i} className="list-disc text-sm text-muted-foreground">
                {hint}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Code Editor */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Your Code</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCode(exercise.starterCode)}
              className="font-mono text-xs"
            >
              Reset
            </Button>
          </div>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="h-64 w-full resize-y rounded-lg border border-border bg-muted p-4 font-mono text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          spellCheck={false}
        />
      </div>

      {/* Actions */}
      <div className="mb-8 flex flex-wrap gap-3">
        {!isCompleted && (
          <Button onClick={handleComplete} className="glow-primary">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Mark as Complete
          </Button>
        )}
        <Button
          variant="outline"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? (
            <>
              <EyeOff className="mr-2 h-4 w-4" /> Hide Solution
            </>
          ) : (
            <>
              <Eye className="mr-2 h-4 w-4" /> View Solution
            </>
          )}
        </Button>
      </div>

      {/* Solution */}
      {showSolution && (
        <div className="rounded-lg border border-primary/30 bg-muted p-5">
          <h2 className="mb-3 text-lg font-semibold text-primary">Solution</h2>
          <pre className="overflow-x-auto font-mono text-sm text-foreground whitespace-pre-wrap">
            {exercise.solution}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ExerciseDetail;
