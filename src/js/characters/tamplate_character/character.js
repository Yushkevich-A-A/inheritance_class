export class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  get name() {
    return this._name;
  }

  set name(data) {
    if (data.length < 2 || data.length > 10) {
      throw new Error('имя персонажа должнобыть не меньше 2 и не больше 1 символов');
    }
    this._name = data;
  }

  get type() {
    return this._type;
  }

  set type(data) {
    switch (data) {
      case 'Bowman':
      case 'Swordsman':
      case 'Magician':
      case 'Daemon':
      case 'Undead':
      case 'Zombie':
        this._type = data;
        break;
      default:
        throw new Error('неверно указан тип персонажа');
    }
  }
}
