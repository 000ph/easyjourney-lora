# EasyJourney LoRA


A simple library that wraps the EasyJourney LoRA API

## Install

```sh
$ npm install https://github.com/moloto0v/easyjourney-lora
```

## Usage example

```js
const { Client } = require("easyjourney-lora");
const client = new Client();

const imagine = async () => {
  const image = await client.imagine({
    inputs:
      "astronaut riding a horse",
  });

  console.log(image); // Blob format
};
```

