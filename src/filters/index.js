export function truncateWords(str, count) {
  if (!str) return str;
  return str.split(" ").slice(0, count).join(" ");
}

export function truncateInstructions(instructions) {
  return instructions.length > 100
    ? instructions.slice(0, 100) + "..."
    : instructions;
}
