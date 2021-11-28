import { Duration } from "date-fns"
import { ProofTypes } from "./proof"

export type Goal = {
    id: string
    description: string
    authorId: string
    createdAt: Date
    proofTypes: ProofTypes[]
    duration: Duration
}
