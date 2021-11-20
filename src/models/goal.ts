import { Goal as DbGoal } from "@prisma/client"
import { Duration } from "date-fns"
import { ProofTypes } from "./proof"

export type Goal = {
    proofTypes: ProofTypes[]
    duration: Duration
} & Omit<DbGoal, "proofTypes" | "duration">
