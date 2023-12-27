export class DnDCharacter {
  private hitpoints: number = 10
  private strength: number = DnDCharacter.generateAbilityScore() // 强度
  private dexterity: number = DnDCharacter.generateAbilityScore() // 敏捷
  private constitution: number = DnDCharacter.generateAbilityScore() //体质
  private intelligence: number = DnDCharacter.generateAbilityScore() // 智力
  private wisdom: number = DnDCharacter.generateAbilityScore() // 智慧
  private charisma: number = DnDCharacter.generateAbilityScore() // 魅力

  constructor() {
    this.hitpoints = this.hitpoints + DnDCharacter.getModifierFor(this.constitution)
  }

  public static generateAbilityScore(): number {
    let numbers: Array<number> = []
    for (let i = 0; i < 3; i++) {
      numbers.push(Math.floor(Math.random() * 6) + 1)
    }
    numbers.sort((a, b) => a - b).shift()
    return numbers.reduce((acc, curr) => acc += curr, 0)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}
