//Numeric enum
enum Direction {
  UP,
  Down,
  Left,
  Right,
}

let direction: number[] = [1, 2, 3, 4];

console.log(Direction.Left);

// String enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

console.log("Direction ", Direction.Down);
console.log("Color: ", Color.Green);
