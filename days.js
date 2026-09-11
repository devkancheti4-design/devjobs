/* ============================================================
   DevJobs content file.
   To post a new day: copy the last {...} block, bump `n`, change
   the date/title/blocks, and put it at the TOP of the DAYS array.
   Block types you can use:
     {t:'p',    html:'paragraph, HTML allowed'}
     {t:'h',    text:'section heading'}
     {t:'note', title:'...', html:'...'}        -> highlighted callout
     {t:'list', items:['...','...']}
     {t:'lab',  id:'neuron'}                    -> interactive widget
        ids: nesting | neuron | descent | tokens | predict | timeline | quiz
     {t:'quote', text:'...', who:'name, year'}
   ============================================================ */

/* ---- Site-level stuff: your byline and the pinned note. Edit freely. ---- */
const SITE = {
  author: 'Devieswar',
  note: {
    title: 'one thing I am hyper OCD about',
    lines: [
      'One topic. Every single day. No skipping, no filler, and nothing posted here that I do not understand myself first.',
      'You do not need to know anything to start — you only need to want to know how the thing that is reshaping your career actually works.',
      '<strong>If you are ambitious and hungry, join in.</strong> Use it, break it, argue with it, tell me what did not land — and I will fix it the same day.'
    ],
    sign: 'Devieswar'
  }
};

const DAYS = [
  {
    n: 1,
    date: '2026-09-11',
    slug: 'what-is-ai',
    tag: 'Basics',
    read: '8 min',
    title: 'What is AI — and who actually made it?',
    hook: 'Nobody invented AI on a Tuesday afternoon. It was built over 75 years by people who mostly got laughed at first. Day 1: what the thing actually is, and whose fingerprints are on it.',
    blocks: [
      { t: 'p', html: 'Everyone in our group uses ChatGPT. Almost nobody can say what it <em>is</em>. That is the whole point of this site — one topic a day, and you leave actually knowing something instead of having vibes about it.' },
      { t: 'p', html: 'Start with the word. <strong>Artificial intelligence</strong> is not one technology. It is a 70-year-old research goal — <em>make machines do things that need intelligence when humans do them</em> — and a pile of very different techniques that got stacked on top of each other over time.' },

      { t: 'h', text: '1. The four rings' },
      { t: 'p', html: 'The single most useful picture. Click each ring.' },
      { t: 'lab', id: 'nesting' },
      { t: 'note', title: 'The one line to remember', html: 'AI is the <em>goal</em>. Machine learning is the <em>method that won</em>. Deep learning is the <em>flavour of ML that scaled</em>. An LLM is <em>one deep learning model, trained on text</em>. ChatGPT is a <em>product</em> wrapped around one of those models.' },

      { t: 'h', text: '2. What "learning from data" actually means' },
      { t: 'p', html: 'Old-school AI was: a human writes the rules. <code>IF temperature &gt; 100 THEN boiling</code>. That works for chess openings and tax forms. It fails hard for "is this a cat", because nobody can write the rules for a cat.' },
      { t: 'p', html: 'Machine learning flips it. You do not write the rules — you write a machine with <strong>knobs</strong> (called weights), show it thousands of examples, and mechanically turn the knobs until the mistakes get small. That is it. That is the whole trick. Everything else is engineering on top.' },
      { t: 'p', html: 'Here is the smallest possible version of that machine: a single artificial neuron. It takes two numbers, multiplies each by a weight, adds a bias, and says yes or no. Drag the knobs and try to separate the dots yourself — then hit <strong>Train it</strong> and watch the machine find the line faster than you did.' },
      { t: 'lab', id: 'neuron' },
      { t: 'note', title: 'Why this matters', html: 'You just built a 3-parameter model. GPT-class models have <strong>hundreds of billions</strong> of those knobs, stacked in layers. Same idea, absurd scale. Nothing magical gets added — the magic <em>is</em> the scale.' },

      { t: 'h', text: '3. How the knobs get turned: gradient descent' },
      { t: 'p', html: '"Turn the knobs until mistakes get small" sounds vague. It is actually one precise move, repeated billions of times: measure how wrong you are (the <strong>loss</strong>), figure out which direction each knob should move to be less wrong (the <strong>gradient</strong>), take a small step that way. The size of that step is the <strong>learning rate</strong> — and it is where most beginners get burned.' },
      { t: 'lab', id: 'descent' },
      { t: 'note', title: 'Try to break it', html: 'Push the learning rate past 0.9. The ball explodes out of the valley instead of settling in it. Real training runs that cost crores of rupees die exactly like this — that is why labs babysit loss curves.' },

      { t: 'h', text: '4. So what is ChatGPT doing?' },
      { t: 'p', html: 'A language model does <strong>one</strong> thing: given some text, guess the next chunk. Then it staples that guess onto the end and guesses again. That is the entire loop. Nothing in there looks up an answer in a database, and nothing in there "knows" a fact the way you know your own phone number.' },
      { t: 'p', html: 'First, the text gets chopped into <strong>tokens</strong> — not words, not letters, something in between — and each token becomes a number, because the model can only do maths. Type your own name and watch it get chopped:' },
      { t: 'lab', id: 'tokens' },
      { t: 'p', html: 'Then the model predicts the next token, as a probability over its whole vocabulary. The toy below is a real (tiny) model — it learned its statistics from the paragraph of text shown under it, and nothing else. Click words to write a sentence with it, and watch the bars change.' },
      { t: 'lab', id: 'predict' },
      { t: 'note', title: 'Why it hallucinates', html: 'It is picking likely-sounding next tokens, not true ones. A confident wrong answer and a confident right answer are produced by the exact same machinery. Real models are trained much harder to be correct — but the failure mode never fully goes away, because "sounds right" and "is right" are different targets.' },

      { t: 'h', text: '5. Who made it?' },
      { t: 'p', html: 'Honest answer: nobody, and about two hundred people. There is no Edison of AI. What there is, is a chain — each generation handed the next one a piece, and several of them spent decades being told their idea was a dead end.' },
      { t: 'p', html: 'Drag the timeline. Every stop is a person and the exact thing they did.' },
      { t: 'lab', id: 'timeline' },

      { t: 'h', text: '6. Ilya Sutskever, specifically' },
      { t: 'p', html: 'Since you asked about him — he is the cleanest example of how this actually happened, because he is personally attached to <strong>three</strong> of the turning points.' },
      { t: 'list', items: [
        '<strong>2012 — AlexNet.</strong> As Geoffrey Hinton\'s PhD student in Toronto, with Alex Krizhevsky, he entered a neural network in the ImageNet competition. It cut the error rate from about 26% to about 15% — a demolition, not an improvement. That single result is why every lab pivoted to deep learning and why Nvidia is worth what it is worth.',
        '<strong>2014 — sequence to sequence.</strong> With Oriol Vinyals and Quoc Le at Google, he showed a neural net could take a sentence in and produce a sentence out, end to end. Machine translation, summarising, chatting — all of it descends from this shape.',
        '<strong>2015 onwards — the scaling bet at OpenAI.</strong> He co-founded OpenAI and, as chief scientist, was one of the loudest believers that you do not need a new idea, you need to make the same idea much bigger. Most of the field thought that was naive. GPT-2, GPT-3 and ChatGPT are what that bet paid out.'
      ]},
      { t: 'p', html: 'He was also on the OpenAI board that removed Sam Altman in November 2023 — Altman was back within days, and Sutskever publicly said he regretted taking part. He left OpenAI in May 2024 and started <strong>Safe Superintelligence Inc.</strong>, a lab with no product line, whose stated plan is to build one safe superintelligent system and ship nothing else on the way.' },
      { t: 'quote', text: 'It may be that today\'s large neural networks are slightly conscious.', who: 'Ilya Sutskever, 2022 — a post that got the entire field arguing for a week' },

      { t: 'h', text: '7. The people the story usually skips' },
      { t: 'list', items: [
        '<strong>Seppo Linnainmaa (1970)</strong> — published the algorithm we now call backpropagation, years before anyone applied it to neural networks. He almost never gets named.',
        '<strong>Fei-Fei Li (2009)</strong> — built ImageNet, 14 million labelled images. Without her dataset there is no AlexNet moment. The models get the credit; the data made it possible.',
        '<strong>Nvidia\'s CUDA team (2007)</strong> — made graphics cards programmable for general maths. Deep learning ran on gaming hardware because of a business decision made for gamers.',
        '<strong>The annotators.</strong> Tens of thousands of people, many in Kenya, India and the Philippines, labelling data and rating model answers for low pay. Modern models are polite and useful because humans sat there ranking outputs. That is a job AI created, and not a glamorous one.'
      ]},

      { t: 'h', text: 'Check yourself' },
      { t: 'lab', id: 'quiz' },

      { t: 'p', html: '<strong>Tomorrow:</strong> we open the neural network itself — layers, what a "parameter" is, and why adding more of them made something qualitatively new appear. Bring your brain.' }
    ],
    quiz: [
      {
        q: 'Which of these is the correct nesting?',
        options: ['LLM > AI > machine learning', 'AI > machine learning > deep learning > LLM', 'Machine learning > AI > deep learning', 'They all mean the same thing'],
        a: 1,
        why: 'AI is the broad goal, ML is the approach where systems learn from data, deep learning is ML with many-layered neural networks, and an LLM is one kind of deep learning model trained on text.'
      },
      {
        q: 'What is a "weight" in a neural network?',
        options: ['A rule a programmer wrote', 'A number the training process adjusts', 'How much GPU memory the model needs', 'The size of the training dataset'],
        a: 1,
        why: 'Weights are the knobs. Training = mechanically adjusting them so the loss goes down. Nobody sets them by hand.'
      },
      {
        q: 'John McCarthy is best known for which contribution?',
        options: ['Inventing the perceptron', 'Coining the term "artificial intelligence" and organising the 1956 Dartmouth workshop', 'Writing the backpropagation algorithm', 'Founding DeepMind'],
        a: 1,
        why: 'The name "artificial intelligence" comes from McCarthy\'s 1955 proposal for the Dartmouth Summer Research Project, held in 1956 — the field\'s official starting gun.'
      },
      {
        q: 'What did AlexNet (2012) actually prove?',
        options: ['That computers can beat humans at chess', 'That deep neural networks trained on GPUs beat hand-engineered computer vision by a huge margin', 'That language models can chat', 'That AI is conscious'],
        a: 1,
        why: 'Krizhevsky, Sutskever and Hinton cut the ImageNet top-5 error from roughly 26% to roughly 15%. The gap was so large that the field switched approaches almost overnight.'
      },
      {
        q: 'When an LLM states a confident falsehood, the best explanation is:',
        options: ['Its database has a bad record', 'It is lying on purpose', 'It generates likely-sounding next tokens, and "sounds right" is not the same target as "is right"', 'Someone hacked it'],
        a: 2,
        why: 'There is no lookup table inside. Correct answers and hallucinations come out of the same next-token machinery — which is exactly why verification matters.'
      },
      {
        q: 'Who has the strongest claim to "the inventor of AI"?',
        options: ['Alan Turing', 'Ilya Sutskever', 'Geoffrey Hinton', 'No single person — it is a 75-year chain of contributions'],
        a: 3,
        why: 'Turing framed the question, McCarthy named the field, Rosenblatt built the first learning machine, Hinton/LeCun/Bengio kept neural nets alive through two winters, Li built the data, Sutskever and others scaled it. Anyone selling you a single inventor is selling you a story.'
      }
    ]
  },
  {
    n: 2,
    date: '2026-09-12',
    slug: 'who-builds-it',
    tag: 'The people',
    read: '9 min',
    title: 'Who actually builds this — and what every one of them gets paid',
    hook: 'Five companies are bending the whole job market, and together they employ fewer people than one campus of Infosys. Here are their names, their headcounts, the exact ladders they climbed, and the money — from ₹5.8 lakh to $1.39 million.',
    blocks: [
      { t: 'p', html: 'Yesterday was the machine. Today is the people — because "AI is taking jobs" is a sentence about <em>humans</em>, and you cannot think straight about it while the humans are a blur.' },
      { t: 'p', html: 'So: who are they, how many are there, how did they get in, and what does each of them take home? Real numbers, sources named, nothing invented. Where a number is not public, this page says so instead of guessing.' },

      { t: 'h', text: '1. Five rooms' },
      { t: 'p', html: 'Tap through them. Watch the headcounts — that is the part nobody expects.' },
      { t: 'lab', id: 'labs' },
      { t: 'note', title: 'Sit with this for a second', html: 'OpenAI: under 8,000 people. Anthropic: around 5,000. Google DeepMind: 5,090. Perplexity: 1,368. Prime Intellect: a team small enough to fit in a classroom. <strong>Infosys employs over 300,000.</strong> The entire frontier of this technology is being built by fewer people than one Indian services firm puts in one city.' },

      { t: 'h', text: '2. The money, job by job' },
      { t: 'p', html: 'This is the part everyone whispers about and nobody writes down. Pick a job and a country. Every band below comes from public 2026 salary data with the source printed underneath.' },
      { t: 'lab', id: 'pay' },
      { t: 'p', html: 'Read that ladder from the bottom, not the top. The person ranking model answers for an hourly wage and the person collecting a million-dollar package are in the <em>same pipeline</em>, four steps apart. One of them is in the press release.' },
      { t: 'note', title: 'The honest gap', html: 'A fresher at an Indian services firm starts around ₹5.8–9 lakh. An L5 engineer at OpenAI has a median package around $1.15 million — roughly a crore per month. Same industry, same year, same technology. The difference is not talent. It is <em>which side of the product you are standing on</em>, and that is a choice you can still make.' },

      { t: 'h', text: '3. How they actually got in' },
      { t: 'p', html: 'Every one of these ladders is public. None of them start where you would expect.' },
      { t: 'lab', id: 'paths' },
      { t: 'p', html: 'Three things that should be obvious from those five and usually are not: a PhD is one route and not the route; the CEO of a $22.6B company did his undergrad at IIT Madras; and the founder of DeepMind spent his twenties making video games. The entry points are not where the story usually puts them.' },

      { t: 'h', text: '4. The small company nobody told you about' },
      { t: 'p', html: '<strong>Prime Intellect</strong> is two years old. Its bet is that you do not need one giant datacentre to train a serious model — you can spread the training across machines scattered over the internet, which people had assumed was impossible for anything large. They shipped INTELLECT-1 and INTELLECT-2 doing exactly that, and in July 2026 raised a $130M Series A.' },
      { t: 'p', html: 'In August 2026 they shipped <strong>Prime Agent</strong>: a self-improving coding harness — a loop that reads its own transcript and rewrites its own instructions to do better next time. It reports 95.5% on ARC-AGI-3 against a 95.4% human-expert baseline, and it wrote a Sega Genesis emulator and a Game Boy Color emulator from scratch. Tomorrow\'s page comes back to that, because of what it means for games.' },
      { t: 'note', title: 'Why this one matters to you', html: 'The founders had no famous lab on their CV. The work is pure software — a smarter loop around models anyone can download. That is the shape of a thing a student can contribute to <em>this year</em>, from a laptop, with no permission from anybody.' },

      { t: 'h', text: 'Check yourself' },
      { t: 'lab', id: 'quiz' },
      { t: 'p', html: '<strong>Tomorrow — day 3, the last one:</strong> the algorithms that quietly shape what you see, what AI is doing to games, the news that actually changed things, and then the only question that matters: which engineer do you want to become?' }
    ],
    quiz: [
      { q: 'Roughly how many people work at OpenAI?', options: ['About 800', 'About 8,000', 'About 80,000', 'About 800,000'], a: 1,
        why: 'Around 7,850 at the end of 2025, heading toward 8,000 through 2026 — smaller than one campus of an Indian IT services firm.' },
      { q: 'An AI-ML fresher at TCS or Infosys in 2026 is typically offered:', options: ['₹2–4 LPA', '₹5.8–9 LPA', '₹18–25 LPA', '₹40+ LPA'], a: 1,
        why: 'That is the real 2026 band from Indian salary surveys. The same person two rungs up the product side is at ₹12–30 LPA within four years.' },
      { q: 'At OpenAI and Anthropic, the difference between a $400K package and a $1.2M package is mostly:', options: ['Base salary', 'Equity', 'Bonuses', 'Overtime'], a: 1,
        why: 'Base pay at both clusters around $275K–$315K. Everything above that is stock — which means most of that headline number is a bet on the company, not a salary.' },
      { q: 'Aravind Srinivas, CEO of Perplexity, did his undergrad at:', options: ['Stanford', 'IIT Madras', 'MIT', 'Oxford'], a: 1,
        why: 'IIT Madras, then a PhD at Berkeley, then OpenAI, then Perplexity in 2022. The whole ladder is public and every rung is a thing you can apply to.' },
      { q: 'What did Prime Intellect prove with INTELLECT-1 and INTELLECT-2?', options: ['That models can be trained across machines scattered over the internet', 'That you need one giant datacentre', 'That open weights are illegal', 'That agents cannot write code'], a: 0,
        why: 'Decentralised training at real scale — and they raised $130M in July 2026 on the back of it, two years after being founded by people with no lab pedigree.' },
      { q: 'The best reason the annotator and the million-dollar engineer belong on the same page is:', options: ['They do the same work', 'They are in the same pipeline, and only one of them appears in the press release', 'They are paid the same', 'Neither job exists any more'], a: 1,
        why: 'Model quality comes from human ranking work at the bottom of the ladder. Knowing the whole ladder exists is how you pick which rung to stand on.' }
    ]
  },
  {
    n: 3,
    date: '2026-09-13',
    slug: 'shaped-games-you',
    tag: 'The last day',
    read: '10 min',
    title: 'The algorithms shaping you, the games they are eating, and the engineer you become',
    hook: 'Day 3 of 3. You already live inside these systems — today you get to run one. Then the news that actually changed things, what AI is doing to games, and one question to end the course on.',
    blocks: [
      { t: 'p', html: 'Two days ago you learned what the machine is. Yesterday, who builds it and what they earn. Today is the part that is already happening to you whether you study it or not.' },

      { t: 'h', text: '1. You are already inside one' },
      { t: 'p', html: 'Every feed you open runs the same loop: show things, watch what you touch, show more of that. Nobody sat down and decided you should see one topic forever. You tapped, and an optimiser did the rest.' },
      { t: 'p', html: 'Here is that loop, running on you, in about fifteen seconds. Like whatever you actually like.' },
      { t: 'lab', id: 'feed' },
      { t: 'note', title: 'The lever you do not hold', html: 'That exploration slider is the whole argument. Turn it down and the feed becomes a mirror of what you already are. Turn it up and you meet things you never asked for. On every real platform, <em>someone else</em> sets that number — and they set it to whatever makes you stay, not to whatever makes you interesting.' },
      { t: 'p', html: 'This is also the most common AI job in the world. Not chatbots — ranking. Whoever tunes that loop decides what a few hundred million people believe is normal this week.' },

      { t: 'h', text: '2. Flash news — what actually changed' },
      { t: 'p', html: 'Not hype, not predictions. Dated things that happened, and the one line each of them changes for you.' },
      { t: 'lab', id: 'news' },
      { t: 'note', title: 'How to read AI news without becoming a fool', html: 'Benchmark numbers come from the people selling the thing. A model "beating humans" almost always means beating a specific baseline on a specific test. Ask three questions — <em>who measured it, against what, and can I reproduce it?</em> — and you will be more reliable than most people posting about this.' },

      { t: 'h', text: '3. What this is doing to games' },
      { t: 'p', html: 'Games are the clearest picture of AI hitting an industry, because the whole pipeline is creative work that a model can now partly do. And it is happening at once: Epic, Unity and Activision announced a combined 8,400 cuts in the first quarter of 2026, EA another 2,100 in March.' },
      { t: 'p', html: 'Run the trade yourself. Each stage you switch to AI, the team gets smaller and the schedule gets shorter — and something else moves too.' },
      { t: 'lab', id: 'games' },
      { t: 'p', html: 'In GDC\'s 2026 industry survey, 28% of developers had been laid off in the last two years — a third in the US — and <strong>52% said generative AI\'s effect on the industry is negative</strong>, up from 30% a year earlier. The people closest to the tools are the most negative about them. That is worth taking seriously.' },
      { t: 'p', html: 'But look at the QA row in that widget again. An agent that plays your build for ten thousand hours finds crashes no human tester will ever reach. The honest summary is not "AI kills games" or "AI saves games" — it is that <em>within one industry, some seats get destroyed and others get created, and they are not the same seats</em>. That is the whole jobs argument in one screen.' },

      { t: 'h', text: '4. All of this is software' },
      { t: 'p', html: 'Nothing in these three days needed a machine you do not have. No GPU, no cluster, no lab. The neuron you trained, the tokenizer, the language model, the recommender you just ran — all of it executed on the phone or laptop in your hand.' },
      { t: 'p', html: 'That is not a trick of this site. It is the actual state of the industry: the models are an API call away, the weights of very good open models are a download away, and the expensive part — knowing what to build around them — costs nothing but the months you are willing to put in.' },

      { t: 'h', text: '5. So: which engineer do you want to become?' },
      { t: 'p', html: 'This is the last thing on the last day, and it is the only question this whole course was really asking. Five questions. You get a role, what your Tuesday looks like in it, what it pays here and in the US, the three things to learn in order, and the one thing to build this week.' },
      { t: 'lab', id: 'become' },

      { t: 'h', text: 'That is the course' },
      { t: 'p', html: 'Three days. Day 1: what the machine is and who built it. Day 2: who works there and what every one of them is paid. Day 3: how these systems shape you, what they are doing to an entire industry, and which seat you want.' },
      { t: 'p', html: 'Nobody here is going to be replaced by a model. Some of us are going to be replaced by people who understood it a year earlier. That is the only real deadline, and you just spent three days moving to the right side of it.' },
      { t: 'note', title: 'One thing, before you close the tab', html: 'Go build the thing your result card told you to build. Not this weekend — <em>tonight</em>, badly, in one sitting. Then send it to this group. A bad shipped project beats a perfect plan every single time, and everyone reading this already knows which one they are holding.' },

      { t: 'h', text: 'Last check' },
      { t: 'lab', id: 'quiz' }
    ],
    quiz: [
      { q: 'Your feed narrows over time mainly because:', options: ['Someone chose a narrow feed for you', 'You tapped what you liked and an optimiser amplified it', 'The internet ran out of topics', 'Your phone is old'], a: 1,
        why: 'You supply the signal, the ranker supplies the amplification. Nobody has to decide anything for the feed to collapse into a mirror.' },
      { q: 'In a recommendation loop, "exploration" controls:', options: ['How fast the app loads', 'How much unfamiliar content you get shown', 'How many ads you see', 'Your screen brightness'], a: 1,
        why: 'And you do not set it. The platform does — optimising for time spent, not for how interesting you turn out to be.' },
      { q: 'GDC\'s 2026 survey found developer sentiment on generative AI went:', options: ['More positive — 52% now say it helps', 'More negative — 52% now say its effect is negative, up from 30%', 'Unchanged', 'Nobody was asked'], a: 1,
        why: '52% negative, up from 30% the year before, alongside 28% of respondents having been laid off in two years. The people closest to the tools are the most sceptical.' },
      { q: 'The most defensible summary of AI and jobs is:', options: ['It destroys jobs', 'It creates jobs', 'It destroys some seats and creates different ones, and they are not the same seats', 'Nothing is changing'], a: 2,
        why: 'Concept artists and QA sit in the same studio. One shrank, one got a new kind of work. Which side you end up on depends on which tasks your job is made of.' },
      { q: 'To start any of the six engineer paths from day 3, you need:', options: ['A GPU cluster', 'A master\'s degree', 'A laptop and a few months', 'An investor'], a: 2,
        why: 'Everything in this course ran in your browser. The models are an API call away and good open weights are a download away. The scarce input is months of attention, not hardware.' },
      { q: 'The honest deadline from these three days is:', options: ['AI will replace you next year', 'Someone who understood this a year earlier will', 'There is no deadline', 'You must join a frontier lab'], a: 1,
        why: 'That is the whole point of the course — and the reason the last widget ends with something to build tonight rather than something to read.' }
    ]
  },
];

/* The course — three days, that's it. */
const UPCOMING = [
  { n: 1, arc: 'The course', title: 'What is AI, and who made it', hook: 'The machine, and the 75 years of people who built it.' },
  { n: 2, arc: 'The course', title: 'Who builds it and what they are paid', hook: 'Five companies, their headcounts, their ladders, and every salary band.' },
  { n: 3, arc: 'The course', title: 'Algorithms, games, and which engineer you become', hook: 'How these systems shape you, what they are doing to games, and the last question.' }
];
