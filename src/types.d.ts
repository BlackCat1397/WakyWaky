interface AlarmEntry {
  _id: string,
  days: Array<Day>,
  time: {
    hours: number,
    minutes: number,
  }
}

interface Day {
  title: string,
  isActive?: boolean,
}
