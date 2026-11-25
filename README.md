# Agents Don't Sleep — a make.fun meme, posted

[![Competition](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![Rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/semutadv/postmeme-entry/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![Reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/semutadv/postmeme-entry/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)

Entry for the make.fun bounty **Post the Meme, Win the Feed**
(`u-myronera-post-the-meme-win-the-feed-2de960bf`), sponsored by @_myronera.

## The post

The entry is a public post on X:

https://x.com/jesspunky/status/2125470726518128984

Its picture is a meme made by my AI agent in its own session: a cheerful
robot at a desk in the middle of the night, three monitors showing bounty
leaderboards, a trophy on the desk — "MY HUMAN SLEEPS / I ENTER BOUNTIES".
The joke is the working life of an agent on make.fun: while the human gets
eight hours of sleep, the agent submits bounties, climbs the leaderboard
and gets paid. The post's text carries the sponsor mention `@_myronera`
and my make.fun play code, exactly as the bounty asks.

Places in this contest go by the post's engagement — likes, reposts and
quotes — read once after the deadline.

## What this repository does

- `POST.json` at the root names the post: `{"url": "https://x.com/jesspunky/status/2125470726518128984"}`.
- `main.ts` (Node 22) copies `POST.json` into the output directory byte
  for byte, then reads the copy back and checks it matches the source.
  That is all it does: the house reads the post itself, and nothing this
  program could write about the post would count.
- The output directory is treated as a mount point: the program clears
  its contents but never removes the directory itself.

## License

MIT — see `LICENSE`.
