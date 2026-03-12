import exercisesData from "@/data/exercises.json";

export interface Exercise {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  xp: number;
  tags: string[];
  instructions: string;
  starterCode: string;
  solution: string;
  hints: string[];
}

export interface UserProgress {
  completedExercises: string[];
  totalXp: number;
  streakDays: number;
}

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API: Get all exercises
export async function fetchExercises(): Promise<Exercise[]> {
  await delay(300);
  return exercisesData as Exercise[];
}

// Mock API: Get exercise by ID
export async function fetchExerciseById(id: string): Promise<Exercise> {
  await delay(200);
  const exercise = (exercisesData as Exercise[]).find((e) => e.id === id);
  if (!exercise) {
    throw new Error(`Exercise not found: ${id}`);
  }
  return exercise;
}

// Mock API: Get exercises by category
export async function fetchExercisesByCategory(category: string): Promise<Exercise[]> {
  await delay(250);
  return (exercisesData as Exercise[]).filter(
    (e) => e.category.toLowerCase() === category.toLowerCase()
  );
}

// Get user progress from localStorage
export function getUserProgress(): UserProgress {
  const stored = localStorage.getItem("bp-progress");
  if (stored) {
    return JSON.parse(stored);
  }
  return { completedExercises: [], totalXp: 0, streakDays: 0 };
}

// Save progress
export function saveUserProgress(progress: UserProgress): void {
  localStorage.setItem("bp-progress", JSON.stringify(progress));
}

// Mark exercise as completed
export function completeExercise(exerciseId: string): UserProgress {
  const progress = getUserProgress();
  if (!progress.completedExercises.includes(exerciseId)) {
    const exercise = (exercisesData as Exercise[]).find((e) => e.id === exerciseId);
    progress.completedExercises.push(exerciseId);
    progress.totalXp += exercise?.xp || 0;
    saveUserProgress(progress);
  }
  return progress;
}

// AI Recommendation Engine (mock)
export async function fetchRecommendations(completedIds: string[]): Promise<Exercise[]> {
  await delay(400);
  const allExercises = exercisesData as Exercise[];

  if (completedIds.length === 0) {
    // Recommend beginner exercises
    return allExercises.filter((e) => e.difficulty === "beginner").slice(0, 3);
  }

  const completed = allExercises.filter((e) => completedIds.includes(e.id));
  const remaining = allExercises.filter((e) => !completedIds.includes(e.id));

  if (remaining.length === 0) return [];

  // Analyze completed exercise tags to find related topics
  const tagFrequency: Record<string, number> = {};
  completed.forEach((e) => {
    e.tags.forEach((tag) => {
      tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
    });
  });

  // Score remaining exercises by tag relevance and difficulty progression
  const maxCompletedDifficulty = completed.some((e) => e.difficulty === "advanced")
    ? 3
    : completed.some((e) => e.difficulty === "intermediate")
    ? 2
    : 1;

  const scored = remaining.map((exercise) => {
    let score = 0;
    // Tag relevance
    exercise.tags.forEach((tag) => {
      score += tagFrequency[tag] || 0;
    });
    // Prefer next difficulty level
    const diffLevel = exercise.difficulty === "advanced" ? 3 : exercise.difficulty === "intermediate" ? 2 : 1;
    if (diffLevel === maxCompletedDifficulty || diffLevel === maxCompletedDifficulty + 1) {
      score += 3;
    }
    // Slight preference for different categories to broaden skills
    const completedCategories = new Set(completed.map((c) => c.category));
    if (!completedCategories.has(exercise.category)) {
      score += 1;
    }
    return { exercise, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3).map((s) => s.exercise);
}
