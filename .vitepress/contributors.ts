export interface CoreTeam {
  avatar: string
  name: string
  github?: string
  twitter?: string
  description: string
}

export const teamMembers: CoreTeam[] = [
  {
    avatar: 'https://thinkactivelabs.co.uk/assets/tal_imgs/team/Gerry.jpeg',
    name: 'Gerard Wilkinson',
    github: 'gerrywilko',
    twitter: 'gerrywilko',
    description: 'Engineering, Sensor and Web Specialist<br>Core team member of ThinkActive',
  },
  {
    avatar: 'https://thinkactivelabs.co.uk/assets/tal_imgs/team/Andy.jpeg',
    name: 'Andrew Garbett',
    github: 'garbit',
    twitter: 'garbit',
    description: 'Data Scientist and Researcher<br>Core team member of ThinkActive',
  },
  {
    avatar: 'https://thinkactivelabs.co.uk/assets/tal_imgs/team/Tom.jpeg',
    name: 'Thomas Nappey',
    description: 'Industrial Designer<br>Core team member of ThinkActive',
  },
]
