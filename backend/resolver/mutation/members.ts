import type { DBType } from '../../db'

type MemberArgsType = {
  id: string
  data: {
    name: string
    combatPower: number
  }
}

const membersMutation = {
  createMember(_parent: any, args: Omit<MemberArgsType, 'id'>, { db }: { db: DBType }) {
    const id = String(db.members.length + 1)
    const member = { id, ...args.data }
    db.members.push(member)

    return member
  },
  updateMember(_parent: any, args: MemberArgsType, { db }: { db: DBType }) {
    const { id, data } = args
    const member = db.members.find((member) => member.id === id)
    if (!member) { throw new Error('This member not found') }

    if (typeof data.name === 'string' && typeof data.combatPower === 'number') {
      member.name = data.name
      member.combatPower = data.combatPower
    }

    return member
  },
  deleteMember(_parent: any, args: Omit<MemberArgsType, 'data'>, { db }: { db: DBType }) {
    const member = db.members.find((member) => member.id === args.id)
    const memberIndex = db.members.findIndex((member) => member.id === args.id)

    if (memberIndex === -1) { throw new Error('This member not found') }

    db.members.splice(memberIndex, 1)
        
    return member
  },
}

export default membersMutation
