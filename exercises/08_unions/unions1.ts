// TODO: Define `Message` as a union of the string literals used below.
type Message = never;

const messages: Message[] = ["Resize", "Move", "Echo", "ChangeColor", "Quit"];

for (const message of messages) {
  console.log(message);
}

// @ts-expect-error This message type doesn't exist.
const invalid: Message = "Jump";
console.log(invalid);
