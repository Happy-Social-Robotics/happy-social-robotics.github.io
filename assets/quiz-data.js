/* Quiz data. To add a quiz, add a new key below, then reference it as
   <div class="quiz" data-sets="yourkey"></div>. See README. */
window.QUIZ_SETS = {
 "video": {
  "unit": "Unit 2",
  "title": "Video check",
  "blurb": "Twelve questions on the six introductory videos.",
  "items": [
   {
    "q": "Stanford's Jackrabbot is a social robot prototype. What is it designed to learn?",
    "o": [
     "How to hold a conversation with children",
     "The unwritten rules of walking among people",
     "How to read emotion from a person's voice",
     "How to assemble objects with a human partner"
    ],
    "a": 1,
    "why": "Robots must learn the unwritten rules of pedestrian behavior before they can move freely in crowds."
   },
   {
    "q": "What does Jackrabbot suggest about what makes a robot social?",
    "o": [
     "A social robot must have a human-like face",
     "A social robot must look like an animal",
     "A robot can be social through its behavior even with a non-humanoid body",
     "A social robot must be able to speak"
    ],
    "a": 2,
    "why": "Stanford describes it as a short, non-humanoid machine that looks like a ball on wheels. Its social skill is in how it moves around people."
   },
   {
    "q": "In her talk, what gap did Cynthia Breazeal say she saw in robotics when she began building Kismet in 1997?",
    "o": [
     "Robots could not move fast enough",
     "Robotics had been about interacting with things, not with people in a natural social way",
     "Robots were too expensive for most labs",
     "Robots did not have cameras"
    ],
    "a": 1,
    "why": "She calls this the white space: robots could not yet interact with people in ways people find natural."
   },
   {
    "q": "Why does Breazeal say robots are useful as scientific tools for studying human behavior?",
    "o": [
     "They are cheaper than recruiting participants",
     "They can perform cues in a precisely controlled way; people cannot",
     "They never make errors",
     "They remove the need for ethics review"
    ],
    "a": 1,
    "why": "People produce cues without noticing, so varying one at a time is hard. A robot can."
   },
   {
    "q": "In her coaching example the advice was identical. What differed?",
    "o": [
     "People interacted with the robot significantly more",
     "People trusted the computer more",
     "There was no difference",
     "People followed the computer's advice more closely"
    ],
    "a": 0,
    "why": "She uses it to argue embodiment matters. Treat a talk as a lead: find the original study before citing it."
   },
   {
    "q": "Kismet's facial expressions are generated from a continuous space defined by which three dimensions?",
    "o": [
     "Speed, size and color",
     "Arousal, valence and stance",
     "Warmth, competence and discomfort",
     "Animacy, likeability and safety"
    ],
    "a": 1,
    "why": "MIT's project page calls this the affect space. The robot occupies one point in it at a time, which keeps its expression clear. The last two options are survey scales you will meet in Unit 7."
   },
   {
    "q": "What does Mori's uncanny valley describe?",
    "o": [
     "Affinity rises steadily with human likeness, with no exceptions",
     "Affinity rises with human likeness, then drops sharply near, but short of, full human likeness",
     "People dislike all robots equally",
     "Robots become less safe the faster they move"
    ],
    "a": 1,
    "why": "The dip is the valley. Mori framed it as a hypothesis and an open scientific question."
   },
   {
    "q": "Which example does Mori use to illustrate the valley?",
    "o": [
     "A prosthetic hand that looks real but feels limp and cold",
     "A robot vacuum cleaner",
     "A weather balloon",
     "A chess program"
    ],
    "a": 0,
    "why": "A very realistic prosthetic hand looks human until touch or movement reveals it is not, which produces an eerie feeling. He also discusses a Bunraku puppet."
   },
   {
    "q": "According to Mori's talk, what happens to the valley when movement is added?",
    "o": [
     "The valley disappears",
     "The peaks and valleys are amplified",
     "Only the peaks grow",
     "Nothing changes"
    ],
    "a": 1,
    "why": "Movement matters for robots. A near-human hand that starts to move can feel more eerie, and humanlike motion can raise affinity for less humanlike shapes."
   },
   {
    "q": "What design advice does Mori give for reaching a safe level of affinity?",
    "o": [
     "Make the robot as realistic as possible",
     "Deliberately pursue a nonhuman design",
     "Hide the robot from users",
     "Add more realistic skin texture"
    ],
    "a": 1,
    "why": "He predicts that a deliberately nonhuman design can reach a safe level of affinity, and he leaves the underlying science open."
   },
   {
    "q": "While telling stories with a preschooler, what does the Tega robot update based on the child's responses?",
    "o": [
     "Its battery estimate",
     "Its belief about the child's engagement",
     "Its map of the room",
     "Its volume setting only"
    ],
    "a": 1,
    "why": "The researcher in the video describes storytelling as a way to assess language ability and as a signal for the robot's belief about engagement."
   },
   {
    "q": "The PARO clip gives which reason for an animal-like robot?",
    "o": [
     "Hard-to-reach patients may respond to animals more easily",
     "Seals are cheap to manufacture",
     "Patients cannot see human faces",
     "Regulations require animal shapes"
    ],
    "a": 0,
    "why": "Uncommunicative patients may respond to animals more easily, and PARO offers a pet's comfort without the care burden."
   }
  ]
 },
 "s1": {
  "unit": "Unit 3",
  "title": "Foundations",
  "blurb": "What makes a robot social, and where the field comes from.",
  "items": [
   {
    "q": "Fong, Nourbakhsh and Dautenhahn (2003) define socially interactive robots as robots for which what is important?",
    "o": [
     "Low manufacturing cost",
     "Social human-robot interaction",
     "A screen for a face",
     "Operating without sensors"
    ],
    "a": 1,
    "why": "The definition is about the importance of social interaction to the robot's purpose, not about its appearance."
   },
   {
    "q": "Which early example do Fong et al. cite as a precursor of social robotics?",
    "o": [
     "Walter's robotic tortoises from the late 1940s",
     "Kismet",
     "Jackrabbot",
     "PARO"
    ],
    "a": 0,
    "why": "The tortoises used lights to interact in a seemingly social way, with no explicit communication. The other robots came decades later."
   }
  ]
 },
 "s2": {
  "unit": "Unit 4",
  "title": "Types of social robots",
  "blurb": "Companions, educational, care and service robots.",
  "items": [
   {
    "q": "Belpaeme et al. (2018) reported that robot tutors achieved outcomes similar to human tutoring under which condition?",
    "o": [
     "Only for adult learners",
     "On restricted tasks",
     "In all school subjects",
     "Only when the robot showed no social behavior"
    ],
    "a": 1,
    "why": "The review is positive but limited: restricted topics, small studies, mixed designs."
   },
   {
    "q": "Why do Belpaeme et al. say that using a robot in education must be explicitly justified?",
    "o": [
     "Robots are not allowed in schools",
     "Virtual agents offer some of the same capabilities without the cost and upkeep of hardware",
     "Children dislike robots",
     "Robots cannot speak"
    ],
    "a": 1,
    "why": "A good robot study states what physical embodiment adds compared with a screen."
   },
   {
    "q": "A seal-shaped robot placed in dementia care is best described by which pair?",
    "o": [
     "Anthropomorphic, navigation",
     "Zoomorphic, socially assistive",
     "Functional, tutoring",
     "Caricatured, factory work"
    ],
    "a": 1,
    "why": "Zoomorphic describes the animal form. Socially assistive describes the application."
   }
  ]
 },
 "s3": {
  "unit": "Unit 5",
  "title": "Psychology",
  "blurb": "Anthropomorphism, trust, uncanny valley and attachment.",
  "items": [
   {
    "q": "What is the main claim of the studies reviewed by Nass and Moon (2000)?",
    "o": [
     "People believe computers are alive",
     "People mindlessly apply social rules, such as politeness and reciprocity, to computers",
     "Computers are better teachers than people",
     "Only children treat computers socially"
    ],
    "a": 1,
    "why": "Participants did not think computers were human. They still applied overlearned social habits."
   },
   {
    "q": "In Epley, Waytz and Cacioppo's three-factor theory, people are more likely to anthropomorphize when they...",
    "o": [
     "Feel strongly connected to other people",
     "Lack a sense of social connection to other humans",
     "Are engineers",
     "Dislike the agent"
    ],
    "a": 1,
    "why": "This is sociality motivation. The other two factors are accessible human-like knowledge and the motivation to understand and predict an agent."
   },
   {
    "q": "Gray, Gray and Wegner (2007) identified two dimensions of mind perception. Which pair?",
    "o": [
     "Warmth and competence",
     "Experience and agency",
     "Valence and arousal",
     "Animacy and intelligence"
    ],
    "a": 1,
    "why": "Experience is the capacity to feel, such as hunger. Agency is the capacity to act and plan, such as self-control."
   },
   {
    "q": "In Hancock et al.'s (2011) meta-analysis, which factors were most linked to trust?",
    "o": [
     "Human characteristics such as personality",
     "Robot performance, such as reliability",
     "The color of the robot",
     "The environment alone"
    ],
    "a": 1,
    "why": "Performance had the largest association. Evidence for human factors was thin."
   }
  ]
 },
 "s4": {
  "unit": "Unit 6",
  "title": "Behavior design",
  "blurb": "Gaze, timing, speech and expressive behavior.",
  "items": [
   {
    "q": "Admoni and Scassellati (2017) sort gaze research in HRI into which three approaches?",
    "o": [
     "Human-centered, design-centered and technology-centered",
     "Lab, field and online",
     "Child, adult and older adult",
     "Hardware, software and ethics"
    ],
    "a": 0,
    "why": "The categories differ in goals and methods, and one paper can contribute to more than one."
   },
   {
    "q": "For a robot's face, what is the difference between believability and readability?",
    "o": [
     "Believability: how life-like it looks. Readability: how well people read the expression",
     "Believability is speed; readability is size",
     "They mean the same thing",
     "Readability is about text on a screen"
    ],
    "a": 0,
    "why": "MIT's Kismet pages use both. An expression can look alive and still be misread."
   },
   {
    "q": "What did Social LSTM (Alahi et al., 2016) use in place of hand-crafted functions such as social forces?",
    "o": [
     "A model that learns human-human interaction from trajectory data",
     "A rule book written by lawyers",
     "Remote control by an operator",
     "GPS only"
    ],
    "a": 0,
    "why": "The model pools information across neighboring people to capture behaviors such as collision avoidance and group movement."
   }
  ]
 },
 "s5": {
  "unit": "Unit 7",
  "title": "Methods and ethics",
  "blurb": "Study design, measures and ethical practice.",
  "items": [
   {
    "q": "Which scale measures warmth, competence and discomfort?",
    "o": [
     "The Godspeed questionnaire series",
     "RoSAS",
     "A heart-rate monitor",
     "Cronbach's alpha"
    ],
    "a": 1,
    "why": "RoSAS (Carpinella et al., 2017) has 18 items and draws on Godspeed. Godspeed covers anthropomorphism, animacy, likeability, perceived intelligence and perceived safety."
   },
   {
    "q": "Riek's (2012) review of 54 Wizard of Oz studies found that few papers reported what?",
    "o": [
     "Participant ages",
     "Wizard training and wizard errors",
     "The robot's color",
     "The conference name"
    ],
    "a": 1,
    "why": "About 5% reported wizard training and under 4% measured wizard error. Report both."
   },
   {
    "q": "Which is one of the six ethical concerns about robot elder care raised by Sharkey and Sharkey (2012)?",
    "o": [
     "Opportunities for human social contact could be reduced",
     "Robots move too quickly",
     "Batteries are heavy",
     "Robots cannot be programmed"
    ],
    "a": 0,
    "why": "The others on their list include objectification, loss of privacy, restricted liberty, deception and infantilization, and responsibility."
   },
   {
    "q": "What do the Godspeed authors recommend when a difference between two robots is expected to be small?",
    "o": [
     "Use a single question",
     "Increase the number of participants based on a power analysis",
     "Skip the statistics",
     "Use only video"
    ],
    "a": 1,
    "why": "Small samples can miss small differences. The education review above averaged only 17 to 24 participants per data point."
   }
  ]
 },
 "pub": {
  "unit": "Unit 8",
  "title": "Publishing",
  "blurb": "Venues, formats and deadlines for beginners.",
  "items": [
   {
    "q": "As of 29 October 2026, which HRI 2027 text-paper track is still open, with a deadline of 8 December 2026?",
    "o": [
     "Full Papers",
     "alt.HRI",
     "Late Breaking Reports",
     "HRI Pioneers"
    ],
    "a": 2,
    "why": "Full papers, short contributions, alt.HRI and Pioneers have all closed for 2027."
   },
   {
    "q": "What is the length limit for an HRI 2027 Late Breaking Report?",
    "o": [
     "2 to 4 pages, excluding references",
     "10 to 12 pages",
     "1 page",
     "8 pages including appendices"
    ],
    "a": 0,
    "why": "LBRs are double-blind, presented as an A0 portrait poster, and published in a non-archival companion proceedings."
   },
   {
    "q": "Which HRI program is aimed at students at any stage of their academic career?",
    "o": [
     "Industry White Papers",
     "HRI Pioneers",
     "Videos and Demos",
     "Full Papers"
    ],
    "a": 1,
    "why": "The 2027 deadline (18 October 2026) has passed. Plan for the next cycle."
   }
  ]
 }
};

/* Per-video question sets used on course/watch.html. Hidden from the quiz library. */
(function () {
  var v = window.QUIZ_SETS.video.items;
  var cuts = [[0, 2], [2, 5], [5, 6], [6, 10], [10, 11], [11, 12]];
  cuts.forEach(function (c, i) {
    window.QUIZ_SETS["v" + (i + 1)] = { hidden: true, title: "Video " + (i + 1), items: v.slice(c[0], c[1]) };
  });
})();

/* Unit 2: research-direction questions (scenario based, built on the videos). */
window.QUIZ_SETS.review = {
  unit: "Research",
  title: "Think like a researcher",
  blurb: "Eight study-design questions that start from the videos.",
  items: [
    {
      q: "Jackrabbot has no face and never speaks. How would you test whether people read its intent from movement?",
      o: [
        "Show videos of different paths toward a doorway; ask what it will do next",
        "Ask participants whether they like the robot",
        "Add a screen face and see if people smile more",
        "Measure how long the battery lasts in a crowd"
      ],
      a: 0,
      why: "One variable (the path), one outcome (predicted intent). How a robot should signal it will yield is open (Unit 6)."
    },
    {
      q: "A robot can repeat a cue exactly; people cannot. Which question uses that strength?",
      o: [
        "Which robot is cheapest to build?",
        "Does one identical gesture, changed in one condition only, change trust ratings?",
        "Do people like robots in general?",
        "How fast can the robot speak?"
      ],
      a: 1,
      why: "Holding everything fixed but one cue is what a robot allows. Follow-up: which cues depend on culture?"
    },
    {
      q: "Kismet's expressions can be believable or readable. How would you separate the two?",
      o: [
        "Ask observers to name the emotion (readable), then rate how life-like it looks (believable)",
        "Ask observers only whether they like the robot",
        "Count how many people stop to look",
        "Measure how fast the motors move"
      ],
      a: 0,
      why: "Two properties need two questions about the same clips. Open: do face expressions carry over to robots with no face?"
    },
    {
      q: "Mori called the valley a hypothesis, and said movement amplifies it. Which study tests it fairly?",
      o: [
        "Cite it as an established law and skip testing",
        "Rate one near-human robot at a single level of realism",
        "Rate affinity across a range of likeness, movement on and off",
        "Interview one expert about it"
      ],
      a: 2,
      why: "A real test needs several levels of likeness and a movement condition. Whether it holds beyond faces is still open."
    },
    {
      q: "Tega adapts to a child's engagement. Which study shows whether that matters?",
      o: [
        "Show the adaptive robot to one child once",
        "Ask adults which robot looks nicer",
        "Compare adaptive and fixed Tega over several sessions",
        "Count how many words the robot says"
      ],
      a: 2,
      why: "A comparison and repeated sessions make it a test of adaptation. Most studies are single sessions."
    },
    {
      q: "The clip suggests hard-to-reach patients respond to animals. What would a careful study add?",
      o: [
        "A comparison, such as usual care, plus follow-up over weeks",
        "More videos of PARO",
        "A larger robot",
        "A script for the caregivers to read aloud"
      ],
      a: 0,
      why: "Without a comparison you cannot tell what the robot changed; without follow-up, for how long. Consent belongs in the same paper (Unit 7)."
    },
    {
      q: "Jackrabbot is social through movement; Breazeal's robots use expression. Which question follows?",
      o: [
        "Which robot is more expensive?",
        "Which single signal is enough for people to treat a robot as social?",
        "Are robots better than screens at everything?",
        "Should every robot have a face?"
      ],
      a: 1,
      why: "It compares channels instead of whole robots, so you can isolate an effect."
    },
    {
      q: "Which of these is narrow enough for a first study?",
      o: [
        "Social robots for children",
        "Will robots replace teachers?",
        "How should robots feel?",
        "Does gaze toward the book, not the child, change how much preschoolers recall?"
      ],
      a: 3,
      why: "One population, one setting, one behavior, one outcome. The others are fields or opinions (Unit 7)."
    }
  ]
};

/* The Mori, Tega and PARO scenario questions belong with those videos (Units 5, 4 and 7),
   so they move out of the Unit 2 set and join the per-video sets. */
(function () {
  var moved = window.QUIZ_SETS.review.items.splice(3, 3);
  window.QUIZ_SETS.v4.items.push(moved[0]);
  window.QUIZ_SETS.v5.items.push(moved[1]);
  window.QUIZ_SETS.v6.items.push(moved[2]);
  window.QUIZ_SETS.review.blurb = "Five study-design questions that start from the first two videos.";
})();

/* Unit 1: history and people. */
window.QUIZ_SETS.hist = {
  unit: "Unit 1",
  title: "How robots began",
  blurb: "Five questions on the people behind the first robots.",
  items: [
    { q: "Where does the word “robot” come from?",
      o: ["A Greek word for machine", "A Czech word for forced labor, used in a 1921 play", "A Japanese word for puppet", "An engineering term from General Motors"],
      a: 1, why: "It comes from the Czech robota. Karel Čapek’s play R.U.R. brought it to the world, and his brother Josef is credited with suggesting it." },
    { q: "W. Grey Walter’s tortoise robots in the late 1940s could seek light and avoid obstacles. What was surprising about them?",
      o: ["They were controlled by a person with a remote", "Simple parts produced lifelike behavior without a plan", "They could hold conversations", "They used cameras to recognize faces"],
      a: 1, why: "A very small circuit produced behavior that looked purposeful. Early evidence that behavior can feel alive without being complicated." },
    { q: "What did the first industrial robot arm, Unimate, do after it was installed at General Motors in 1961?",
      o: ["Talked with workers", "Handled hot metal parts so people did not have to", "Taught apprentices", "Inspected cars with cameras"],
      a: 1, why: "Unimate was a tool: strong and repeatable, but with no interest in the people around it. Social robots are the opposite goal." },
    { q: "Masahiro Mori’s 1970 essay proposed that liking a robot rises as it looks more human, and then what?",
      o: ["Keeps rising forever", "Drops sharply when it is almost, but not quite, human", "Stays flat", "Depends only on its voice"],
      a: 1, why: "That dip is the uncanny valley. Mori developed the idea while thinking about prosthetic hands." },
    { q: "A rolling ball with no face reacts smoothly when people walk past. Is it a social robot?",
      o: ["No, it needs a human face", "No, it needs to speak", "Yes, it can be social through natural movement and timing", "Only if it has a name"],
      a: 2, why: "Social means interacting with people in ways people find natural. Faces and speech are options, not requirements." }
  ]
};

/* Harder answer options: every wrong answer is close to the right one, so you have to think.
   Keyed by question text; the correct option keeps its position. */
(function () {
  var W = {
    "Stanford's Jackrabbot is a social robot prototype. What is it designed to learn?": ["How to hand objects to people in a hallway", "How to guide visitors to a destination", "How to avoid obstacles using a fixed map"],
    "What does Jackrabbot suggest about what makes a robot social?": ["A social robot needs a face, but not a voice", "A social robot needs speech, but not a face", "A robot is social only when it can learn each person's name"],
    "In her talk, what gap did Cynthia Breazeal say she saw in robotics when she began building Kismet in 1997?": ["Robots could sense people but could not move around them", "Robots had been built for people, but only in laboratories", "Robotics focused on speech recognition, not on expression"],
    "Why does Breazeal say robots are useful as scientific tools for studying human behavior?": ["They can show a cue more naturally than a person can", "They respond to participants in a more varied way than people do", "They remove bias because participants know they are machines"],
    "In her coaching example the advice was identical. What differed?": ["People followed the robot's advice significantly more", "People rated the robot's advice as more accurate", "People trusted the robot more, but interacted with it less"],
    "Kismet's facial expressions are generated from a continuous space defined by which three dimensions?": ["Arousal, valence and animacy", "Warmth, valence and stance", "Valence, stance and intensity"],
    "What does Mori's uncanny valley describe?": ["Affinity rises with human likeness, then levels off near full human likeness", "Affinity falls as a robot looks more human, then recovers", "Affinity drops sharply at moderate likeness, then rises steadily"],
    "Which example does Mori use to illustrate the valley?": ["An industrial robot arm placed near people", "A talking doll that recites recorded phrases", "A chess-playing machine with a mechanical arm"],
    "According to Mori's talk, what happens to the valley when movement is added?": ["The valley becomes shallower", "The valley shifts toward lower human likeness", "Only the valley deepens; the peaks stay the same"],
    "What design advice does Mori give for reaching a safe level of affinity?": ["Make the face realistic but keep the movement simple", "Match the robot's movement to its appearance", "Make the robot look human but keep it still"],
    "While telling stories with a preschooler, what does the Tega robot update based on the child's responses?": ["Its estimate of which story the child prefers", "Its model of the child's reading level", "Its record of how many questions were answered correctly"],
    "The PARO clip gives which reason for an animal-like robot?": ["Animal shapes avoid the uncanny valley entirely", "Patients prefer animals to caregivers", "Animal robots are easier to clean and maintain"],
    "Fong, Nourbakhsh and Dautenhahn (2003) define socially interactive robots as robots for which what is important?": ["Humanlike appearance and movement", "Autonomy from human operators", "The ability to use natural language"],
    "Which early example do Fong et al. cite as a precursor of social robotics?": ["Unimate, the first industrial arm", "Shakey, a robot built at SRI", "ELIZA, the early chatbot"],
    "Belpaeme et al. (2018) reported that robot tutors achieved outcomes similar to human tutoring under which condition?": ["Only in the first few sessions", "Only for children aged six and over", "Only when a teacher stayed in the room"],
    "Why do Belpaeme et al. say that using a robot in education must be explicitly justified?": ["Schools rarely have the space to host robots", "Robots have not been shown to help learning at all", "Robot tutors work only for language learning"],
    "A seal-shaped robot placed in dementia care is best described by which pair?": ["Zoomorphic, tutoring", "Caricatured, socially assistive", "Anthropomorphic, socially assistive"],
    "What is the main claim of the studies reviewed by Nass and Moon (2000)?": ["People deliberately treat computers as minds once they are convinced the machine has one", "People apply social rules to computers only when the computer has a humanlike voice or face", "People apply social rules to computers only when they are unsure how it works"],
    "In Epley, Waytz and Cacioppo's three-factor theory, people are more likely to anthropomorphize when they...": ["Are unfamiliar with the agent's technology", "Find the agent's appearance unsettling", "Have a strong sense of control over the agent"],
    "Gray, Gray and Wegner (2007) identified two dimensions of mind perception. Which pair?": ["Agency and animacy", "Experience and intelligence", "Warmth and agency"],
    "In Hancock et al.'s (2011) meta-analysis, which factors were most linked to trust?": ["Robot appearance, such as humanlikeness", "How close the robot stood to the person", "Human characteristics such as personality"],
    "Admoni and Scassellati (2017) sort gaze research in HRI into which three approaches?": ["Perception-centered, design-centered and technology-centered", "Human-centered, task-centered and technology-centered", "Human-centered, design-centered and ethics-centered"],
    "For a robot's face, what is the difference between believability and readability?": ["Believability: how well people read the expression. Readability: how life-like it looks", "Believability: how quickly it changes. Readability: how large it is", "Believability: how well it matches speech. Readability: how long it holds the expression"],
    "What did Social LSTM (Alahi et al., 2016) use in place of hand-crafted functions such as social forces?": ["A model trained on robot-human encounters in a lab", "A fixed map of walkways learned in advance", "Remote control by an operator who watches the crowd"],
    "Which scale measures warmth, competence and discomfort?": ["Godspeed", "NARS (Negative Attitudes toward Robots Scale)", "The Big Five inventory"],
    "Riek's (2012) review of 54 Wizard of Oz studies found that few papers reported what?": ["How participants were recruited", "Which software controlled the robot's speech", "Whether the wizard could see the participant"],
    "Which is one of the six ethical concerns about robot elder care raised by Sharkey and Sharkey (2012)?": ["Older people could become dependent on the robot's charging schedule", "Robots could not be adapted to different languages", "Robots would be too costly for care homes"],
    "What do the Godspeed authors recommend when a difference between two robots is expected to be small?": ["Use a different questionnaire for each robot", "Add more items to each scale", "Report effect sizes instead of significance tests"],
    "What is the length limit for an HRI 2027 Late Breaking Report?": ["4 to 6 pages, including references", "2 pages, including references", "6 to 8 pages, excluding references"],
    "Which HRI program is aimed at students at any stage of their academic career?": ["Student Design Competition", "Late Breaking Reports", "Videos and Demos"],
    "Mori called the valley a hypothesis, and said movement amplifies it. Which study tests it fairly?": ["Rate several near-human robots, with movement always on", "Compare ratings of one robot at two levels of realism", "Interview several experts about their impressions"],
    "Tega adapts to a child's engagement. Which study shows whether that matters?": ["Compare adaptive and fixed Tega in a single session", "Ask parents which robot their child preferred", "Count how many words the child says to each robot"],
    "The clip suggests hard-to-reach patients respond to animals. What would a careful study add?": ["A questionnaire for caregivers after one visit", "A second robot with a different shape and no comparison", "A longer first session with each patient"],
    "Jackrabbot has no face and never speaks. How would you test whether people read its intent from movement?": ["Ask participants which robot they would rather meet", "Show the same path in a video and ask participants to rate its speed", "Add a screen face and measure how often people smile"],
    "A robot can repeat a cue exactly; people cannot. Which question uses that strength?": ["Do people trust robots more than they trust people?", "Does a robot with a more natural gesture build trust over weeks?", "Which of two robots do participants prefer after meeting both?"],
    "Kismet's expressions can be believable or readable. How would you separate the two?": ["Ask observers to rate how much they like each expression", "Ask observers to say which expression looks strongest", "Measure how long observers look at each expression"],
    "Jackrabbot is social through movement; Breazeal's robots use expression. Which question follows?": ["Which of the two robots do people find more likeable?", "Which robot is better at holding attention?", "Is movement or expression more costly to build?"],
    "Which of these is narrow enough for a first study?": ["Does robot gaze affect how preschoolers learn from stories?", "How do preschoolers respond to robots that look at them?", "Does robot gaze matter for children's learning?"],
    "Where does the word “robot” come from?": ["A Polish word for servant, used in a 1920 novel", "A Czech word for machine, used in a 1921 play", "A German word for worker, used in a 1927 film"],
    "W. Grey Walter’s tortoise robots in the late 1940s could seek light and avoid obstacles. What was surprising about them?": ["They learned from experience how to find light", "They were guided by a hidden wire along the floor", "They used a small computer to plan their routes"],
    "What did the first industrial robot arm, Unimate, do after it was installed at General Motors in 1961?": ["Painted car bodies on the line", "Loaded finished cars onto trucks", "Moved parts between stations beside workers"],
    "Masahiro Mori’s 1970 essay proposed that liking a robot rises as it looks more human, and then what?": ["Levels off when it is almost, but not quite, human", "Drops sharply as soon as it looks human", "Rises faster when it is almost, but not quite, human"],
    "A rolling ball with no face reacts smoothly when people walk past. Is it a social robot?": ["No, it needs a face to show it is paying attention", "No, it needs to speak to take part in a conversation", "Only if it recognizes each person by name"]
  };
  Object.keys(window.QUIZ_SETS).forEach(function (k) {
    window.QUIZ_SETS[k].items.forEach(function (it) {
      var w = W[it.q];
      if (!w) return;
      var right = it.o[it.a], o = [], j = 0;
      for (var i = 0; i < it.o.length; i++) o.push(i === it.a ? right : w[j++]);
      it.o = o;
    });
  });
})();
