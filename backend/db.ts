type MemberType = {
  id: string
  name: string
  combatPower: number
}

export type DBType = {
  members: MemberType[]
}

const members = [
  {
    id: '1',
    name: '孫悟空',
    combatPower: 180000
  },
  {
    id: '2',
    name: 'フリーザ',
    combatPower: 530000
  },
  {
    id: '3',
    name: 'ベジータ',
    combatPower: 30000
  }
]

const db: DBType = { members }

export default db
