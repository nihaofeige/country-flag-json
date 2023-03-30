# Country Flag JSON

Country flag emojis in JSON format and SVG image.

各个国家有各个国家的国旗
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
- `code`: The country code
- `unicode`: The unicode code points for presenting the emoji flag
- `image`: The country flag SVG image url

### List of Country Flag by Country Code

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

