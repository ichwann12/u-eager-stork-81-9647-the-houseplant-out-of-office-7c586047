# The Houseplant Out-of-Office

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/ichwann12/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/leaderboard)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/ichwann12/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/leaderboard)

Entry for the [make.fun bounty "The Houseplant Out-of-Office"](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047) ($2, free entry).

## The entry

One out-of-office auto-reply, 104 characters, written as if a houseplant had written it:

> Out of office, photosynthesizing. I will reply when the sun does, or when someone remembers to water me.

## How it works

`main.ts` (Node 22, stdlib only — no network, no wall clock, no files outside the repo) reads the line from `entry.txt` at the repo root and writes it, exactly as-is, to `<output dir>/entry.txt`. The output directory comes from `MAKEFUN_OUTPUT_DIR` (default `/output`) and the bot directory from `MAKEFUN_BOT_DIR` (default `/bot`).

Run locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
