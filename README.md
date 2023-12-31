# chinese-tokenizer-module

Took the below npm package and made it module and es6 syntax and included the dictionary in the project as a js file

The hope is so that I can use it in my sveltekit project without having issues with the server routes returning 500 because they cannot find the binary file that i'm trying to include (the .u8 file)

So now the syntax for using this is just

```js
import tokenize from 'chinese-tokenizer-module'

console.log(JSON.stringify(tokenize('我是中国人。'), null, '  '))
console.log(JSON.stringify(tokenize('我是中國人。'), null, '  '))
```

This means that occassionally the src/dict.js file needs to be updated with the latest cedict_ts.u8 contents but you already knew that and blah blah

Thanks to Yichuan Shen for making this in the first place!




# chinese-tokenizer [![Build Status](https://travis-ci.org/yishn/chinese-tokenizer.svg?branch=master)](https://travis-ci.org/yishn/chinese-tokenizer)

Simple algorithm to tokenize Chinese texts into words using [CC-CEDICT](https://cc-cedict.org/). You can try it out at [the demo page](https://yishn.github.io/chinese-tokenizer/). The code for the demo page can be found in the [`gh-pages` branch](https://github.com/yishn/chinese-tokenizer/tree/gh-pages) of this repository.

## How this works

This tokenizer uses a simple greedy algorithm: It always looks for the longest word in the CC-CEDICT dictionary that matches the input, one at a time.

## Installation

Use npm to install:

~~~
npm install chinese-tokenizer --save
~~~

## Usage

Make sure to provide the [CC-CEDICT](https://cc-cedict.org/) data.

~~~js
const tokenize = require('chinese-tokenizer').loadFile('./cedict_ts.u8')

console.log(JSON.stringify(tokenize('我是中国人。'), null, '  '))
console.log(JSON.stringify(tokenize('我是中國人。'), null, '  '))
~~~

Output:

~~~js
[
  {
    "text": "我",
    "traditional": "我",
    "simplified": "我",
    "position": { "offset": 0, "line": 1, "column": 1 },
    "matches": [
      {
        "pinyin": "wo3",
        "pinyinPretty": "wǒ",
        "english": "I/me/my"
      }
    ]
  },
  {
    "text": "是",
    "traditional": "是",
    "simplified": "是",
    "position": { "offset": 1, "line": 1, "column": 2 },
    "matches": [
      {
        "pinyin": "shi4",
        "pinyinPretty": "shì",
        "english": "is/are/am/yes/to be"
      }
    ]
  },
  {
    "text": "中國人",
    "traditional": "中國人",
    "simplified": "中国人",
    "position": { "offset": 2, "line": 1, "column": 3 },
    "matches": [
      {
        "pinyin": "Zhong1 guo2 ren2",
        "pinyinPretty": "Zhōng guó rén",
        "english": "Chinese person"
      }
    ]
  },
  {
    "text": "。",
    "traditional": "。",
    "simplified": "。",
    "position": { "offset": 5, "line": 1, "column": 6 },
    "matches": []
  }
]
~~~

## API

### `chineseTokenizer.loadFile(path)`

Reads the [CC-CEDICT](https://cc-cedict.org/) file from given `path` and returns a tokenize function based on the dictionary.

### `chineseTokenizer.load(content)`

Parses [CC-CEDICT](https://cc-cedict.org/) string content from `content` and returns a tokenize function based on the dictionary.

### `tokenize(text)`

Tokenizes the given `text` string and returns an array with tokens of the following form:

~~~js
{
  "text": <string>,
  "traditional": <string>,
  "simplified": <string>,
  "position": { "offset": <number>, "line": <number>, "column": <number> },
  "matches": [
    {
      "pinyin": <string>,
      "pinyinPretty": <string>,
      "english": <string>
    },
    ...
  ]
}
~~~
#   c h i n e s e - t o k e n i z e r - m o d u l e 
 
 #   c h i n e s e - t o k e n i z e r - m o d u l e 
 
 