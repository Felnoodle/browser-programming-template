import { Link } from "react-router-dom";
import { CheckCircle2, Clock, Zap } from "lucide-react";
import type { Exercise } from "@/lib/api";

interface ExerciseCardProps {
  exercise: Exercise;
  isCompleted?: boolean;
}

const difficultyColors: Record<string, string> = {
  beginner: "text-accent",
  intermediate: "text-primary",
  advanced: "text-warning",
};

const ExerciseCard = ({ exercise, isCompleted }: ExerciseCardProps) => {
  return (
    <Link
      to={`/exercises/${exercise.id}`}
      className="group block rounded-lg border border-border bg-card p-5 card-hover"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-xs text-secondary-foreground">
          {exercise.category}
        </span>
        {isCompleted && (
          <CheckCircle2 className="h-5 w-5 text-accent" />
        )}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
        {exercise.title}
      </h3>

      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
        {exercise.description}
      </p>

      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className={`flex items-center gap-1 ${difficultyColors[exercise.difficulty]}`}>
          <Clock className="h-3.5 w-3.5" />
          {exercise.difficulty}
        </span>
        <span className="flex items-center gap-1">
          <Zap className="h-3.5 w-3.5 text-primary" />
          {exercise.xp} XP
        </span>
      </div>
    </Link>
  );
};

export default ExerciseCard;
