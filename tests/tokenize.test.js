    // // import {join} from 'path'
    // // import t from 'tap'
    // // const tokenize = require('..').loadFile(join(__dirname, 'cedict_ts.u8'))
    // // const tokenize = require('..').loadFile(join(__dirname, 'cedict.js'))
    // import tokenize from 'chinese-tokenizer-module'
    // import assert from 'assert'



    // t.test('should tokenize simplified Chinese text', async t => {
    //     let tokens = tokenize('我是中国人。')
    //     // console.log(tokens)
    //     let tokenTexts = tokens.map(token => token.text)

    //     t.assert(tokens.slice(0, -1).every(token => token.matches.length > 0))
    //     t.strictDeepEqual(tokenTexts, ['我', '是', '中国人', '。'])
    // })

    // t.test('should tokenize traditional Chinese text', async t => {
    //     let tokens = tokenize('我是中國人。')
    //     // console.log(tokens)

    //     let tokenTexts = tokens.map(token => token.text)

    //     t.assert(tokens.slice(0, -1).every(token => token.matches.length > 0))
    //     t.strictDeepEqual(tokenTexts, ['我', '是', '中國人', '。'])
    // })

    // t.test('should tokenize text that includes both simplified and traditional Chinese characters', async t => {
    //     let tokens = tokenize('中国人中國人。')
    //     // console.log(tokens)
    //     let tokenTexts = tokens.map(token => token.text)

    //     t.assert(tokens.slice(0, -1).every(token => token.matches.length > 0))
    //     t.strictDeepEqual(tokenTexts, ['中国人', '中國人', '。'])
    // })

    // t.test('should detect simplified 么 correctly', async t => {
    //     let tokens = tokenize('你吃饭了么？')
    //     // console.log(tokens)
    //     let tokenTexts = tokens.map(token => token.simplified)

    //     t.assert(tokens.slice(0, -1).every(token => token.matches.length > 0))
    //     t.strictDeepEqual(tokenTexts, ['你', '吃饭', '了', '么', '？'])
    // })

    // t.test('should tokenize non-Chinese text', async t => {
    //     let tokens = tokenize('我的名字是 Daniel Müller。')
    //     // console.log(tokens)
    //     let tokenTexts = tokens.map(token => token.text)

    //     t.assert(tokens.slice(0, 4).every(token => token.matches.length > 0))
    //     t.strictDeepEqual(tokenTexts, ['我', '的', '名字', '是', ' ', 'Daniel', ' ', 'Müller', '。'])
    // })
import tokenize from 'chinese-tokenizer-module';

test('should tokenize simplified Chinese text', () => {
  const tokens = tokenize('我是中国人。');
  const tokenTexts = tokens.map(token => token.text);
  expect(tokens.slice(0, -1).every(token => token.matches.length > 0)).toBe(true);
  expect(tokenTexts).toEqual(['我', '是', '中国人', '。']);
});

test('should tokenize traditional Chinese text', () => {
  const tokens = tokenize('我是中國人。');
  const tokenTexts = tokens.map(token => token.text);
  expect(tokens.slice(0, -1).every(token => token.matches.length > 0)).toBe(true);
  expect(tokenTexts).toEqual(['我', '是', '中國人', '。']);
});

test('should tokenize text that includes both simplified and traditional Chinese characters', () => {
  const tokens = tokenize('中国人中國人。');
  const tokenTexts = tokens.map(token => token.text);
  expect(tokens.slice(0, -1).every(token => token.matches.length > 0)).toBe(true);
  expect(tokenTexts).toEqual(['中国人', '中國人', '。']);
});

test('should detect simplified 么 correctly', () => {
  const tokens = tokenize('你吃饭了么？');
  const tokenTexts = tokens.map(token => token.simplified);
  expect(tokens.slice(0, -1).every(token => token.matches.length > 0)).toBe(true);
  expect(tokenTexts).toEqual(['你', '吃饭', '了', '么', '？']);
});

test('should tokenize non-Chinese text', () => {
  const tokens = tokenize('我的名字是 Daniel Müller。');
  const tokenTexts = tokens.map(token => token.text);
  expect(tokens.slice(0, 4).every(token => token.matches.length > 0)).toBe(true);
  expect(tokenTexts).toEqual(['我', '的', '名字', '是', ' ', 'Daniel', ' ', 'Müller', '。']);
});
