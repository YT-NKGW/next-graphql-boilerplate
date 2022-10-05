import type { DBType } from '../../db'

const membersQuery = {
  members(_parent: any, args: { query: string }, { db }: { db: DBType }) {
    const sortedMember = db.members.sort((a, b) => (a.combatPower < b.combatPower) ? 1 : -1)

    if (!args.query) { return sortedMember }

    return sortedMember.filter((member) => member.name.toLowerCase().includes(args.query.toLowerCase()))
  }
}

export default membersQuery
