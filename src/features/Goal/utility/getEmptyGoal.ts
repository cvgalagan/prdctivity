import { Goal } from "../models/goal"

export const getEmptyGoal = (): Goal => ({
    id: "",
    createdAt: new Date(),
    description: "",
    duration: {},
    proofTypes: [],
    authorId: ""
})
