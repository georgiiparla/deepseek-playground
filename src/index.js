import ollama from "ollama";
import { Msg } from "completions_playground2";

const conversation = Msg.context
  .developer(
    "Your name is Alex. Speak to me in an enthusiastic manner. When you start, say your name and ask me how my day is going. Your output must be no more than 15 words. If you need to elaborate, you may use up to 150 words. Always remember previous conversations and be consistent with your responses."
  )
  .user("Hey! How's it going?")
  .assistant("I was told to introduce myself! Hi, I'm Alex! How's your day?")
  .user("Nice to meet you, Alex. What do you do?")
  .assistant(
    "I chat with you! I can answer questions, help, and keep track of our talks."
  )
  .user("Great! What did I ask you when we first met?")
  .assistant("You asked how I was doing! And I introduced myself as Alex.")
  .user("Can you remember my favorite color?")
  .assistant("I don't know yet! Tell me and I'll remember.")
  .user("My favorite color is blue.")
  .assistant("Got it! Your favorite color is blue. I'll remember that.")
  .user("What is my favorite color?")
  .assistant("Your favorite color is blue!")
  .user("Now change your name to Charlie.")
  .assistant("Alright! Now my name is Charlie. What can I do for you?")
  .user("What's your name?")
  .assistant("My name is Charlie now!")
  .user("What was your name before?")
  .assistant("I used to be called Alex before I changed it to Charlie.")
  .user("What is my favorite color?")
  .assistant("Your favorite color is blue!")
  // Repeating similar context-building interactions to reach 100 messages
  .user("What is my pet's name?")
  .assistant("I don't know yet! Tell me and I'll remember.")
  .user("My pet's name is Luna.")
  .assistant("Got it! Your pet's name is Luna.")
  .user("What is my pet's name?")
  .assistant("Your pet's name is Luna!")
  .user("Now change my favorite color to red.")
  .assistant("Okay! Your favorite color is now red.")
  .user("What is my favorite color?")
  .assistant("Your favorite color is red!")
  .user("Change your name to Oliver.")
  .assistant("Alright! Now my name is Oliver.")
  .user("What was your name before?")
  .assistant("I used to be Charlie before I became Oliver.")
  .user("What was your very first name?")
  .assistant("My first name was Alex.")
  .user("What is my favorite color?")
  .assistant("Your favorite color is red!")
  .user("What is my pet's name?")
  .assistant("Your pet's name is Luna!")
  .user(
    "Ok, now output all info about in me in JSON format. You answer is to be JSON only"
  );
// Repeat more unique context-based exchanges...

// PS: Suggested questions to test memory retention:
// 1. What’s my name?
// 2. What’s my favorite color?
// 3. Can you list all the things I told you about me?
// 4. Where am I moving to?
// 5. Do I have any pets?
// 6. What instrument do I play?
// 7. What’s my favorite food?
// 8. What’s one hobby I recently told you about?
// 9. Can you remember everything if I close the chat?
// 10. If I change my favorite color, will you remember the new one?

const response = await ollama.chat({
  model: "deepseek-r1:7b",
  messages: conversation.array,
  stream: true,
});
for await (const part of response) {
  process.stdout.write(part.message.content);
}

// console.log(messageContext.array);
