import type { DBType } from '../../db'

const membersQuery = {
  members(_parent: any, args: { query: string }, { db }: { db: DBType }) {
    if (!args.query) { return db.members }

    return db.members.filter((member) => {
      return member.name.toLowerCase().includes(args.query.toLowerCase())
    })
  }
}

export default membersQuery
