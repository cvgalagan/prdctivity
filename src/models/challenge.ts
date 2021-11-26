import { Goal } from "./goal"

export type ChallengeForm = {
    title: string
    description?: string
    goals: Goal[]
}
