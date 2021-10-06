import { ProofTypes } from "../models/proof"
import { faCamera, faEmptySet, faFileLines, faFontCase, faLink, faVideo } from "@fortawesome/pro-thin-svg-icons"

export const getProofTypeIcon = (item: ProofTypes) => {
    switch (item) {
        case ProofTypes.Empty:
            return faEmptySet
        case ProofTypes.Photo:
            return faCamera
        case ProofTypes.Video:
            return faVideo
        case ProofTypes.File:
            return faFileLines
        case ProofTypes.Link:
            return faLink
        case ProofTypes.Text:
            return faFontCase
        default:
            return faEmptySet
    }
}
