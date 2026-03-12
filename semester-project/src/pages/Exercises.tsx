import { useEffect, useState } from "react";
import { fetchExercises, getUserProgress, type Exercise } from "@/lib/api";
import ExerciseCard from "@/components/ExerciseCard";

const categories = ["All", "HTML", "CSS", "JavaScript"];
const difficulties = ["All", "beginner", "intermediate", "advanced"];

const Exercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const progress = getUserProgress();

  useEffect(() => {
    fetchExercises()
      .then(setExercises)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = exercises.filter((e) => {
    const catMatch = selectedCategory === "All" || e.category === selectedCategory;
    const diffMatch = selectedDifficulty === "All" || e.difficulty === selectedDifficulty;
    return catMatch && diffMatch;
  });

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="font-mono text-primary animate-pulse-glow">Loading exercises...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-destructive">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Exercises</h1>
        <p className="text-muted-foreground">
          {progress.completedExercises.length}/{exercises.length} completed
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-6">
        <div>
          <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Difficulty
          </label>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`rounded-md px-3 py-1.5 font-mono text-xs capitalize transition-colors ${
                  selectedDifficulty === diff
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Exercise Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            isCompleted={progress.completedExercises.includes(exercise.id)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No exercises match your filters.
        </p>
      )}
    </div>
  );
};

export default Exercises;
