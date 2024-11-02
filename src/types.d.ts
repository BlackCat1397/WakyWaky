interface AlarmEntry {
  _id: string,
  days: Array<Day>,
  isActive: boolean,
  time: {
    hours: number,
    minutes: number,
  }
}

interface Day {
  title: string,
  isActive?: boolean,
}
