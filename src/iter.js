class Person {
  constructor(name, type, level = 1, health = 100, attack = 0, defence = 0) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.health = health;
    this.attack = attack;
    this.defence = defence;
  }
}

class Team {
  constructor(team = ['hgcvj', 'gfcht', 'jygcjyc']) {
    this._team = team;
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this._team.length - 1;
    const team = this._team;

    return {
      next() {
        if (current > last) {
          return {
            value: undefined,
            done: true,
          };
        }

        current += 1;
        return {
          value: team[current - 1],
          done: false,
        };
      },
    };
  }
}
