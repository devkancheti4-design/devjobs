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
  }
];

/* Upcoming topics — edit freely, this is the runway shown on the home page. */
const UPCOMING = [
  { n: 2,  arc: 'How it works', title: 'Inside a neural network', hook: 'Layers, parameters, and why depth changed everything.' },
  { n: 3,  arc: 'How it works', title: 'Training vs inference', hook: 'One costs a fortune once. The other costs a little, forever.' },
  { n: 4,  arc: 'How it works', title: 'What a transformer does', hook: 'Attention, explained without a single integral.' },
  { n: 5,  arc: 'How it works', title: 'Why models hallucinate', hook: 'And the three tricks that reduce it.' },
  { n: 6,  arc: 'How it works', title: 'RLHF: how humans taught it manners', hook: 'The invisible workforce behind "helpful, harmless, honest".' },
  { n: 7,  arc: 'How it works', title: 'Context windows and memory', hook: 'Why it forgets you, and what RAG really is.' },
  { n: 8,  arc: 'How it works', title: 'Agents: models that press buttons', hook: 'Tools, loops, and why this is the 2026 story.' },
  { n: 9,  arc: 'How it works', title: 'Open weights vs closed models', hook: 'Llama, Mistral, DeepSeek — and what "open" actually means.' },
  { n: 10, arc: 'How it works', title: 'How models are evaluated', hook: 'Benchmarks, contamination, and why leaderboards lie.' },
  { n: 11, arc: 'The industry', title: 'The AI stack, layer by layer', hook: 'Sand to chatbot: who owns which layer.' },
  { n: 12, arc: 'The industry', title: 'Why Nvidia won', hook: 'A gaming company accidentally became the most important firm on earth.' },
  { n: 13, arc: 'The industry', title: 'How AI companies make money', hook: 'Tokens, seats, subscriptions, cloud rent.' },
  { n: 14, arc: 'The industry', title: 'What a frontier lab actually does all day', hook: 'Research, infra, safety, product — the real org chart.' },
  { n: 15, arc: 'The industry', title: 'The compute arms race', hook: 'Datacentres, electricity, and the physical limits of hype.' },
  { n: 16, arc: 'The industry', title: 'India in the AI stack', hook: 'GCCs, services firms, and where we actually sit.' },
  { n: 17, arc: 'The industry', title: 'The invisible workforce', hook: 'Data labelling, RLHF raters, and what they get paid.' },
  { n: 18, arc: 'AI and jobs', title: 'Jobs are bundles of tasks', hook: 'The single framing that makes this whole debate make sense.' },
  { n: 19, arc: 'AI and jobs', title: 'Which tasks fall first', hook: 'Score your own future job, task by task.' },
  { n: 20, arc: 'AI and jobs', title: 'The junior rung problem', hook: 'What happens when entry-level work is the easiest to automate.' },
  { n: 21, arc: 'AI and jobs', title: 'What the studies actually found', hook: 'Real experiments on support agents, consultants and coders.' },
  { n: 22, arc: 'AI and jobs', title: 'Indian IT services under AI', hook: 'The honest version, without the LinkedIn panic.' },
  { n: 23, arc: 'AI and jobs', title: 'Jobs AI is creating', hook: 'The roles that did not exist five years ago and pay well now.' },
  { n: 24, arc: 'AI and jobs', title: 'The ATM lesson', hook: 'Automation created more bank tellers for 30 years. Then it did not.' },
  { n: 25, arc: 'AI and jobs', title: 'Who gets paid more because of AI', hook: 'Complements, not substitutes.' },
  { n: 26, arc: 'What to do', title: 'The 12-month skill ladder', hook: 'What to learn, in order, starting from where you are.' },
  { n: 27, arc: 'What to do', title: 'Build something people can see', hook: 'Portfolio projects that actually get replies.' },
  { n: 28, arc: 'What to do', title: 'Using AI without rotting your brain', hook: 'The difference between leverage and dependence.' },
  { n: 29, arc: 'What to do', title: 'How to read an AI paper', hook: 'Abstract, results, limitations — 20 minutes, no PhD.' },
  { n: 30, arc: 'What to do', title: 'Where this is going', hook: 'The three futures worth planning for.' }
];
