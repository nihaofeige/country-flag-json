const fs = require('fs-extra');
const axios = require('axios')
const _ = require('lodash');
const meta = require('../package.json');

const getFlagEmojis = async (pretty = false) => {
  const data = await fs.readFile('data/emoji-sequences.txt', 'utf8');

  const emojis = data.split('\n').map(row => {
    const cols = row.split(';').map(col => col.trim());

    if (cols.length < 3) {
      return null;
    }

    if (!['RGI_Emoji_Flag_Sequence', 'RGI_Emoji_Tag_Sequence'].includes(cols[1])) {
      return null;
    }
    const dir = './images';
    const files = fs.readdirSync(dir)
    const components = [];
    files.forEach(item => {
      if(item.indexOf('.svg') != -1){
        components.push(item)
       }
    });
    let list = components.map(item => {
      return item.substring(0, item.indexOf('.'))
    });

    const codePoints = cols[0].split(' ').map(hex => Number(`0x${hex}`));

    const name = cols[2].split('#')[0].replace('flag:', '').trim();
    const code = codePoints.length === 2
      ? codePoints.map(codePoint => String.fromCodePoint(codePoint - 0x1F1A5)).join('') // Convert to ISO 3166-1 alpha-2 country code
      : name.toUpperCase();
    // 判断code是否在list中
    if (list.includes(code)) {
      return {
        name,
        code,
        codesp: code.toLowerCase(),
        // emoji: codePoints.map(codePoint => String.fromCodePoint(codePoint)).join(''),
        unicode: codePoints.map(codePoint => `U+${codePoint.toString(16).toUpperCase()}`).join(' '),
        image: `//sitemap-myqcloud.com/images/countryflag/${code}.svg` // 生成服务器地址 要修改
      };
    }
  }).filter(Boolean);

  await fs.outputJson('dist/index.json', emojis, { spaces: pretty ? 2 : 0 });

  const byCodes = _.zipObject(
    emojis.map(emoji => emoji.code),
    emojis.map(({ code, ...emoji }) => ({ ...emoji }))
  );

  await fs.outputJson('dist/by-code.json', byCodes, { spaces: pretty ? 2 : 0 });

  return emojis;
};

const downloadEmojiImages = async (emojis) => {
  const emojisChunk = _.chunk(emojis, 10);
  for (let i = 0; i < emojisChunk.length; i++) {
    await Promise.all(emojisChunk[i].map(async emoji => {
      const filename = emoji.code.replace(/\s/g, '-') + '.svg';
      const file = `images/${filename}`;

      const exists = await fs.pathExists(file);

      if (!exists) {
        console.log(`Downloading flag image: [${emoji.code}]...`);

        const res = await axios.get(`https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/${emoji.code}.svg`);

        await fs.outputFile(file, res.data);
      }

      return fs.copy(file, `dist/images/${emoji.code}.svg`);
    }));
  }
};

(async () => {
  const args = process.argv.slice(2);
  const pretty = args.length > 0 && args[0] === '--pretty';

  await fs.emptydir('dist');

  const emojis = await getFlagEmojis(pretty);

  await downloadEmojiImages(emojis);

  console.log('✓ Done');
})();
