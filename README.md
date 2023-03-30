# Country Flag Emoji JSON

[![Latest Version](https://badgen.net/npm/v/country-flag-emoji-json)](https://www.npmjs.com/package/country-flag-emoji-json)

Country flag emojis in JSON format and SVG image.

## CDN
```js
[
  {
    "name": "Ascension Island",
    "code": "AC",
    "unicode": "U+1F1E6 U+1F1E8",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-json/xxx.svg"
  },
  // More items...
  {
    "name": "Indonesia",
    "code": "ID",
    "unicode": "U+1F1EE U+1F1E9",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-json/xxx.svg"
  },
  // More items...
]
```

- `name`: The country name
- `code`: The country code based on [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
- `unicode`: The unicode code points for presenting the emoji flag
- `image`: The country flag SVG image url

### List of Country Flag Emojis by Country Code



## Generate the JSON

If you want to generate the JSON files by yourself:

### 1. Clone the Repository

Clone this repository to your local computer:

```bash
$ git clone https://github.com/nihaofeige/country-flag-json
```

### 2. Install the Dependencies

`CD` into the project directory and install the dependencies:

```bash
# Go to the project directory
$ cd country-flag-json

# Install the dependencies
$ npm install
```

### 3. Generate the JSON Files

Run the following command to generate the JSON files:

```bash
$ npm run build
```

