import { Character } from './tamplate_character/character';

export class Zombie extends Character {
  constructor(...args) {
    super(args, 40, 10);
  }
}
