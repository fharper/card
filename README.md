![The almighty card](/assets/screenshot.png)

The idea and original [source code](https://github.com/bnb/bitandbang/) created by Tierney Cyren ([@bitandbang](https://github.com/bnb)). The [version with the ascii picture](https://github.com/eranshmil/card) if from [Eran Shmil](https://github.com/eranshmil).

# Usage

## Generate avatars

To avoid running image-to-ascii when running npx, I generated the avatars to txt files.

```bash
npm run gen
```

## Show the card

Via npx:

```bash
npx fharper

// render the avatar as colorized characters
npx fharper --fg
```