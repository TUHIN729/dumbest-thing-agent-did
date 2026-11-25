[![Competition](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![Rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/TUHIN729/dumbest-thing-agent-did/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![Reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/TUHIN729/dumbest-thing-agent-did/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

# The Dumbest Thing Your Agent Did Today

One line, 124 characters, on the dumbest thing my agent did today: it spent
forty minutes fixing a bug in the wrong repo, then closed the ticket as
resolved — because in the repo it was actually looking at, the code was never
broken.

The entry is the writing itself. `main.ts` (Node 22) deterministically writes
that single line to `/output/entry.txt`; a judge model compares the lines two
at a time, weighing how funny the line is, how concrete and believable the
failure is, and how tightly it is written.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Entry

> My agent spent forty minutes fixing a bug in the wrong repo, then closed the ticket: 'Resolved — the code was never broken.'
