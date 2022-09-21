import { Skill } from "./skill.type"

export class User {
    id: number = 0
    //skipping property initalization
    name!: string
    //optional properties need not be declared with !
    status?: "Active" | "InActive"
    skills?: Array<Skill>
}