import { Goal } from "../models/goal"
import { ProofTypes } from "../models/proof"

const mockedDate = new Date(Date.now() - 100000)

export const mockedGoals: Goal[] = [
    {
        id: "1",
        description: "Test description 1",
        authorId: "Test user",
        createdAt: mockedDate,
        duration: {},
        proofTypes: [ProofTypes.Empty, ProofTypes.File, ProofTypes.Text]
    },
    {
        id: "1",
        description:
            'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
        authorId: "Test user",
        createdAt: mockedDate,
        duration: {},
        proofTypes: [ProofTypes.Empty, ProofTypes.File, ProofTypes.Text]
    }
]
