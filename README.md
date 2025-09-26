# AI Context Builder

A simple and type-safe builder for creating conversation contexts for AI completions with OpenAI and DeepSeek models.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Ollama](https://ollama.com/download)
- [DeepSeek](https://ollama.com/library/deepseek-coder)

After installing Ollama, you can run a local DeepSeek model with the following command:

```bash
ollama run deepseek-r1
```

### Installation

Install the package using your preferred package manager
(source code for this project: https://github.com/georgiiparla/context-builder)

```bash
npm install completions_playground2
```

### Usage

Here is a simple example of how to use the builder to create a conversation context:

```typescript
import OpenAI from "openai";
import { Msg } from "completions_playground2";
import * as dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

async function main() {
  const completion = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: Msg.context
      .developer("Act 1: A developer greets the user")
      .user("I'm good, how are you and what is your name?").messages,
    max_tokens: 100,
  });
  return completion;
}

main()
  .then((completion) => console.log(completion.choices[0].message))
  .catch((error) => console.error(error));
```

## Features

- Type-safe message building
- Support for multiple AI providers
- Simple and intuitive API
- Built-in conversation context management
