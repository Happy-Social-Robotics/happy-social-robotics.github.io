/* Quiz data. To add a quiz, add a new key below, then reference it as
   <div class="quiz" data-sets="yourkey"></div>. See README. */
window.QUIZ_SETS = {
 "video": {
  "unit": "Unit 2",
  "title": "Video check",
  "blurb": "Twelve questions on the six introductory videos.",
  "items": [
   {
    "q": "Stanford's Jackrabbot is described as a prototype of a new generation of social robot. What is it designed to learn?",
    "o": [
     "How to hold a conversation with children",
     "The unwritten rules of pedestrian behavior, so it can move among people",
     "How to read emotion from a person's voice",
     "How to assemble objects with a human partner"
    ],
    "a": 1,
    "why": "The video description says robots must understand the unwritten rules of pedestrian behavior before they can move freely in crowded spaces."
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
     "They can perform nonverbal cues in a precisely controlled way, which people do automatically and cannot easily control",
     "They never make errors",
     "They remove the need for ethics review"
    ],
    "a": 1,
    "why": "Humans produce many social cues subconsciously, so it is hard to vary one cue at a time. A robot can do that."
   },
   {
    "q": "In the coaching example in her talk, advice quality was identical for a robot and a computer. What difference did she report?",
    "o": [
     "People interacted with the robot significantly more",
     "People trusted the computer more",
     "There was no difference",
     "People followed the computer's advice more closely"
    ],
    "a": 0,
    "why": "She uses it to argue that physical embodiment matters. Treat a talk's summary as a lead: find the original study before you cite the result."
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
    "q": "The PARO clip gives which reason for using an animal-like robot with dementia patients?",
    "o": [
     "Patients who are hard to reach may respond to animals more easily than to people",
     "Seals are cheap to manufacture",
     "Patients cannot see human faces",
     "Regulations require animal shapes"
    ],
    "a": 0,
    "why": "The description says uncommunicative patients may respond to animals more easily, and that PARO offers the comfort of a pet without the care burden."
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
   },
   {
    "q": "Why do Fong et al. separate insect-inspired swarm robots from individualized social robots?",
    "o": [
     "Swarm robots are always smaller",
     "In anonymous societies individuals do not matter, while individualized societies involve recognizing individuals and forming relationships",
     "Swarm robots cannot move",
     "Swarm robots use spoken language"
    ],
    "a": 1,
    "why": "This course follows the individualized tradition: partners who recognize each other, have histories and follow norms."
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
    "q": "In Hancock et al.'s (2011) meta-analysis, which group of factors was most strongly associated with trust in human-robot interaction?",
    "o": [
     "Human characteristics such as personality",
     "Robot-related factors, especially performance such as reliability",
     "The color of the robot",
     "The environment alone"
    ],
    "a": 1,
    "why": "Performance had the largest association. The authors found little evidence for human-related factors, based on a limited set of studies."
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
    "q": "In designing a robot's facial expressions, what is the difference between believability and readability?",
    "o": [
     "Believability is how life-like the behavior looks; readability is how well observers interpret the intended expression",
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
