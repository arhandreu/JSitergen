class Team {
  constructor(team = ['hgcvj', 'gfcht', 'jygcjyc']) {
    this._team = team;
  }

  toString() {
    return this._team;
  }

  * [Symbol.iterator]() {
    let current = 0;
    const last = this._team.length;
    while (current < last) {
      yield this._team[current];
      current += 1;
    }
  }
}
