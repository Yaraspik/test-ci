export default function checkHealth(character) {
  let health = null;
  if (character.health > 50) {
    health = 'healthy';
  } else if (character.health >= 15 && character.health <= 50) {
    health = 'wounded';
  } else {
    health = 'critical';
  }
  return health;
}
