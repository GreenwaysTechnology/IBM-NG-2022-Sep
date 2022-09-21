import { User } from "../user/user.type";

export const USERS: Array<User> = [{
    id: 1,
    name: 'Subramanian Murugan',
    status: "Active",
    skills: [{
        skillId: 10,
        skillName: 'Javascript'
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
},
{
    id: 2,
    name: 'Ram',
    status: "InActive",
    skills: [{
        skillId: 10,
        skillName: 'Javascript'
    },
    {
        skillId: 11,
        skillName: 'Angular'
    },
    {
        skillId: 12,
        skillName: 'Microservices'
    },
    {
        skillId: 13,
        skillName: 'Angular'
    }
    ]
}
]
