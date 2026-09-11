# DevJobs

One interactive AI topic a day, for my friends.

**Live:** https://devkancheti4-design.github.io/devjobs/

How AI works → what AI companies actually do → how AI takes jobs and gives jobs.
Every day is one page you can play with: drag the weights of a real neuron, break a
training run with a bad learning rate, watch a tiny language model pick its next word,
and scrub through the 75 years of people who built this.

## Posting a new day

Everything lives in [`days.js`](days.js). No build step, no server, no framework.

1. Copy the last `{ ... }` block inside `DAYS`.
2. Bump `n`, set today's `date`, write a new `title`, `hook` and `blocks`.
3. Put it at the **top** of the `DAYS` array (newest first).
4. Ship it:

```bash
./deploy.sh "day 2"
```

`deploy.sh` checks `days.js` for syntax errors, bumps the cache key so nobody gets a
stale mix of new page + old content, pushes, and waits for GitHub Pages to finish.

Older days stay reachable at `?day=1`, `?day=2`, … and show up in the **Past days**
list automatically once there is more than one.

### Block types

| block | what it renders |
|---|---|
| `{t:'p', html:'…'}` | a paragraph (HTML allowed) |
| `{t:'h', text:'…'}` | a section heading |
| `{t:'note', title:'…', html:'…'}` | highlighted callout |
| `{t:'list', items:[…]}` | arrow list |
| `{t:'quote', text:'…', who:'…'}` | pull quote |
| `{t:'lab', id:'…'}` | an interactive widget |

### Widgets you can drop into any day

`nesting` (AI/ML/deep learning/LLM rings) · `neuron` (train a perceptron by hand) ·
`descent` (gradient descent + learning rate) · `tokens` (live tokenizer) ·
`predict` (bigram language model with a temperature slider) · `timeline` (19 people
who built AI) · `quiz` (from the day's `quiz` array)

Adding a new widget: write a `labX(host, day)` function in `index.html` and register it
in the `LABS` map at the bottom of the labs script.

## Local preview

```bash
python3 -m http.server 8127 --directory .
```

Then open http://localhost:8127

## Notes

- Quiz scores, reactions and the streak are stored in each reader's own browser (`localStorage`). Nothing is uploaded anywhere.
- The roadmap on the home page comes from the `UPCOMING` array in `days.js` — edit it whenever the plan changes.
