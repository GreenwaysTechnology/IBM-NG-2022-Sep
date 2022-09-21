import { User } from "../user/user.type";

export const USER: User = {
    id: 1,
    name: 'Subramanian',
    status: "Active",
    skills: [{
        skillId: 10,
        skillName: 'Javascript and E6'
    },
    {
        skillId: 11,
        skillName: 'Angular'
    },
    {
        skillId: 12,
        skillName: 'Microservices'
    }
    ]
}