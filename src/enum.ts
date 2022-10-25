//  ENUM

enum Direction1 {
    Up,
    Down,
    Right,
    Left,
  }
  enum Direction2 {
    Up = "Up",
    Down = "Down",
    Right = "Right",
    Left = "Left",
  }
  
  console.log("Up ==>>> ", Direction2.Up);
  console.log("Down ==>>> ", Direction2.Down);
  console.log("Right ==>>> ", Direction2.Right);
  console.log("Left ==>>> ", Direction2.Left);
  