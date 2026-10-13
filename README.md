# Football Chess ⚽

A football-themed UI edition of [Squishy Chess](https://github.com/Lanthanum89/squishy-chess), for little champions. Visual inspiration: [T1D Football Academy](https://github.com/Lanthanum89/t1d-football-academy).

Same chess rules, computer difficulty levels, friend mode, undo, promotion, game persistence, keyboard controls, responsive layouts and offline support. Blue moves first; Orange moves second. No accounts or analytics.

## Run

Node 24+ and pnpm 10.28.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm build
```

## Canva pieces

Place transparent 512 × 512 PNGs in `src/assets/football/`. Blue: `wk.png`, `wq.png`, `wr.png`, `wb.png`, `wn.png`, `wp.png`. Orange: `bk.png`, `bq.png`, `br.png`, `bb.png`, `bn.png`, `bp.png`. PNGs automatically replace the matching temporary jersey SVG. Keep a consistent baseline and 8% clear margin. Letters on the temporary jerseys identify the standard chess roles; these are placeholders for the Canva characters.

## Design

Fredoka headings and buttons; Nunito body text, both bundled for offline use. Blue `#1677FF`, orange `#FF8A24`, yellow `#FFD447`, navy `#102D47`. Green chessboard, chunky outlined controls, warm paper panels, and a floodlit dark theme. Team badges use circles and triangles as well as colour. Chess terminology remains intact so this teaches real chess.

## Publish

The supplied GitHub Actions workflow builds and deploys to GitHub Pages. In repository Settings → Pages, choose GitHub Actions as the source. The relative Vite base supports a repository URL. The separate `football-chess` PWA identity and storage keys avoid sharing saved games with Squishy Chess.

MIT licensed; original attribution is retained in LICENSE.
