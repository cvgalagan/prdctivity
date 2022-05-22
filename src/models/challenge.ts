import { Goal } from "../features/Goal/models/goal"

export type ChallengeForm = {
    title: string
    description?: string
    goals: Goal[]
    assignee: string
}
