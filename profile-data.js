(() => {
  const club = (name, years, note) => ({ name, years, note });
  const stat = (label, value) => ({ label, value });
  const honour = (name, count, options = {}) => ({ name, count, ...options });
  const skill = (name, description) => ({ name, description });
  const moment = (title, description) => ({ title, description });

  const profiles = [
    {
      slug: "cruyff",
      rank: 7,
      name: "Johan Cruyff",
      fullName: "Hendrik Johannes Cruijff",
      country: "Netherlands",
      position: "Forward / Attacking Midfielder",
      image: "Cruyff.webp",
      gallery: ["Cruyff2.png", "Cruyff3.png"],
      officialGoals: "433",
      born: "April 25, 1947",
      birthplace: "Amsterdam, Netherlands",
      height: "1.78 m",
      foot: "Right",
      number: "14",
      era: "1964-1984",
      mainClubs: "Ajax, Barcelona, Feyenoord",
      knownFor: "Total Football, movement, invention, tactical intelligence",
      summary: "Johan Cruyff changed how elite football looked and how generations understood space, movement, and control.",
      definingTrait: "Seeing the match one move before everyone else",
      sideCaption: "Cruyff made number 14 a symbol of intelligent, attacking football.",
      imagePosition: "center 25%",
      story: [
        "Cruyff emerged from Ajax's academy and became the on-field brain of the Total Football revolution. He moved constantly between lines, created space for teammates, and could decide a match as a scorer, passer, dribbler, or tactical organizer.",
        "His move to Barcelona carried that influence into Spain, where his personality and football ideas changed the club long before his later coaching career. Even players who never saw him live still play in a game shaped by his decisions."
      ],
      clubs: [
        club("Ajax", "1964-1973, 1981-1983", "The home of his rise, three straight European Cups, and the clearest expression of Total Football."),
        club("Barcelona", "1973-1978", "Became a cultural icon and led the club to its first league title in 14 years."),
        club("North American clubs", "1979-1981", "Brought his imagination to the Los Angeles Aztecs and Washington Diplomats."),
        club("Feyenoord", "1983-1984", "Finished his career by winning a league-and-cup double at Ajax's great rival.")
      ],
      stats: [
        stat("Ballon d'Or awards", "3"),
        stat("European Cups", "3"),
        stat("Dutch league titles", "9"),
        stat("World Cup finals", "1")
      ],
      honours: [
        honour("European Cup", "3", { important: true }),
        honour("Eredivisie", "9"),
        honour("KNVB Cup", "6"),
        honour("La Liga", "1"),
        honour("Copa del Rey", "1"),
        honour("Intercontinental Cup", "1")
      ],
      skills: [
        skill("Spatial intelligence", "Cruyff understood where pressure and open space would appear before the pass arrived."),
        skill("Body feints", "The Cruyff turn became famous, but his whole game was built on disguised changes of direction."),
        skill("Total influence", "He could drop into midfield, lead the press, create, and finish without losing control of the team." )
      ],
      moments: [
        moment("1974 World Cup", "Captained the Netherlands to the final and became the defining face of Total Football."),
        moment("Ajax's European three-peat", "Drove Ajax to European Cup victories in 1971, 1972, and 1973."),
        moment("Barcelona's 1973-74 title", "Inspired a historic league campaign, including a celebrated 5-0 win at Real Madrid.")
      ],
      why: [
        "Cruyff was more than a great forward. He was the player who made Total Football work on the pitch, then helped its ideas outlive him. The three Ballon d'Ors matter, but his influence on how teams use space is the real reason he is this high."
      ]
    },
    {
      slug: "ronaldinho",
      rank: 8,
      name: "Ronaldinho",
      fullName: "Ronaldo de Assis Moreira",
      country: "Brazil",
      position: "Attacking Midfielder / Winger / Forward",
      image: "Ronaldinho.avif",
      gallery: ["ronaldinho2.png", "ronaldinho3.png"],
      officialGoals: "299",
      born: "March 21, 1980",
      birthplace: "Porto Alegre, Brazil",
      height: "1.82 m",
      foot: "Right",
      number: "10",
      era: "1998-2015",
      mainClubs: "Grêmio, Paris Saint-Germain, Barcelona, AC Milan",
      knownFor: "Joy, no-look passes, elasticos, free kicks, impossible improvisation",
      summary: "Ronaldinho played with a freedom and imagination that made elite defenders look like participants in his own street-football game.",
      definingTrait: "Turning elite football into spontaneous art",
      sideCaption: "At his peak, Ronaldinho made stadiums wait for the next surprise.",
      imagePosition: "center 20%",
      story: [
        "Ronaldinho arrived in Europe with Paris Saint-Germain after shining for Grêmio and Brazil, but Barcelona became his great stage. Between 2003 and 2006, he restored belief to the club and reached a peak built on daring dribbles, disguised passes, spectacular goals, and a constant sense of play.",
        "His prime was shorter than those of some players around him in this ranking, yet its emotional impact was enormous. He won the biggest prizes for club and country while making millions of supporters fall in love with football's creative possibilities."
      ],
      clubs: [
        club("Grêmio", "1998-2001", "Developed into Brazil's next great number 10 in Porto Alegre."),
        club("Paris Saint-Germain", "2001-2003", "Introduced his unpredictable talent to European football."),
        club("Barcelona", "2003-2008", "Produced his defining peak, winning the Champions League and two Spanish titles."),
        club("AC Milan", "2008-2011", "Added a Serie A title and another chapter among elite European stars."),
        club("Brazil and Mexico", "2011-2015", "Won the Copa Libertadores with Atlético Mineiro before closing his playing career.")
      ],
      stats: [
        stat("Ballon d'Or awards", "1"),
        stat("FIFA World Player awards", "2"),
        stat("Champions Leagues", "1"),
        stat("World Cups", "1")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("Copa América", "1", { international: true }),
        honour("FIFA Confederations Cup", "1", { international: true }),
        honour("UEFA Champions League", "1", { important: true }),
        honour("La Liga", "2"),
        honour("Serie A", "1"),
        honour("Copa Libertadores", "1"),
        honour("Recopa Sudamericana", "1")
      ],
      skills: [
        skill("One-on-one invention", "Elasticos, stepovers, scoops, and body swerves appeared without warning or hesitation."),
        skill("Disguised passing", "No-look passes and reverse balls opened spaces defenders did not realize were exposed."),
        skill("Set pieces", "He could bend, dip, or drive free kicks from angles that seemed closed.")
      ],
      moments: [
        moment("2002 World Cup", "Scored the unforgettable long-range free kick against England and helped Brazil become champions."),
        moment("Standing ovation at the Bernabéu", "A brilliant two-goal performance for Barcelona earned applause from rival supporters in 2005."),
        moment("2006 Champions League", "Led Barcelona back to the summit of European club football.")
      ],
      why: [
        "Ronaldinho's peak was not the longest, but it was unforgettable. For several seasons he was the best player in the world and the most inventive one, capable of winning major matches with a pass, a free kick, or a trick nobody expected."
      ]
    },
    {
      slug: "maldini",
      rank: 9,
      name: "Paolo Maldini",
      fullName: "Paolo Cesare Maldini",
      country: "Italy",
      position: "Defender",
      image: "Maldini.jpg",
      gallery: ["maldini2.png", "maldini3.png"],
      officialGoals: "40",
      born: "June 26, 1968",
      birthplace: "Milan, Italy",
      height: "1.86 m",
      foot: "Left",
      number: "3",
      era: "1985-2009",
      mainClubs: "AC Milan",
      knownFor: "Positioning, timing, leadership, longevity, defensive elegance",
      summary: "Paolo Maldini made defending look calm, precise, and timeless across a remarkable 24-season career with AC Milan.",
      definingTrait: "Winning the duel before needing to tackle",
      sideCaption: "Maldini represented one club, one city, and the highest standard of defending.",
      imagePosition: "center 18%",
      story: [
        "Maldini debuted for AC Milan as a teenager and remained at the highest level into his forties. Equally elite at left back and centre back, he combined recovery speed and strength with exceptional anticipation, allowing him to defend without panic.",
        "He lived through multiple great Milan teams and adapted to different eras, teammates, opponents, and tactical systems. His career became a reference point for professionalism and defensive excellence."
      ],
      clubs: [
        club("AC Milan", "1985-2009", "Played his entire senior career for Milan, captaining the club through an era of domestic and European success.")
      ],
      stats: [
        stat("Milan appearances", "902"),
        stat("European Cups / UCL", "5"),
        stat("Serie A titles", "7"),
        stat("Italy appearances", "126")
      ],
      honours: [
        honour("European Cup / Champions League", "5", { important: true }),
        honour("Serie A", "7"),
        honour("Coppa Italia", "1"),
        honour("Italian Super Cup", "5"),
        honour("European Super Cup", "4"),
        honour("Intercontinental Cup", "2"),
        honour("FIFA Club World Cup", "1")
      ],
      skills: [
        skill("Positioning", "He closed dangerous space early and forced attackers toward lower-value options."),
        skill("Versatility", "Maldini was world class as an attacking left back and later as a commanding centre back."),
        skill("Composure", "Pressure rarely changed his body shape, timing, or decision-making.")
      ],
      moments: [
        moment("1989 European Cup final", "Helped Milan overwhelm Steaua Bucharest during one of the club's greatest European runs."),
        moment("2003 Champions League final", "Lifted the trophy as captain after Milan defeated Juventus at Old Trafford."),
        moment("2007 redemption", "At 38, captained Milan to another Champions League title two years after the heartbreak of Istanbul.")
      ],
      why: [
        "Maldini is my highest-ranked pure defender. He was world class at left back and centre back, won five European Cups, and stayed near the top for more than two decades without ever making defending look rushed."
      ]
    },
    {
      slug: "beckenbauer",
      rank: 10,
      name: "Franz Beckenbauer",
      fullName: "Franz Anton Beckenbauer",
      country: "Germany",
      position: "Defender / Sweeper",
      image: "Beckenbauer.webp",
      gallery: ["Beckenbauer2.png", "beckenbauer3.png"],
      officialGoals: "112",
      born: "September 11, 1945",
      birthplace: "Munich, Germany",
      height: "1.81 m",
      foot: "Right",
      number: "5",
      era: "1964-1983",
      mainClubs: "Bayern Munich, New York Cosmos, Hamburg",
      knownFor: "The libero role, carrying the ball, command, elegant defending",
      summary: "Franz Beckenbauer redefined the sweeper as a playmaker who could control an entire match from behind the midfield.",
      definingTrait: "Defending and building attacks in the same movement",
      sideCaption: "Der Kaiser played with authority, balance, and unusual freedom from the back.",
      imagePosition: "center 20%",
      story: [
        "Beckenbauer grew with Bayern Munich from a rising German club into a European power. From the libero position, he stepped beyond the defensive line to carry the ball, set the tempo, and create numerical advantages in midfield.",
        "As captain, he led West Germany to the European Championship and World Cup, then later became a World Cup-winning coach. His calm authority and technical quality permanently expanded the possibilities of defensive play."
      ],
      clubs: [
        club("Bayern Munich", "1964-1977", "Built the club's first great European era and captained three consecutive European Cup wins."),
        club("New York Cosmos", "1977-1980, 1983", "Joined Pelé's former club and helped the Cosmos win three NASL championships."),
        club("Hamburg", "1980-1982", "Returned to Germany and added another Bundesliga title.")
      ],
      stats: [
        stat("Ballon d'Or awards", "2"),
        stat("European Cups", "3"),
        stat("West Germany caps", "103"),
        stat("World Cup titles", "1")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA European Championship", "1", { international: true }),
        honour("European Cup", "3", { important: true }),
        honour("European Cup Winners' Cup", "1"),
        honour("Bundesliga", "5"),
        honour("German Cup", "4"),
        honour("Intercontinental Cup", "1"),
        honour("NASL Championship", "3")
      ],
      skills: [
        skill("Libero playmaking", "He advanced from defence with the awareness and passing range of a midfielder."),
        skill("Ball carrying", "Smooth, upright carries broke the first line of pressure and changed the shape of attacks."),
        skill("Leadership", "Beckenbauer dictated tempo and positioning without appearing hurried.")
      ],
      moments: [
        moment("1974 World Cup", "Captained West Germany to victory on home soil, defeating the Netherlands in the final."),
        moment("European Cup three-peat", "Led Bayern to consecutive continental titles from 1974 through 1976."),
        moment("1970 World Cup semi-final", "Played on with a dislocated shoulder against Italy, his arm strapped to his body.")
      ],
      why: [
        "Beckenbauer changed what a defender could be. From sweeper he started attacks, stepped into midfield, and controlled games, while also captaining West Germany to the World Cup and Bayern to three straight European Cups."
      ]
    },
    {
      slug: "xavi",
      rank: 11,
      name: "Xavi",
      fullName: "Xavier Hernández Creus",
      country: "Spain",
      position: "Midfielder",
      image: "Xavi.jpg",
      gallery: ["xavi2.png", "xavi3.png"],
      officialGoals: "126",
      born: "January 25, 1980",
      birthplace: "Terrassa, Spain",
      height: "1.70 m",
      foot: "Right",
      number: "6",
      era: "1998-2019",
      mainClubs: "Barcelona, Al Sadd",
      knownFor: "Tempo, scanning, short passing, positional control",
      summary: "Xavi controlled matches through awareness and rhythm, becoming the central organizer of Barcelona and Spain's greatest teams.",
      definingTrait: "Making the right passing option appear inevitable",
      sideCaption: "Xavi turned constant scanning and simple passes into complete control.",
      imagePosition: "center 18%",
      story: [
        "A product of La Masia, Xavi became Barcelona's midfield reference after years of learning the club's positional game. His first touch, body orientation, and constant scanning allowed him to receive under pressure and keep the entire team connected.",
        "With Andrés Iniesta and Sergio Busquets, he formed the core of a team that dominated possession without becoming passive. The same qualities helped Spain win two European Championships around the 2010 World Cup."
      ],
      clubs: [
        club("Barcelona", "1998-2015", "The controlling midfielder at the heart of the club's most successful era."),
        club("Al Sadd", "2015-2019", "Finished his playing career in Qatar and won another league title.")
      ],
      stats: [
        stat("Barcelona appearances", "767"),
        stat("Champions Leagues", "4"),
        stat("La Liga titles", "8"),
        stat("Spain appearances", "133")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA European Championship", "2", { international: true }),
        honour("UEFA Champions League", "4", { important: true }),
        honour("La Liga", "8"),
        honour("Copa del Rey", "3"),
        honour("FIFA Club World Cup", "2"),
        honour("Spanish Super Cup", "6"),
        honour("Qatar Stars League", "1")
      ],
      skills: [
        skill("Scanning", "He checked his surroundings repeatedly before receiving, giving himself time in crowded areas."),
        skill("Tempo control", "Xavi knew when to recycle possession and when one quick pass could break the opponent."),
        skill("Press resistance", "A sharp first touch and precise turns allowed him to escape pressure without relying on speed.")
      ],
      moments: [
        moment("Euro 2008 semi-final", "Scored against Russia as Spain's historic international run gathered momentum."),
        moment("2009 Champions League final", "Created Barcelona's second goal with a perfect cross to Lionel Messi."),
        moment("2010 World Cup", "Set the rhythm for Spain throughout the tournament and completed more passes than any other player.")
      ],
      why: [
        "Xavi controlled matches through angles, timing, and constant availability rather than speed or strength. Barcelona and Spain's greatest teams both depended on his ability to keep the ball moving without losing the shape of the side."
      ]
    },
    {
      slug: "iniesta",
      rank: 12,
      name: "Andrés Iniesta",
      fullName: "Andrés Iniesta Luján",
      country: "Spain",
      position: "Midfielder",
      image: "Iniesta.jpg",
      gallery: ["iniesta2.png", "iniesta3.png"],
      officialGoals: "106",
      born: "May 11, 1984",
      birthplace: "Fuentealbilla, Spain",
      height: "1.71 m",
      foot: "Right",
      number: "8",
      era: "2002-2024",
      mainClubs: "Barcelona, Vissel Kobe, Emirates Club",
      knownFor: "Close control, balance, passing, big-game calm",
      summary: "Andrés Iniesta moved through pressure with extraordinary balance and delivered some of the most important moments in Spanish football history.",
      definingTrait: "Escaping crowded spaces without losing the next pass",
      sideCaption: "Iniesta's quiet style hid a player built for the largest moments.",
      imagePosition: "center 20%",
      story: [
        "Iniesta left his hometown for La Masia as a child and grew into a midfielder capable of playing centrally, between the lines, or from the left. His touch and body movement allowed him to glide past pressure while keeping complete awareness of his teammates.",
        "He shared Barcelona's golden era with Xavi and became Spain's match-winner in the 2010 World Cup final. His career combined subtle control with a remarkable habit of producing decisive actions when the stakes were highest."
      ],
      clubs: [
        club("Barcelona", "2002-2018", "Won every major club honour and became one of the defining players of the Guardiola era."),
        club("Vissel Kobe", "2018-2023", "Brought his technique to Japan and helped the club win its first major trophies."),
        club("Emirates Club", "2023-2024", "Completed his playing career in the United Arab Emirates.")
      ],
      stats: [
        stat("Barcelona appearances", "674"),
        stat("Champions Leagues", "4"),
        stat("La Liga titles", "9"),
        stat("World Cup-winning goals", "1")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA European Championship", "2", { international: true }),
        honour("UEFA Champions League", "4", { important: true }),
        honour("La Liga", "9"),
        honour("Copa del Rey", "6"),
        honour("FIFA Club World Cup", "3"),
        honour("Japanese Super Cup", "1"),
        honour("Emperor's Cup", "1")
      ],
      skills: [
        skill("La croqueta", "His rapid two-foot shift moved the ball through gaps before defenders could close them."),
        skill("Pressure escape", "Balance and soft touches let him receive in spaces where most players would immediately lose possession."),
        skill("Final-third timing", "Iniesta recognized when to accelerate, combine, or arrive for a decisive shot.")
      ],
      moments: [
        moment("2010 World Cup final", "Scored the extra-time winner against the Netherlands to make Spain world champions."),
        moment("Stamford Bridge, 2009", "His late strike against Chelsea sent Barcelona to the Champions League final."),
        moment("Euro 2012", "Was named Player of the Tournament as Spain completed an unprecedented run of three major titles.")
      ],
      why: [
        "Iniesta could keep a game calm or break it open with one dribble. His partnership with Xavi defined an era, but the winning goals and knockout performances for Spain were entirely his own."
      ]
    },
    {
      slug: "muller",
      rank: 13,
      name: "Gerd Müller",
      fullName: "Gerhard Müller",
      country: "Germany",
      position: "Forward",
      image: "muller.png",
      gallery: ["muller2.png", "muller3.png"],
      officialGoals: "724",
      born: "November 3, 1945",
      birthplace: "Nördlingen, Germany",
      height: "1.76 m",
      foot: "Right",
      number: "9",
      era: "1963-1981",
      mainClubs: "Bayern Munich, Fort Lauderdale Strikers",
      knownFor: "Penalty-box movement, reactions, balance, ruthless finishing",
      summary: "Gerd Müller was the penalty area's ultimate problem-solver, scoring from crowded situations with almost unmatched speed and instinct.",
      definingTrait: "Finding a finish before defenders found the ball",
      sideCaption: "Der Bomber needed little space and even less time.",
      imagePosition: "center 18%",
      story: [
        "Müller joined Bayern Munich before the club had become Germany's dominant force and helped drive its rise. With a low center of gravity and explosive reactions, he turned loose balls, awkward crosses, and half-chances into goals.",
        "His numbers were extraordinary for both Bayern and West Germany, but they were supported by the biggest possible goals: winners in European finals, a European Championship, and the 1974 World Cup final."
      ],
      clubs: [
        club("TSV 1861 Nördlingen", "1963-1964", "Scored at a remarkable rate before Bayern brought him to Munich."),
        club("Bayern Munich", "1964-1979", "Became the club's defining goalscorer and powered its rise in Germany and Europe."),
        club("Fort Lauderdale Strikers", "1979-1981", "Finished his career in the North American Soccer League.")
      ],
      stats: [
        stat("Bayern goals", "566"),
        stat("Bundesliga goals", "365"),
        stat("West Germany goals", "68"),
        stat("Ballon d'Or awards", "1")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA European Championship", "1", { international: true }),
        honour("European Cup", "3", { important: true }),
        honour("European Cup Winners' Cup", "1"),
        honour("Bundesliga", "4"),
        honour("German Cup", "4"),
        honour("Intercontinental Cup", "1")
      ],
      skills: [
        skill("Box movement", "Short, sharp movements separated him from markers exactly as the chance developed."),
        skill("Improvised finishing", "He could score while turning, falling, stretching, or reacting to a deflection."),
        skill("Balance", "His powerful legs and low stance kept him stable through contact in crowded areas.")
      ],
      moments: [
        moment("1974 World Cup final", "Scored the winning goal against the Netherlands with a rapid turn inside the box."),
        moment("Euro 1972 final", "Scored twice as West Germany defeated the Soviet Union 3-0."),
        moment("1970 World Cup", "Won the Golden Boot with ten goals in six matches.")
      ],
      why: [
        "Müller made the penalty area his territory. The movement looked simple only after he had found the space, and his goals decided European Cups, league titles, and a World Cup final."
      ]
    },
    {
      slug: "puskas",
      rank: 14,
      name: "Ferenc Puskás",
      fullName: "Ferenc Purczeld Puskás",
      country: "Hungary / Spain",
      position: "Forward",
      image: "Puskas.png",
      gallery: ["puskas2.png", "puskas3.png"],
      officialGoals: "754",
      born: "April 1, 1927",
      birthplace: "Budapest, Hungary",
      height: "1.72 m",
      foot: "Left",
      number: "10",
      era: "1943-1966",
      mainClubs: "Budapest Honvéd, Real Madrid",
      knownFor: "Left-foot finishing, intelligence, combination play, leadership",
      summary: "Ferenc Puskás combined a thunderous left foot with clever movement and became the attacking leader of two legendary teams.",
      definingTrait: "A left foot that turned small openings into certain goals",
      sideCaption: "Puskás captained the Magical Magyars before becoming a Real Madrid legend.",
      imagePosition: "center 20%",
      story: [
        "Puskás was the captain and attacking symbol of Hungary's Magical Magyars, a team that transformed international football in the early 1950s. He mixed scoring power with sharp combinations, dropping away from defenders before arriving to finish.",
        "After leaving Hungary, he rebuilt his career at Real Madrid in his thirties. Alongside Alfredo Di Stéfano, he became a central figure in another European dynasty and produced some of the greatest final performances in competition history."
      ],
      clubs: [
        club("Budapest Honvéd", "1943-1956", "Became Hungary's leading star and won five league championships."),
        club("Real Madrid", "1958-1966", "Scored relentlessly in Spain and won three European Cups and five league titles.")
      ],
      stats: [
        stat("Hungary goals", "84"),
        stat("Hungary appearances", "85"),
        stat("European Cups", "3"),
        stat("La Liga top-scorer awards", "4")
      ],
      honours: [
        honour("Olympic Gold Medal", "1", { important: true, international: true }),
        honour("European Cup", "3", { important: true }),
        honour("La Liga", "5"),
        honour("Hungarian League", "5"),
        honour("Copa del Rey", "1"),
        honour("Intercontinental Cup", "1")
      ],
      skills: [
        skill("Left-foot finishing", "Power and placement made his left foot dangerous from almost every central angle."),
        skill("Combination play", "Quick wall passes and intelligent dropping movements connected midfield to the penalty area."),
        skill("Game understanding", "Puskás manipulated defensive lines without relying on exceptional speed.")
      ],
      moments: [
        moment("1953 at Wembley", "Scored twice as Hungary became the first overseas team to defeat England at Wembley."),
        moment("1960 European Cup final", "Scored four goals in Real Madrid's 7-3 victory over Eintracht Frankfurt."),
        moment("1952 Olympic final", "Captained Hungary to gold during the rise of the Magical Magyars.")
      ],
      why: [
        "Puskás was the scorer and leader of Hungary's great 1950s team, then rebuilt his career at Real Madrid and filled European finals with goals. Few left feet have shaped more important matches."
      ]
    },
    {
      slug: "henry",
      rank: 15,
      name: "Thierry Henry",
      fullName: "Thierry Daniel Henry",
      country: "France",
      position: "Forward",
      image: "Henry.png",
      gallery: ["henry2.png", "henry3.png"],
      officialGoals: "417",
      born: "August 17, 1977",
      birthplace: "Les Ulis, France",
      height: "1.88 m",
      foot: "Right",
      number: "14",
      era: "1994-2014",
      mainClubs: "Monaco, Arsenal, Barcelona, New York Red Bulls",
      knownFor: "Acceleration, curved runs, composed finishing, creativity",
      summary: "Thierry Henry combined a sprinter's acceleration with a playmaker's awareness and became the Premier League's defining modern forward.",
      definingTrait: "Opening his body and making the far corner feel inevitable",
      sideCaption: "Henry's number 14 became inseparable from Arsenal's greatest era.",
      imagePosition: "center 18%",
      story: [
        "Henry began as a winger at Monaco and struggled briefly at Juventus before Arsène Wenger moved him into the center at Arsenal. That change unlocked a forward who could attack from the left, outrun a defensive line, create for teammates, and finish with remarkable calm.",
        "He led Arsenal's Invincibles and became the club's record scorer, then joined Barcelona and completed his European collection with the 2009 treble. For France, he won the World Cup, European Championship, and Confederations Cup."
      ],
      clubs: [
        club("Monaco", "1994-1999", "Developed under Arsène Wenger and won Ligue 1 as a young winger."),
        club("Juventus", "1999", "A short and difficult spell before the move that transformed his career."),
        club("Arsenal", "1999-2007, 2012", "Became the club's record scorer and the leading figure of the Invincibles."),
        club("Barcelona", "2007-2010", "Adjusted to a wider role and won the 2009 treble."),
        club("New York Red Bulls", "2010-2014", "Finished his career as a scorer and creator in MLS.")
      ],
      stats: [
        stat("Arsenal goals", "228"),
        stat("Premier League Golden Boots", "4"),
        stat("France goals", "51"),
        stat("Premier League titles", "2")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA European Championship", "1", { international: true }),
        honour("FIFA Confederations Cup", "1", { international: true }),
        honour("UEFA Champions League", "1", { important: true }),
        honour("Premier League", "2"),
        honour("FA Cup", "3"),
        honour("La Liga", "2"),
        honour("Copa del Rey", "1"),
        honour("FIFA Club World Cup", "1")
      ],
      skills: [
        skill("Left-channel acceleration", "Henry curved his runs from the wing into goal before defenders could adjust their hips."),
        skill("Far-corner finishing", "His open-body finish became one of the Premier League's most recognizable scoring actions."),
        skill("Creative passing", "He regularly dropped or moved wide to supply runners, not simply wait for chances.")
      ],
      moments: [
        moment("The Invincibles", "Scored 30 league goals as Arsenal completed the 2003-04 Premier League season unbeaten."),
        moment("Solo goal against Real Madrid", "Ran through the Madrid defense at the Bernabéu to win a 2006 Champions League knockout match."),
        moment("2009 treble", "Helped Barcelona win La Liga, the Copa del Rey, and the Champions League in one season.")
      ],
      why: [
        "Henry at Arsenal was a complete Premier League attack: scorer, creator, outlet, and counterattack by himself. He later changed his role at Barcelona and still helped a very different side win everything."
      ]
    },
    {
      slug: "platini",
      rank: 16,
      name: "Michel Platini",
      fullName: "Michel François Platini",
      country: "France",
      position: "Midfielder",
      image: "platini.png",
      gallery: ["platini2.png", "platini3.png"],
      officialGoals: "354",
      born: "June 21, 1955",
      birthplace: "Jœuf, France",
      height: "1.79 m",
      foot: "Right",
      number: "10",
      era: "1972-1987",
      mainClubs: "Nancy, Saint-Étienne, Juventus",
      knownFor: "Passing, free kicks, late runs, tournament control",
      summary: "Michel Platini was a complete attacking midfielder whose passing and scoring peak made him Europe's dominant player in the mid-1980s.",
      definingTrait: "Arriving like a striker while seeing the game like a playmaker",
      sideCaption: "Platini won three consecutive Ballon d'Or awards at his peak.",
      imagePosition: "center 20%",
      story: [
        "Platini developed in France as an elegant number 10 with unusual goalscoring instincts. At Juventus, he adapted to a demanding league and became its leading creative force, winning titles in Italy and the club's first European Cup.",
        "His international masterpiece came at Euro 1984, where he scored nine goals in five matches and led France to its first major trophy. Few midfielders have ever controlled a tournament so decisively."
      ],
      clubs: [
        club("Nancy", "1972-1979", "Became a French international and won the Coupe de France."),
        club("Saint-Étienne", "1979-1982", "Won Ligue 1 before moving to Italy."),
        club("Juventus", "1982-1987", "Reached his world-class peak and won domestic, European, and intercontinental honours.")
      ],
      stats: [
        stat("Ballon d'Or awards", "3"),
        stat("Euro 1984 goals", "9"),
        stat("France goals", "41"),
        stat("Serie A top-scorer awards", "3")
      ],
      honours: [
        honour("UEFA European Championship", "1", { important: true, international: true }),
        honour("European Cup", "1", { important: true }),
        honour("European Cup Winners' Cup", "1"),
        honour("Serie A", "2"),
        honour("Ligue 1", "1"),
        honour("Coupe de France", "1"),
        honour("Coppa Italia", "1"),
        honour("Intercontinental Cup", "1")
      ],
      skills: [
        skill("Late box arrivals", "He entered scoring positions after defenders had already committed to the forwards."),
        skill("Free kicks", "Platini combined repeatable technique with placement over and around defensive walls."),
        skill("Final pass", "His awareness and weight of pass released teammates without slowing attacks.")
      ],
      moments: [
        moment("Euro 1984", "Scored in every match, including two hat-tricks, as France won the tournament."),
        moment("1985 European Cup", "Converted the final's only goal to secure Juventus's first European Cup."),
        moment("Three straight Ballon d'Ors", "Won the award in 1983, 1984, and 1985 during an extraordinary individual peak.")
      ],
      why: [
        "Platini won three straight Ballon d'Or awards and scored nine times in five matches at Euro 1984. That combination of playmaking and goals from midfield gives him one of the strongest peaks on the list."
      ]
    },
    {
      slug: "romario",
      rank: 17,
      name: "Romário",
      fullName: "Romário de Souza Faria",
      country: "Brazil",
      position: "Forward",
      image: "romario.png",
      gallery: ["romario2.png", "romario3.png"],
      officialGoals: "784",
      born: "January 29, 1966",
      birthplace: "Rio de Janeiro, Brazil",
      height: "1.67 m",
      foot: "Right",
      number: "11",
      era: "1985-2009",
      mainClubs: "Vasco da Gama, PSV, Barcelona, Flamengo",
      knownFor: "Short movements, toe-pokes, one-on-ones, penalty-box cunning",
      summary: "Romário was a compact, explosive finisher who mastered the tiny movements and deceptive touches that decide matches inside the box.",
      definingTrait: "Creating a clear finish with one small movement",
      sideCaption: "Romário's 1994 World Cup run made him Brazil's decisive attacking star.",
      imagePosition: "center 20%",
      story: [
        "Romário moved from Vasco da Gama to PSV and became a prolific scorer in the Netherlands before joining Johan Cruyff's Barcelona. His balance, acceleration over short distances, and improvised finishes made him devastating despite his small frame.",
        "The 1994 World Cup defined his international legacy. He scored five times, combined brilliantly with Bebeto, and won the Golden Ball as Brazil ended a 24-year wait for the trophy."
      ],
      clubs: [
        club("Vasco da Gama", "1985-1988, later returns", "Began and repeatedly returned to the club most closely connected to his career."),
        club("PSV", "1988-1993", "Won three Dutch leagues and scored at an exceptional rate."),
        club("Barcelona", "1993-1995", "Led the line for Cruyff's Dream Team and scored 30 league goals in his first season."),
        club("Flamengo and other Brazilian clubs", "1995-2009", "Continued scoring across a long final phase in Brazil and abroad.")
      ],
      stats: [
        stat("1994 World Cup goals", "5"),
        stat("Brazil goals", "55"),
        stat("Dutch league titles", "3"),
        stat("FIFA World Player awards", "1")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("Copa América", "2", { international: true }),
        honour("FIFA Confederations Cup", "1", { international: true }),
        honour("La Liga", "1"),
        honour("Eredivisie", "3"),
        honour("Dutch Cup", "2"),
        honour("Brazilian Championship", "1"),
        honour("Rio State Championship", "6")
      ],
      skills: [
        skill("Short-range movement", "A single check or pause moved defenders just far enough to open a shooting lane."),
        skill("Toe-poke finishing", "He used a quick, low-backlift finish before goalkeepers could set their feet."),
        skill("One-on-ones", "Body feints and composure allowed him to make the goalkeeper commit first.")
      ],
      moments: [
        moment("1994 World Cup", "Won the Golden Ball and scored throughout Brazil's run to the title."),
        moment("Hat-trick against Real Madrid", "Scored three in Barcelona's 5-0 Clásico victory in January 1994."),
        moment("1997 Confederations Cup", "Shared the tournament's scoring lead as Brazil dominated the competition.")
      ],
      why: [
        "Romário needed very little room and even less time. His toe pokes, feints, and short bursts made him a nightmare in the box, and in 1994 he was the attacking figure Brazil trusted all the way to the World Cup."
      ]
    },
    {
      slug: "eusebio",
      rank: 18,
      name: "Eusébio",
      fullName: "Eusébio da Silva Ferreira",
      country: "Portugal",
      position: "Forward",
      image: "eusebio.png",
      gallery: ["eusebio2.png", "eusebio3.png"],
      officialGoals: "733",
      born: "January 25, 1942",
      birthplace: "Lourenço Marques, Mozambique",
      height: "1.75 m",
      foot: "Right",
      number: "13",
      era: "1957-1979",
      mainClubs: "Benfica, Toronto Metros-Croatia",
      knownFor: "Explosive running, powerful shooting, sportsmanship, European scoring",
      summary: "Eusébio combined sprinter-level acceleration with a powerful, accurate shot and carried Benfica and Portugal through historic campaigns.",
      definingTrait: "Exploding beyond the defense and finishing at full speed",
      sideCaption: "The Black Panther became Portugal's first global football superstar.",
      imagePosition: "center 18%",
      story: [
        "Born in Mozambique, Eusébio joined Benfica as a teenager and quickly became one of Europe's most feared forwards. His stride, strength, and shooting power allowed him to attack space directly, but he also possessed the technique to combine and finish with either placement or force.",
        "He led Benfica to the 1962 European Cup and carried Portugal to third place at the 1966 World Cup. His nine goals in that tournament included four in a comeback against North Korea."
      ],
      clubs: [
        club("Sporting de Lourenço Marques", "1957-1960", "Developed in Mozambique before Benfica brought him to Portugal."),
        club("Benfica", "1960-1975", "Became the club's greatest scorer and a European Cup winner."),
        club("North American clubs", "1975-1979", "Extended his career in the NASL and won a championship in Toronto.")
      ],
      stats: [
        stat("Benfica goals", "473"),
        stat("Portugal goals", "41"),
        stat("1966 World Cup goals", "9"),
        stat("Ballon d'Or awards", "1")
      ],
      honours: [
        honour("European Cup", "1", { important: true }),
        honour("Portuguese League", "11"),
        honour("Portuguese Cup", "5"),
        honour("NASL Championship", "1"),
        honour("1966 World Cup third place", "1", { international: true })
      ],
      skills: [
        skill("Acceleration", "His first steps and long stride turned open grass into immediate danger."),
        skill("Power shooting", "Eusébio generated exceptional force without sacrificing accuracy."),
        skill("Transition attacking", "He carried the ball directly at retreating defenses and finished before they recovered.")
      ],
      moments: [
        moment("1962 European Cup final", "Scored twice as Benfica defeated Real Madrid 5-3 in Amsterdam."),
        moment("1966 comeback against North Korea", "Scored four goals as Portugal recovered from 3-0 down to win 5-3."),
        moment("1966 World Cup Golden Boot", "Finished as the tournament's leading scorer with nine goals.")
      ],
      why: [
        "Eusébio combined explosive running with a fierce shot and produced in the biggest competitions. He led Benfica in Europe and scored nine goals at the 1966 World Cup, the tournament that put Portugal on the map."
      ]
    },
    {
      slug: "roberto-carlos",
      rank: 19,
      name: "Roberto Carlos",
      fullName: "Roberto Carlos da Silva Rocha",
      country: "Brazil",
      position: "Left Back",
      image: "robertocarlos.png",
      gallery: ["roberto2.png", "roberto3.png"],
      officialGoals: "127",
      born: "April 10, 1973",
      birthplace: "Garça, Brazil",
      height: "1.68 m",
      foot: "Left",
      number: "3",
      era: "1991-2015",
      mainClubs: "Palmeiras, Inter Milan, Real Madrid, Fenerbahçe",
      knownFor: "Explosive overlaps, power, recovery speed, spectacular free kicks",
      summary: "Roberto Carlos stretched the possibilities of the left-back position with relentless running and one of football's most powerful left feet.",
      definingTrait: "Turning the entire left touchline into his attacking territory",
      sideCaption: "Roberto Carlos combined elite recovery speed with fearless attacking ambition.",
      imagePosition: "center 18%",
      story: [
        "After winning titles with Palmeiras, Roberto Carlos moved to Europe and found his ideal home at Real Madrid. His acceleration allowed him to overlap continuously and still recover defensively, giving the team the width of a winger from left back.",
        "He became a key member of Brazil's 2002 World Cup champions and Real Madrid's European revival. His unusual shooting technique produced free kicks and long-range goals that remain instantly recognizable."
      ],
      clubs: [
        club("Palmeiras", "1993-1995", "Won back-to-back Brazilian league titles before moving to Europe."),
        club("Inter Milan", "1995-1996", "Spent one season in Italy and scored memorable long-range goals."),
        club("Real Madrid", "1996-2007", "Became a club legend across eleven seasons and three Champions League victories."),
        club("Fenerbahçe", "2007-2009", "Added trophies and experience in Turkey."),
        club("Later clubs", "2010-2015", "Played for Corinthians, Anzhi Makhachkala, and Delhi Dynamos.")
      ],
      stats: [
        stat("Real Madrid appearances", "527"),
        stat("Champions Leagues", "3"),
        stat("Brazil appearances", "125"),
        stat("World Cups", "1")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("Copa América", "2", { international: true }),
        honour("FIFA Confederations Cup", "1", { international: true }),
        honour("UEFA Champions League", "3", { important: true }),
        honour("La Liga", "4"),
        honour("Intercontinental Cup", "2"),
        honour("Brazilian Championship", "2"),
        honour("Turkish Super Cup", "2")
      ],
      skills: [
        skill("Overlapping speed", "He accelerated past midfielders and reached the final third without sacrificing recovery ability."),
        skill("Power striking", "A violent, low-spin technique made his free kicks and long shots difficult to read."),
        skill("Recovery defending", "Elite pace allowed him to repair space behind his aggressive forward runs.")
      ],
      moments: [
        moment("The impossible free kick", "His bending strike against France in 1997 became one of football's most studied goals."),
        moment("2002 World Cup", "Started every match as Brazil won the tournament with seven consecutive victories."),
        moment("2002 Champions League run", "Played a major role in Madrid's ninth European Cup, including the final assist for Zidane.")
      ],
      why: [
        "Roberto Carlos made the entire left side feel dangerous. His recovery speed let him attack constantly, and his delivery and shooting gave Brazil and Real Madrid an extra weapon in trophy-winning teams."
      ]
    },
    {
      slug: "alfredo-di-stefano",
      rank: 20,
      name: "Alfredo Di Stéfano",
      fullName: "Alfredo Stéfano Di Stéfano Laulhé",
      country: "Argentina / Spain",
      position: "Forward / Attacking Midfielder",
      image: "stefano.png",
      gallery: ["stefano2.png", "stefano3.png"],
      officialGoals: "509",
      born: "July 4, 1926",
      birthplace: "Buenos Aires, Argentina",
      height: "1.78 m",
      foot: "Right",
      number: "9",
      era: "1945-1966",
      mainClubs: "River Plate, Millonarios, Real Madrid, Espanyol",
      knownFor: "Complete movement, leadership, scoring, all-pitch influence",
      summary: "Alfredo Di Stéfano was the complete force behind Real Madrid's first European dynasty, influencing every phase rather than waiting near goal.",
      definingTrait: "Appearing wherever the match needed its best player",
      sideCaption: "La Saeta Rubia was scorer, creator, organizer, and leader in one.",
      imagePosition: "center 18%",
      story: [
        "Di Stéfano began in Argentina, became a star with Millonarios in Colombia, and then transformed Real Madrid. Although listed as a forward, he dropped into midfield, pressed, built attacks, defended, and still arrived to score.",
        "He scored in five consecutive European Cup finals as Madrid won every one of them. That combination of total influence and final-stage production made him the defining club player of the competition's first era."
      ],
      clubs: [
        club("River Plate", "1945-1949", "Won Argentine titles and emerged as one of South America's leading forwards."),
        club("Millonarios", "1949-1953", "Dominated Colombia's celebrated El Dorado era."),
        club("Real Madrid", "1953-1964", "Led the club to five straight European Cups and eight Spanish league titles."),
        club("Espanyol", "1964-1966", "Completed his senior career in Barcelona.")
      ],
      stats: [
        stat("European Cups", "5"),
        stat("European final goals", "7"),
        stat("Ballon d'Or awards", "2"),
        stat("La Liga titles", "8")
      ],
      honours: [
        honour("European Cup", "5", { important: true }),
        honour("La Liga", "8"),
        honour("Copa del Rey", "1"),
        honour("Intercontinental Cup", "1"),
        honour("Argentine Championship", "2"),
        honour("Colombian Championship", "3"),
        honour("Copa Colombia", "1")
      ],
      skills: [
        skill("Complete movement", "Di Stéfano moved from defense to attack and connected every line of the team."),
        skill("Relentless leadership", "He demanded tempo, pressing, and concentration while setting the standard himself."),
        skill("Final-stage scoring", "He consistently produced goals in European football's most important matches.")
      ],
      moments: [
        moment("Five straight European Cups", "Scored in every final as Real Madrid won the first five editions of the competition."),
        moment("1960 final in Glasgow", "Scored a hat-trick in the 7-3 victory over Eintracht Frankfurt."),
        moment("Super Ballon d'Or", "Received the unique award in 1989 for his place among the game's historic greats.")
      ],
      why: [
        "Di Stéfano did almost everything for the Real Madrid side that won the first five European Cups. He scored in every final, dropped into midfield, defended, and set the tempo. The distance of his era is the only reason he is not even higher."
      ]
    },
    {
      slug: "cafu",
      rank: 21,
      name: "Cafu",
      fullName: "Marcos Evangelista de Morais",
      country: "Brazil",
      position: "Right Back",
      image: "cafu.png",
      gallery: ["cafu2.png", "cafu3.png"],
      officialGoals: "59",
      born: "June 7, 1970",
      birthplace: "Itaquaquecetuba, Brazil",
      height: "1.76 m",
      foot: "Right",
      number: "2",
      era: "1989-2008",
      mainClubs: "São Paulo, Roma, AC Milan",
      knownFor: "Endless running, overlaps, crossing, leadership",
      summary: "Cafu combined stamina, timing, and leadership to become the only player to appear in three consecutive World Cup finals.",
      definingTrait: "Repeating the same high-speed overlap deep into every match",
      sideCaption: "Cafu lifted the World Cup as Brazil captain in 2002.",
      imagePosition: "center 18%",
      story: [
        "Cafu survived repeated rejections early in his career before establishing himself with São Paulo. His energy and intelligent overlapping helped the club win South American and world titles, leading to a long career at the top of European football.",
        "With Roma and AC Milan he won Serie A and the Champions League. For Brazil, he reached the 1994, 1998, and 2002 World Cup finals, captaining the last of those teams to victory."
      ],
      clubs: [
        club("São Paulo", "1989-1995", "Won the Copa Libertadores and Intercontinental Cup twice."),
        club("Real Zaragoza", "1995", "Added the European Cup Winners' Cup during a short Spanish spell."),
        club("Palmeiras", "1996-1997", "Returned to Brazil before establishing himself in Serie A."),
        club("Roma", "1997-2003", "Became a supporter favorite and won the 2000-01 league title."),
        club("AC Milan", "2003-2008", "Won the Champions League, Serie A, and Club World Cup.")
      ],
      stats: [
        stat("Brazil appearances", "142"),
        stat("World Cup finals", "3"),
        stat("World Cup titles", "2"),
        stat("Champions Leagues", "1")
      ],
      honours: [
        honour("FIFA World Cup", "2", { important: true, international: true }),
        honour("Copa América", "2", { international: true }),
        honour("FIFA Confederations Cup", "1", { international: true }),
        honour("Copa Libertadores", "2"),
        honour("Intercontinental Cup", "2"),
        honour("European Cup Winners' Cup", "1"),
        honour("Serie A", "2"),
        honour("UEFA Champions League", "1", { important: true }),
        honour("FIFA Club World Cup", "1")
      ],
      skills: [
        skill("Stamina", "Cafu maintained attacking and defensive intensity for full matches and full tournaments."),
        skill("Overlap timing", "He chose the moment to pass his winger rather than running forward without purpose."),
        skill("Leadership", "His positivity and reliability made him a natural captain in a team full of stars.")
      ],
      moments: [
        moment("2002 World Cup final", "Captained Brazil to victory over Germany and lifted the trophy in Yokohama."),
        moment("Three straight World Cup finals", "Appeared in the 1994, 1998, and 2002 finals, a unique achievement."),
        moment("2007 Champions League", "Started as Milan defeated Liverpool in Athens and regained the European title.")
      ],
      why: [
        "Cafu played in three straight World Cup finals and lifted the trophy as Brazil's captain in 2002. The endless running is what people remember, but his positioning and consistency are what kept him at the top."
      ]
    },
    {
      slug: "matthaus",
      rank: 22,
      name: "Lothar Matthäus",
      fullName: "Lothar Herbert Matthäus",
      country: "Germany",
      position: "Midfielder / Sweeper",
      image: "Matthaus.png",
      gallery: ["matthaus2.png", "matthaus3.png"],
      officialGoals: "227",
      born: "March 21, 1961",
      birthplace: "Erlangen, Germany",
      height: "1.74 m",
      foot: "Right",
      number: "10",
      era: "1979-2000",
      mainClubs: "Borussia Mönchengladbach, Bayern Munich, Inter Milan",
      knownFor: "Box-to-box power, shooting, leadership, tactical adaptability",
      summary: "Lothar Matthäus combined midfield power, technical quality, and defensive intelligence across two decades at the highest level.",
      definingTrait: "Driving a team forward from any central position",
      sideCaption: "Matthäus captained West Germany to the 1990 World Cup.",
      imagePosition: "center 18%",
      story: [
        "Matthäus began as an energetic box-to-box midfielder, covering ground, carrying the ball, and striking from distance. His move to Inter produced a Serie A title and the individual peak that earned the 1990 Ballon d'Or.",
        "Later, he reinvented himself as a sweeper for Bayern Munich. That transition extended his elite career and showed the game intelligence behind his athletic style."
      ],
      clubs: [
        club("Borussia Mönchengladbach", "1979-1984", "Reached the UEFA Cup final and established himself as a leading German midfielder."),
        club("Bayern Munich", "1984-1988, 1992-2000", "Won seven Bundesliga titles across two spells and later excelled as a sweeper."),
        club("Inter Milan", "1988-1992", "Produced his Ballon d'Or peak and won Serie A and the UEFA Cup."),
        club("MetroStars", "2000", "Finished his career in Major League Soccer.")
      ],
      stats: [
        stat("Germany appearances", "150"),
        stat("World Cups played", "5"),
        stat("Bundesliga titles", "7"),
        stat("Ballon d'Or awards", "1")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA European Championship", "1", { international: true }),
        honour("UEFA Cup", "2"),
        honour("Bundesliga", "7"),
        honour("Serie A", "1"),
        honour("German Cup", "3"),
        honour("German League Cup", "4")
      ],
      skills: [
        skill("Box-to-box force", "He covered both penalty areas and could turn a recovery into an attack himself."),
        skill("Long-range shooting", "Powerful strikes punished teams that failed to close central space."),
        skill("Reinvention", "Matthäus shifted from attacking midfielder to deep organizer and elite sweeper.")
      ],
      moments: [
        moment("1990 World Cup", "Captained West Germany, scored four goals, and controlled the tournament from midfield."),
        moment("1988-89 Serie A", "Led Inter to the title with a record points total under the two-points-for-a-win system."),
        moment("1999 Champions League final", "Came painfully close to the one major club trophy missing from his career.")
      ],
      why: [
        "Matthäus could drive through midfield, score from distance, mark an opponent, or sit deeper and organize the team. Captaining West Germany to the 1990 World Cup completed one of the broadest careers here."
      ]
    },
    {
      slug: "baresi",
      rank: 23,
      name: "Franco Baresi",
      fullName: "Franchino Baresi",
      country: "Italy",
      position: "Defender / Sweeper",
      image: "baresi.png",
      gallery: ["baresi2.png", "baresi3.png"],
      officialGoals: "34",
      born: "May 8, 1960",
      birthplace: "Travagliato, Italy",
      height: "1.76 m",
      foot: "Right",
      number: "6",
      era: "1977-1997",
      mainClubs: "AC Milan",
      knownFor: "Anticipation, line control, distribution, compact defending",
      summary: "Franco Baresi commanded AC Milan's defensive line through anticipation and organization rather than physical size.",
      definingTrait: "Moving four defenders as if they shared one mind",
      sideCaption: "Baresi captained one of the strongest defensive teams football has seen.",
      imagePosition: "center 18%",
      story: [
        "Rejected by Inter as a young player, Baresi joined AC Milan and stayed for twenty seasons. As a libero, he stepped forward to intercept, organized the offside line, and started attacks with precise passing.",
        "He captained Arrigo Sacchi and Fabio Capello's great Milan teams, whose pressing and defensive coordination changed elite club football. His performance in the 1994 World Cup final, only weeks after knee surgery, remains a model of defensive courage."
      ],
      clubs: [
        club("AC Milan", "1977-1997", "Spent his entire senior career at Milan, leading the club from Serie B back to European dominance.")
      ],
      stats: [
        stat("Milan appearances", "719"),
        stat("European Cups", "3"),
        stat("Serie A titles", "6"),
        stat("Italy appearances", "81")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("European Cup", "3", { important: true }),
        honour("Serie A", "6"),
        honour("Italian Super Cup", "4"),
        honour("European Super Cup", "3"),
        honour("Intercontinental Cup", "2"),
        honour("Serie B", "2")
      ],
      skills: [
        skill("Anticipation", "He stepped into passing lanes before forwards could secure the ball."),
        skill("Line control", "Baresi coordinated aggressive pressing and offside positioning with constant communication."),
        skill("Build-up passing", "Accurate forward passes allowed Milan to attack immediately after regaining possession.")
      ],
      moments: [
        moment("1989 European Cup final", "Captained Milan during a dominant 4-0 victory over Steaua Bucharest."),
        moment("1994 World Cup final", "Returned rapidly from knee surgery and delivered a masterful defensive performance against Brazil."),
        moment("The 1991-92 Invincibles", "Led Milan through an unbeaten Serie A season.")
      ],
      why: [
        "Baresi was the organizer behind Milan's great defensive line. He read danger early, stepped forward with the ball, and controlled the space behind him with the authority of a midfielder running a game."
      ]
    },
    {
      slug: "neymar",
      rank: 24,
      name: "Neymar Jr",
      fullName: "Neymar da Silva Santos Júnior",
      country: "Brazil",
      position: "Forward / Winger",
      image: "neymar.png",
      gallery: ["neymar2.png", "neymar3.png"],
      officialGoals: "456",
      born: "February 5, 1992",
      birthplace: "Mogi das Cruzes, Brazil",
      height: "1.75 m",
      foot: "Right",
      number: "10",
      era: "2009-present",
      mainClubs: "Santos, Barcelona, Paris Saint-Germain, Al Hilal",
      knownFor: "Dribbling, flair, combination play, scoring from the left",
      summary: "Neymar joined Brazilian street creativity to elite production, becoming one of his generation's most dangerous scorers and creators.",
      definingTrait: "Creating an attacking advantage from a standing start",
      sideCaption: "Neymar returned to Santos in 2025 and remains the club's number 10.",
      imagePosition: "center 16%",
      story: [
        "Neymar became a superstar at Santos, winning the Copa Libertadores and bringing global attention back to Brazilian club football. At Barcelona, his dribbling and combination play formed part of the historic Messi-Suárez-Neymar attack.",
        "He moved to Paris Saint-Germain for a world-record fee and became Brazil's record men's international scorer. Injuries interrupted important stretches, but his peak combined high-volume creation, goals, and spectacular one-on-one ability. He returned to Santos in 2025 and extended his stay through 2026."
      ],
      clubs: [
        club("Santos", "2009-2013, 2025-present", "Won the Libertadores as a young star and later returned as captain and number 10."),
        club("Barcelona", "2013-2017", "Won the treble and formed one of football's most productive attacking trios."),
        club("Paris Saint-Germain", "2017-2023", "Became the center of an ambitious project and reached the 2020 Champions League final."),
        club("Al Hilal", "2023-2025", "A short Saudi spell was heavily interrupted by injury.")
      ],
      stats: [
        stat("Brazil goals", "79"),
        stat("Champions Leagues", "1"),
        stat("Copa Libertadores", "1"),
        stat("Olympic gold medals", "1")
      ],
      honours: [
        honour("Olympic Gold Medal", "1", { important: true, international: true }),
        honour("FIFA Confederations Cup", "1", { international: true }),
        honour("Copa Libertadores", "1", { important: true }),
        honour("Recopa Sudamericana", "1"),
        honour("UEFA Champions League", "1", { important: true }),
        honour("La Liga", "2"),
        honour("Copa del Rey", "3"),
        honour("Ligue 1", "5"),
        honour("French Cup", "3"),
        honour("Saudi Pro League", "1")
      ],
      skills: [
        skill("Isolation dribbling", "He used changes of rhythm, stepovers, and touches with either foot to unbalance fullbacks."),
        skill("Combination play", "Quick exchanges around the box made him as dangerous without a long dribble as with one."),
        skill("Chance creation", "Neymar could pass through the final line from wide or central positions.")
      ],
      moments: [
        moment("2015 Champions League final", "Scored the final goal against Juventus to complete Barcelona's treble."),
        moment("The 6-1 comeback", "Produced two goals and the decisive assist during Barcelona's extraordinary recovery against PSG."),
        moment("2016 Olympic final", "Scored the winning penalty at the Maracanã to give Brazil its first men's football gold medal.")
      ],
      why: [
        "Neymar's best football was good enough for a much higher place. He scored, created, and carried the ball at an elite level; injuries and too many interrupted seasons are what hold the full career back."
      ]
    },
    {
      slug: "kaka",
      rank: 25,
      name: "Kaká",
      fullName: "Ricardo Izecson dos Santos Leite",
      country: "Brazil",
      position: "Attacking Midfielder",
      image: "Kaka.png",
      gallery: ["kaka2.png", "kaka3.png"],
      officialGoals: "237",
      born: "April 22, 1982",
      birthplace: "Gama, Brazil",
      height: "1.86 m",
      foot: "Right",
      number: "22",
      era: "2001-2017",
      mainClubs: "São Paulo, AC Milan, Real Madrid, Orlando City",
      knownFor: "Long-stride carrying, direct passing, late runs, transition attacks",
      summary: "Kaká attacked open space with rare elegance and speed, reaching his peak as the complete driving force behind AC Milan's 2007 European title.",
      definingTrait: "Carrying the ball forty meters without losing control or vision",
      sideCaption: "Kaká's 2007 season earned the Ballon d'Or and Champions League.",
      imagePosition: "center 18%",
      story: [
        "Kaká emerged at São Paulo before AC Milan recognized how his long stride, close control, and passing could connect midfield to attack. He was not a traditional stationary number 10; he accelerated through central space and made decisions at speed.",
        "His 2006-07 Champions League campaign was the defining peak, ending with ten goals and the trophy. Injuries complicated his Real Madrid years, but his best Milan seasons remain among the finest by a modern attacking midfielder."
      ],
      clubs: [
        club("São Paulo", "2001-2003, 2014 loan", "Became a first-team star in Brazil and later returned briefly."),
        club("AC Milan", "2003-2009, 2013-2014", "Reached his Ballon d'Or peak and became a Champions League winner."),
        club("Real Madrid", "2009-2013", "Won La Liga and the Copa del Rey during an injury-affected spell."),
        club("Orlando City", "2015-2017", "Became the MLS club's first major star and captain.")
      ],
      stats: [
        stat("Ballon d'Or awards", "1"),
        stat("2006-07 UCL goals", "10"),
        stat("Brazil appearances", "92"),
        stat("Champions Leagues", "1")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("FIFA Confederations Cup", "2", { international: true }),
        honour("UEFA Champions League", "1", { important: true }),
        honour("FIFA Club World Cup", "1"),
        honour("Serie A", "1"),
        honour("La Liga", "1"),
        honour("Copa del Rey", "1"),
        honour("European Super Cup", "1")
      ],
      skills: [
        skill("Transition carrying", "His long stride moved the ball from midfield into shooting range faster than defensive blocks could retreat."),
        skill("Vertical passing", "Kaká looked forward early and released strikers into space with direct, correctly weighted passes."),
        skill("Late runs", "He arrived beyond the striker after defenders had focused on the first attacking line.")
      ],
      moments: [
        moment("Old Trafford, 2007", "Scored two brilliant semi-final goals against Manchester United, including an iconic solo finish."),
        moment("2007 Champions League", "Finished as top scorer and led Milan to the title in Athens."),
        moment("2007 Ballon d'Or", "Won the award after a season that established him as the world's best player.")
      ],
      why: [
        "Kaká's peak was direct and devastating. He ran through the middle of elite teams, made good decisions at speed, and owned the 2007 Champions League from the first round to the final."
      ]
    },
    {
      slug: "rivaldo",
      rank: 26,
      name: "Rivaldo",
      fullName: "Rivaldo Vítor Borba Ferreira",
      country: "Brazil",
      position: "Attacking Midfielder / Forward",
      image: "rivaldo.png",
      gallery: ["rivaldo2.png", "rivaldo3.png"],
      officialGoals: "419",
      born: "April 19, 1972",
      birthplace: "Recife, Brazil",
      height: "1.86 m",
      foot: "Left",
      number: "10",
      era: "1991-2015",
      mainClubs: "Palmeiras, Deportivo La Coruña, Barcelona, AC Milan",
      knownFor: "Left-foot striking, improvisation, scoring from midfield",
      summary: "Rivaldo was an angular, unpredictable attacking midfielder who could create or score spectacular goals from almost any position.",
      definingTrait: "Producing a decisive left-foot action without warning",
      sideCaption: "Rivaldo won the 1999 Ballon d'Or and the 2002 World Cup.",
      imagePosition: "center 18%",
      story: [
        "Rivaldo rose from difficult beginnings in Brazil to become a star with Palmeiras and Deportivo La Coruña. At Barcelona, his left foot, late movement, and appetite for difficult shots produced goals normally associated with pure strikers.",
        "He was Brazil's creative and scoring leader at the 1999 Copa América, then an essential part of the Ronaldo-Rivaldo-Ronaldinho attack that won the 2002 World Cup."
      ],
      clubs: [
        club("Palmeiras", "1994-1996", "Won the Brazilian league and became one of the country's leading attackers."),
        club("Deportivo La Coruña", "1996-1997", "Scored prolifically in his first Spanish season."),
        club("Barcelona", "1997-2002", "Won the Ballon d'Or and two league titles while carrying much of the attack."),
        club("AC Milan", "2002-2004", "Added the Champions League before a long final phase across several countries."),
        club("Later clubs", "2004-2015", "Won titles in Greece and continued playing into his forties.")
      ],
      stats: [
        stat("Ballon d'Or awards", "1"),
        stat("Brazil goals", "35"),
        stat("World Cups", "1"),
        stat("La Liga titles", "2")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("Copa América", "1", { international: true }),
        honour("FIFA Confederations Cup", "1", { international: true }),
        honour("UEFA Champions League", "1", { important: true }),
        honour("La Liga", "2"),
        honour("Copa del Rey", "1"),
        honour("Brazilian Championship", "1"),
        honour("Greek Super League", "3")
      ],
      skills: [
        skill("Left-foot striking", "He generated power and disguise from free kicks, open play, and awkward body positions."),
        skill("Improvisation", "Overhead kicks, flicks, and unusual first touches gave him solutions outside normal patterns."),
        skill("Goal threat", "Rivaldo attacked the box and shot often enough to function as a second striker.")
      ],
      moments: [
        moment("Hat-trick against Valencia", "Completed a last-day hat-trick with an overhead kick to send Barcelona into the Champions League."),
        moment("1999 Copa América", "Finished as joint top scorer and player of the tournament as Brazil became champions."),
        moment("2002 World Cup", "Scored five goals and contributed to every match in Brazil's winning campaign.")
      ],
      why: [
        "Rivaldo was a number 10 with a striker's scoring record. He could create, shoot from distance, and finish awkward chances, and he was a central figure for both Barcelona and Brazil."
      ]
    },
    {
      slug: "luis-suarez",
      rank: 27,
      name: "Luis Suárez",
      fullName: "Luis Alberto Suárez Díaz",
      country: "Uruguay",
      position: "Forward",
      image: "suarez.png",
      gallery: ["suarez2.png", "suarez3.png"],
      officialGoals: "609",
      born: "January 24, 1987",
      birthplace: "Salto, Uruguay",
      height: "1.82 m",
      foot: "Right",
      number: "9",
      era: "2005-present",
      mainClubs: "Ajax, Liverpool, Barcelona, Atlético Madrid",
      knownFor: "Movement, aggression, finishing, pressing, improvised goals",
      summary: "Luis Suárez fused relentless competitive energy with elite technique to become one of the most complete center forwards of his generation.",
      definingTrait: "Turning broken plays into immediate scoring chances",
      sideCaption: "Suárez was scorer, creator, and first defender for every attack he led.",
      imagePosition: "center 18%",
      story: [
        "Suárez developed into a prolific captain at Ajax before becoming Liverpool's attacking center. His 2013-14 season combined outrageous goals, creativity, pressing, and near-single-handed title contention.",
        "At Barcelona, he adapted to playing beside Messi and Neymar without losing his own influence. He scored, created, pressed, and occupied defenders during a treble season, then later delivered another league title for Atlético Madrid."
      ],
      clubs: [
        club("Nacional and Groningen", "2005-2007", "Began in Uruguay before making his first European move."),
        club("Ajax", "2007-2011", "Became captain, league champion, and one of Europe's most prolific young forwards."),
        club("Liverpool", "2011-2014", "Reached an extraordinary individual peak and won the European Golden Shoe."),
        club("Barcelona", "2014-2020", "Scored 198 goals and won the treble as part of the MSN attack."),
        club("Atlético and later clubs", "2020-present", "Won La Liga with Atlético, then played for Nacional, Grêmio, and Inter Miami.")
      ],
      stats: [
        stat("Barcelona goals", "198"),
        stat("Uruguay goals", "69"),
        stat("European Golden Shoes", "2"),
        stat("Champions Leagues", "1")
      ],
      honours: [
        honour("Copa América", "1", { important: true, international: true }),
        honour("UEFA Champions League", "1", { important: true }),
        honour("La Liga", "5"),
        honour("Copa del Rey", "4"),
        honour("FIFA Club World Cup", "1"),
        honour("Dutch Cup", "1"),
        honour("Uruguayan Championship", "2"),
        honour("Brazilian State Championship", "1")
      ],
      skills: [
        skill("Improvised finishing", "He scored with early hits, volleys, chips, and awkward contacts before defenses settled."),
        skill("Relentless movement", "Suárez ran across center backs, attacked rebounds, and pressed every uncertain touch."),
        skill("Creative link play", "He could receive with his back to goal and create high-value chances for wide teammates.")
      ],
      moments: [
        moment("2013-14 Premier League", "Scored 31 league goals without penalties and drove Liverpool to the edge of the title."),
        moment("2015 Champions League final", "Scored Barcelona's decisive second goal against Juventus in Berlin."),
        moment("2020-21 La Liga", "Scored 21 league goals as Atlético Madrid won the title on the final day.")
      ],
      why: [
        "At his best, Suárez gave a team almost everything a centre forward could: goals, pressing, invention, movement, and a nasty competitive edge. The controversies cannot be removed from the story, but neither can the extraordinary football."
      ]
    },
    {
      slug: "ramos",
      rank: 28,
      name: "Sergio Ramos",
      fullName: "Sergio Ramos García",
      country: "Spain",
      position: "Defender",
      image: "ramos.png",
      gallery: ["ramos2.png", "ramos3.png"],
      officialGoals: "150",
      born: "March 30, 1986",
      birthplace: "Camas, Spain",
      height: "1.84 m",
      foot: "Right",
      number: "4",
      era: "2004-present",
      mainClubs: "Sevilla, Real Madrid, Paris Saint-Germain, Monterrey",
      knownFor: "Aerial goals, aggression, recovery defending, big moments",
      summary: "Sergio Ramos combined front-foot defending and extraordinary late-game scoring to shape an era for Real Madrid and Spain.",
      definingTrait: "Treating the final minute like an attacking set piece built for him",
      sideCaption: "Ramos captained Madrid and became one of football's great scoring defenders.",
      imagePosition: "center 16%",
      story: [
        "Ramos emerged at Sevilla as an athletic right back before Real Madrid moved him into central defense. His speed, aggression, and comfort on the ball suited high defensive lines, while his heading made him a constant attacking threat.",
        "He won every major title with Spain and captained Madrid through four Champions League victories. His career included disciplinary risk, but also a rare willingness to take responsibility in decisive moments."
      ],
      clubs: [
        club("Sevilla", "2004-2005, 2023-2024", "Began at his academy club and returned almost two decades later."),
        club("Real Madrid", "2005-2021", "Became captain, club icon, and four-time Champions League winner."),
        club("Paris Saint-Germain", "2021-2023", "Won two Ligue 1 titles in France."),
        club("Monterrey", "2025-2026", "Added a late-career chapter in Mexican football.")
      ],
      stats: [
        stat("Spain appearances", "180"),
        stat("Real Madrid appearances", "671"),
        stat("Champions Leagues", "4"),
        stat("Spain goals", "23")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA European Championship", "2", { international: true }),
        honour("UEFA Champions League", "4", { important: true }),
        honour("La Liga", "5"),
        honour("Copa del Rey", "2"),
        honour("FIFA Club World Cup", "4"),
        honour("European Super Cup", "3"),
        honour("Ligue 1", "2")
      ],
      skills: [
        skill("Aerial timing", "Ramos attacked crosses with the movement and conviction of a center forward."),
        skill("Front-foot defending", "He stepped aggressively into duels to stop attacks before they reached the box."),
        skill("Recovery speed", "Pace helped him defend large spaces behind possession-heavy teams.")
      ],
      moments: [
        moment("La Décima, 92:48", "His stoppage-time header against Atlético forced extra time in the 2014 Champions League final."),
        moment("2010 World Cup", "Started every match at right back as Spain won its first world title."),
        moment("2016 Champions League final", "Scored again against Atlético and lifted the trophy as Madrid captain.")
      ],
      why: [
        "Ramos was aggressive, quick, and unusually decisive in front of goal for a defender. He sometimes crossed the line, but that same nerve produced stoppage-time headers and leadership in the biggest matches."
      ]
    },
    {
      slug: "neuer",
      rank: 29,
      name: "Manuel Neuer",
      fullName: "Manuel Peter Neuer",
      country: "Germany",
      position: "Goalkeeper",
      image: "neuer.png",
      gallery: ["neuer2.png", "neuer3.png"],
      officialGoals: "0",
      born: "March 27, 1986",
      birthplace: "Gelsenkirchen, Germany",
      height: "1.93 m",
      foot: "Right",
      number: "1",
      era: "2006-present",
      mainClubs: "Schalke 04, Bayern Munich",
      knownFor: "Sweeper-keeping, one-on-ones, distribution, command",
      summary: "Manuel Neuer expanded the goalkeeper's territory, defending far outside his box while remaining an elite shot-stopper.",
      definingTrait: "Erasing through balls before they became shots",
      sideCaption: "Neuer's positioning allowed Bayern and Germany to play with a higher defensive line.",
      imagePosition: "center 16%",
      story: [
        "Neuer developed at Schalke, where his shot-stopping and personality were already obvious. At Bayern Munich, his comfort outside the penalty area became a tactical weapon, allowing the team to compress the pitch and dominate possession.",
        "The 2014 World Cup made the sweeper-keeper idea globally famous, especially his performance against Algeria. He has remained Bayern's number one into 2026, combining innovation with the traditional fundamentals of goalkeeping."
      ],
      clubs: [
        club("Schalke 04", "2006-2011", "Won the German Cup and produced a remarkable Champions League run."),
        club("Bayern Munich", "2011-present", "Redefined elite goalkeeping across an era of domestic dominance and two European trebles.")
      ],
      stats: [
        stat("World Cups", "1"),
        stat("Champions Leagues", "2"),
        stat("Bundesliga titles", "13"),
        stat("Germany appearances", "124")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA Champions League", "2", { important: true }),
        honour("Bundesliga", "13"),
        honour("German Cup", "6"),
        honour("FIFA Club World Cup", "2"),
        honour("European Super Cup", "2"),
        honour("German Super Cup", "8")
      ],
      skills: [
        skill("Sweeper-keeping", "He reads passes early and arrives beyond the box before forwards can control them."),
        skill("One-on-ones", "A large frame, patience, and explosive reactions make him difficult to beat at close range."),
        skill("Distribution", "Neuer can begin attacks with short combinations or accurate long throws and kicks.")
      ],
      moments: [
        moment("2014 against Algeria", "Repeatedly raced outside his box to stop counterattacks during a tense World Cup knockout match."),
        moment("2013 treble", "Backstopped Bayern to the Bundesliga, German Cup, and Champions League."),
        moment("2020 Champions League final", "Made crucial saves against Paris Saint-Germain to complete another treble.")
      ],
      why: [
        "Neuer did not invent leaving the penalty area, but he made it central to elite goalkeeping. His range, one-on-one ability, and calm distribution changed the position without taking away the traditional parts of the job."
      ]
    },
    {
      slug: "baggio",
      rank: 30,
      name: "Roberto Baggio",
      fullName: "Roberto Baggio",
      country: "Italy",
      position: "Forward / Attacking Midfielder",
      image: "baggio.png",
      gallery: ["baggio2.png", "baggio3.png"],
      officialGoals: "318",
      born: "February 18, 1967",
      birthplace: "Caldogno, Italy",
      height: "1.74 m",
      foot: "Right",
      number: "10",
      era: "1982-2004",
      mainClubs: "Fiorentina, Juventus, AC Milan, Bologna, Inter, Brescia",
      knownFor: "Close control, free kicks, through balls, resilient creativity",
      summary: "Roberto Baggio played with grace and imagination through repeated injuries, becoming Italy's most beloved modern number 10.",
      definingTrait: "Finding elegance and control in the most crowded attacking spaces",
      sideCaption: "The Divine Ponytail carried Italy through the 1994 World Cup.",
      imagePosition: "center 16%",
      story: [
        "Baggio overcame a devastating knee injury before his top-level career had truly begun. At Fiorentina and Juventus, his dribbling, passing, free kicks, and finishing made him the central creative figure of Italian football.",
        "He carried Italy to the 1994 World Cup final with five knockout-stage goals. The missed penalty in the final became an unfairly dominant image, but his career was defined more truthfully by resilience, invention, and repeated returns from injury."
      ],
      clubs: [
        club("Vicenza", "1982-1985", "Began his senior career and suffered the first major knee injury."),
        club("Fiorentina", "1985-1990", "Became a star and formed a deep bond with the club's supporters."),
        club("Juventus", "1990-1995", "Won the Ballon d'Or, UEFA Cup, Serie A, and Coppa Italia."),
        club("Milan, Bologna, and Inter", "1995-2000", "Continued producing decisive seasons across major Italian clubs."),
        club("Brescia", "2000-2004", "Finished his career with freedom, creativity, and outstanding individual football.")
      ],
      stats: [
        stat("Italy goals", "27"),
        stat("World Cup goals", "9"),
        stat("Ballon d'Or awards", "1"),
        stat("Serie A goals", "205")
      ],
      honours: [
        honour("UEFA Cup", "1", { important: true }),
        honour("Serie A", "2"),
        honour("Coppa Italia", "1"),
        honour("1994 World Cup runner-up", "1", { international: true })
      ],
      skills: [
        skill("Close control", "Soft touches and rapid turns allowed him to create in tight central areas."),
        skill("Free kicks", "Baggio used clean technique and placement rather than pure power."),
        skill("Through passing", "He disguised final balls and released runners after drawing defenders toward him.")
      ],
      moments: [
        moment("1994 World Cup knockout rounds", "Scored five goals from the round of 16 through the semi-final to carry Italy to the final."),
        moment("The penalty in Pasadena", "After dragging Italy to the 1994 final, Baggio sent the last shootout kick over the bar. It is a cruel image, but it should not erase the five knockout-stage goals that got Italy there."),
        moment("The Brescia years", "Produced a late-career renaissance full of assists, goals, and technical freedom.")
      ],
      why: [
        "Baggio kept producing beautiful football after injuries that might have ended another career. His trophy list is shorter than most above him, but the 1994 World Cup run and the quality of his touch are hard to forget."
      ]
    },
    {
      slug: "gullit",
      rank: 31,
      name: "Ruud Gullit",
      fullName: "Ruud Dil Gullit",
      country: "Netherlands",
      position: "Midfielder / Forward",
      image: "gullit.png",
      gallery: ["gullit2.png", "gullit3.png"],
      officialGoals: "236",
      born: "September 1, 1962",
      birthplace: "Amsterdam, Netherlands",
      height: "1.91 m",
      foot: "Right",
      number: "10",
      era: "1979-1998",
      mainClubs: "Feyenoord, PSV, AC Milan, Sampdoria, Chelsea",
      knownFor: "Power, versatility, aerial ability, technique, leadership",
      summary: "Ruud Gullit combined the body of a dominant athlete with the technique and imagination of a number 10.",
      definingTrait: "Controlling matches from almost any outfield position",
      sideCaption: "Gullit could lead the midfield, break a defensive line, or finish the attack himself.",
      imagePosition: "center 18%",
      story: [
        "Gullit became a Dutch star at Feyenoord and PSV before joining AC Milan's historic Dutch-led side. His speed, strength, heading, dribbling, and passing allowed him to influence matches from midfield or attack.",
        "As Netherlands captain, he scored in the Euro 1988 final and lifted the country's first major international trophy. Later, his adaptability helped him succeed in Italy and England as the game changed around him."
      ],
      clubs: [
        club("Haarlem and Feyenoord", "1979-1985", "Developed from a teenage professional into one of the Netherlands' leading players."),
        club("PSV", "1985-1987", "Won consecutive league titles and the 1987 Dutch Footballer of the Year award."),
        club("AC Milan", "1987-1993, 1994", "Won two European Cups and formed a legendary Dutch core with Van Basten and Rijkaard."),
        club("Sampdoria and Chelsea", "1993-1998", "Added an Italian Cup and helped bring a new continental style to the Premier League.")
      ],
      stats: [
        stat("Ballon d'Or awards", "1"),
        stat("European Cups", "2"),
        stat("Netherlands caps", "66"),
        stat("League titles", "6")
      ],
      honours: [
        honour("UEFA European Championship", "1", { important: true, international: true }),
        honour("European Cup", "2", { important: true }),
        honour("Serie A", "3"),
        honour("Eredivisie", "3"),
        honour("KNVB Cup", "1"),
        honour("Coppa Italia", "1"),
        honour("Intercontinental Cup", "2")
      ],
      skills: [
        skill("Complete athleticism", "Power and stride length let him carry the ball through midfield and dominate aerial duels."),
        skill("Positional range", "He could play as a forward, attacking midfielder, central midfielder, sweeper, or defender."),
        skill("Technical control", "Soft first touches and imaginative passing made his physical advantages even harder to contain.")
      ],
      moments: [
        moment("Euro 1988 final", "Opened the scoring with a powerful header as the Netherlands defeated the Soviet Union."),
        moment("1989 European Cup final", "Scored twice as Milan beat Steaua Bucharest 4-0 in Barcelona."),
        moment("Chelsea's 1997 FA Cup", "Helped the club end a 26-year wait for a major trophy and begin a new era.")
      ],
      why: [
        "Gullit had the strength of a centre forward, the feet of a playmaker, and the engine to cover midfield. He could change positions without losing his influence, which made him the symbol of a great Milan side."
      ]
    },
    {
      slug: "kevin-de-bruyne",
      rank: 32,
      name: "Kevin De Bruyne",
      fullName: "Kevin De Bruyne",
      country: "Belgium",
      position: "Midfielder",
      image: "kevin.png",
      gallery: ["kevin2.png", "kevin3.png"],
      officialGoals: "196",
      born: "June 28, 1991",
      birthplace: "Drongen, Belgium",
      height: "1.81 m",
      foot: "Right",
      number: "17",
      era: "2008-present",
      mainClubs: "Genk, Wolfsburg, Manchester City, Napoli",
      knownFor: "Passing range, crossing, chance creation, shooting",
      summary: "Kevin De Bruyne became the creative engine of England's dominant modern team through passing that was both daring and precise.",
      definingTrait: "Delivering the final ball before a defense can reset",
      sideCaption: "De Bruyne attacks space with the accuracy of a passer and the urgency of a runner.",
      imagePosition: "center 15%",
      story: [
        "After early spells with Genk, Chelsea, and Werder Bremen, De Bruyne found his first great platform at Wolfsburg. Manchester City then built an era around his direct passing, powerful running, crossing, and long-range shooting.",
        "He helped City win six Premier League titles and complete the 2023 treble before joining Napoli in 2025. For Belgium, he was the primary creator of a generation that reached the 2018 World Cup semi-final."
      ],
      clubs: [
        club("Genk", "2008-2012", "Won the Belgian league and developed into a senior international."),
        club("Chelsea, Werder Bremen, Wolfsburg", "2012-2015", "Turned a difficult Chelsea spell into a Bundesliga Player of the Year season at Wolfsburg."),
        club("Manchester City", "2015-2025", "Recorded 170 assists in 422 appearances and became the creative center of a trophy-filled decade."),
        club("Napoli", "2025-present", "Began a new Serie A chapter after leaving Manchester City as a club legend.")
      ],
      stats: [
        stat("Manchester City assists", "170"),
        stat("Manchester City games", "422"),
        stat("Premier League titles", "6"),
        stat("Champions Leagues", "1")
      ],
      honours: [
        honour("UEFA Champions League", "1", { important: true }),
        honour("Premier League", "6"),
        honour("FA Cup", "2"),
        honour("English League Cup", "5"),
        honour("FIFA Club World Cup", "1"),
        honour("German Cup", "1"),
        honour("Belgian Pro League", "1")
      ],
      skills: [
        skill("Passing range", "He can split a back line from deep, clip crosses from wide, or slide passes through the half-space."),
        skill("Early crossing", "De Bruyne delivers before defenders and goalkeepers have settled into expected positions."),
        skill("Ball striking", "Power from either foot makes him dangerous from distance and on late runs into the box.")
      ],
      moments: [
        moment("2017-18 centurions", "Led the creative work as City became the first Premier League team to reach 100 points."),
        moment("2022-23 treble", "Produced decisive Champions League moments during City's first European title run."),
        moment("Four goals at Wolves", "Scored a remarkable left-footed hat trick inside 24 minutes and added a fourth in 2022.")
      ],
      why: [
        "De Bruyne used possession to hurt teams, not just to keep the ball. His early crosses, through balls, and shooting gave Manchester City's control a direct edge that opponents struggled to contain."
      ]
    },
    {
      slug: "zico",
      rank: 33,
      name: "Zico",
      fullName: "Arthur Antunes Coimbra",
      country: "Brazil",
      position: "Attacking Midfielder",
      image: "zico.png",
      gallery: ["zico2.png", "zico3.png"],
      officialGoals: "517",
      born: "March 3, 1953",
      birthplace: "Rio de Janeiro, Brazil",
      height: "1.72 m",
      foot: "Right",
      number: "10",
      era: "1971-1994",
      mainClubs: "Flamengo, Udinese, Kashima Antlers",
      knownFor: "Free kicks, finishing, creativity, late runs",
      summary: "Zico was a number 10 with a striker's scoring record, combining Brazilian imagination with relentless end product.",
      definingTrait: "Creating and finishing attacks at the same elite level",
      sideCaption: "At Flamengo, Zico became the creative and emotional center of a world champion club.",
      imagePosition: "center 16%",
      story: [
        "Zico rose through Flamengo and became the greatest player in the club's history. He orchestrated attacks, scored from midfield, mastered free kicks, and led the team to the Copa Libertadores and Intercontinental Cup in 1981.",
        "Brazil's 1982 side did not win the World Cup, but its fluid attacking football remains iconic, with Zico as the central conductor. His later move to Japan also helped give the emerging professional game credibility."
      ],
      clubs: [
        club("Flamengo", "1971-1983, 1985-1989", "Scored more than 500 goals and led the club to domestic, continental, and world titles."),
        club("Udinese", "1983-1985", "Brought elite creativity and goals to Serie A."),
        club("Kashima Antlers", "1991-1994", "Helped establish the standards and visibility of Japan's new professional league.")
      ],
      stats: [
        stat("Brazil goals", "48"),
        stat("Brazil appearances", "71"),
        stat("Flamengo goals", "500+"),
        stat("Copa Libertadores", "1")
      ],
      honours: [
        honour("Copa Libertadores", "1", { important: true }),
        honour("Intercontinental Cup", "1", { important: true }),
        honour("Brazilian Championship", "4"),
        honour("Campeonato Carioca", "7"),
        honour("J.League stage title", "1")
      ],
      skills: [
        skill("Free kicks", "Zico used quick technique, whip, and placement to score from a wide range of angles."),
        skill("Penalty-area timing", "He arrived beyond forwards and finished chances with unusual calm for a midfielder."),
        skill("Combination play", "Fast wall passes and disguised touches kept Brazil and Flamengo moving through crowded areas.")
      ],
      moments: [
        moment("1981 Intercontinental Cup", "Led Flamengo's brilliant 3-0 victory over European champions Liverpool."),
        moment("1982 World Cup", "Directed one of the most admired attacking teams in international history."),
        moment("Return from injury", "Came back from a severe knee injury to continue scoring and win more titles with Flamengo.")
      ],
      why: [
        "Zico never won the World Cup, but his game had almost everything expected of a great number 10. He created, scored in volume, took brilliant free kicks, and led Flamengo through its greatest era."
      ]
    },
    {
      slug: "bobby-charlton",
      rank: 34,
      name: "Bobby Charlton",
      fullName: "Sir Robert Charlton",
      country: "England",
      position: "Midfielder / Forward",
      image: "bobby.png",
      gallery: ["Bobby2.png", "Bobby3.png"],
      officialGoals: "312",
      born: "October 11, 1937",
      birthplace: "Ashington, England",
      height: "1.73 m",
      foot: "Right",
      number: "9 / 10",
      era: "1956-1980",
      mainClubs: "Manchester United, Preston North End",
      knownFor: "Long-range shooting, stamina, forward runs, dignity",
      summary: "Bobby Charlton survived tragedy, led Manchester United back to Europe, and became the attacking symbol of England's greatest football year.",
      definingTrait: "Driving from midfield and striking cleanly from distance",
      sideCaption: "Charlton carried both power and grace through the defining matches of his era.",
      imagePosition: "center 18%",
      story: [
        "Charlton was a Busby Babe and survived the 1958 Munich air disaster before helping rebuild Manchester United. His stamina, powerful shooting, and surging midfield runs made him a scorer and creator in equal measure.",
        "In 1966, he won the World Cup and Ballon d'Or. Two years later, he scored twice in the European Cup final as United became the first English club to win the competition."
      ],
      clubs: [
        club("Manchester United", "1956-1973", "Scored 249 goals in 758 matches and became the enduring face of the rebuilt Busby side."),
        club("Preston and later clubs", "1973-1980", "Continued as a player-manager and finished his career after brief later appearances.")
      ],
      stats: [
        stat("Manchester United goals", "249"),
        stat("Manchester United games", "758"),
        stat("England goals", "49"),
        stat("England caps", "106")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("European Cup", "1", { important: true }),
        honour("English First Division", "3"),
        honour("FA Cup", "1"),
        honour("Charity Shield", "4")
      ],
      skills: [
        skill("Long-range shooting", "A short backlift and clean contact produced powerful strikes while running at speed."),
        skill("Endurance", "Charlton covered huge distances and remained a threat late in matches."),
        skill("Forward movement", "He broke from midfield into scoring positions before defenders could hand him over.")
      ],
      moments: [
        moment("1966 World Cup semi-final", "Scored twice against Portugal to send England into the final."),
        moment("1968 European Cup final", "Scored two goals against Benfica as United completed its return to the top of Europe."),
        moment("Munich and the rebuild", "Returned from the disaster to become the central player in a new championship team.")
      ],
      why: [
        "Charlton was central to England's only World Cup win and Manchester United's first European Cup. He carried the ball with power, struck it cleanly from distance, and gave both teams their attacking direction."
      ]
    },
    {
      slug: "zlatan",
      rank: 35,
      name: "Zlatan Ibrahimović",
      fullName: "Zlatan Ibrahimović",
      country: "Sweden",
      position: "Forward",
      image: "zlatan.png",
      gallery: ["zlatan2.png", "zlatan3.png"],
      officialGoals: "573",
      born: "October 3, 1981",
      birthplace: "Malmö, Sweden",
      height: "1.95 m",
      foot: "Right",
      number: "11",
      era: "1999-2023",
      mainClubs: "Ajax, Inter, Barcelona, AC Milan, Paris Saint-Germain",
      knownFor: "Acrobatic finishing, strength, technique, confidence",
      summary: "Zlatan Ibrahimović paired a giant frame with the imagination of a street footballer across more than two decades.",
      definingTrait: "Attempting finishes that other strikers would not imagine",
      sideCaption: "Zlatan made strength, technique, and theatrical confidence part of the same performance.",
      imagePosition: "center 14%",
      story: [
        "Ibrahimović left Malmö for Ajax and then became a serial league winner across the Netherlands, Italy, Spain, and France. His control, passing, and acrobatic finishing made him far more than a traditional target forward.",
        "He remained productive into his late thirties, helping AC Milan return to the Champions League and win Serie A. For Sweden, he became the national team's record scorer and its most recognizable football figure."
      ],
      clubs: [
        club("Malmö and Ajax", "1999-2004", "Developed his fearless style and won his first league titles."),
        club("Juventus, Inter, Barcelona, Milan", "2004-2012", "Won across Europe's strongest leagues while adapting to very different teams."),
        club("Paris Saint-Germain", "2012-2016", "Scored 156 goals and helped establish PSG as France's dominant club."),
        club("Manchester United and LA Galaxy", "2016-2019", "Won the Europa League, then became a major MLS attraction."),
        club("AC Milan", "2020-2023", "Returned at 38 and helped guide Milan back to the Serie A title.")
      ],
      stats: [
        stat("Sweden goals", "62"),
        stat("Sweden appearances", "122"),
        stat("Senior goals", "570+"),
        stat("League titles", "12")
      ],
      honours: [
        honour("UEFA Europa League", "1", { important: true }),
        honour("Serie A", "5"),
        honour("Ligue 1", "4"),
        honour("La Liga", "1"),
        honour("Eredivisie", "2"),
        honour("FIFA Club World Cup", "1"),
        honour("Domestic cups", "10")
      ],
      skills: [
        skill("Acrobatic finishing", "Martial-arts flexibility produced volleys, overhead kicks, and back-heel goals from unlikely positions."),
        skill("Hold-up play", "He protected the ball against defenders and used delicate touches to bring teammates into attacks."),
        skill("Technical range", "Zlatan could dribble, create, take free kicks, and score from distance despite his size.")
      ],
      moments: [
        moment("Overhead kick against England", "Scored from roughly 30 meters with one of international football's great improvised finishes."),
        moment("Four goals against Anderlecht", "Completed a Champions League masterclass that included a thunderous long-range strike."),
        moment("2022 Serie A title", "Helped a young Milan side end an 11-year league-title wait at age 40.")
      ],
      why: [
        "Zlatan combined a target forward's size with the technique of a much smaller player. The Champions League is missing, but the goals, league titles, longevity, and sheer variety of finishes make the career impossible to dismiss."
      ]
    },
    {
      slug: "modric",
      rank: 36,
      name: "Luka Modrić",
      fullName: "Luka Modrić",
      country: "Croatia",
      position: "Midfielder",
      image: "modric.png",
      gallery: ["modric2.png", "modric3.png"],
      officialGoals: "134",
      born: "September 9, 1985",
      birthplace: "Zadar, Croatia",
      height: "1.72 m",
      foot: "Right",
      number: "10",
      era: "2003-present",
      mainClubs: "Dinamo Zagreb, Tottenham Hotspur, Real Madrid, AC Milan",
      knownFor: "Press resistance, outside-foot passing, rhythm, endurance",
      summary: "Luka Modrić controlled the center of football's biggest matches with balance, resilience, and extraordinary awareness.",
      definingTrait: "Escaping pressure while moving the entire match forward",
      sideCaption: "Modrić made difficult midfield spaces feel calm and playable.",
      imagePosition: "center 16%",
      story: [
        "Modrić developed through loans and titles with Dinamo Zagreb before proving himself at Tottenham. At Real Madrid, he became part of a midfield that won six Champions Leagues and sustained success across multiple generations.",
        "His 2018 World Cup run carried Croatia to its first final and earned him the Ballon d'Or. After leaving Madrid in 2025, he extended his career with AC Milan and remained at the elite level."
      ],
      clubs: [
        club("Dinamo Zagreb and loans", "2003-2008", "Built resilience, won three Croatian league titles, and became the country's leading young midfielder."),
        club("Tottenham Hotspur", "2008-2012", "Established himself in the Premier League and helped Spurs return to the Champions League."),
        club("Real Madrid", "2012-2025", "Won 28 trophies, including six Champions Leagues, during a historic midfield era."),
        club("AC Milan", "2025-present", "Continued in Serie A and extended his Milan contract through 2027.")
      ],
      stats: [
        stat("Champions Leagues", "6"),
        stat("Ballon d'Or awards", "1"),
        stat("Croatia caps", "190+"),
        stat("Real Madrid games", "590+")
      ],
      honours: [
        honour("UEFA Champions League", "6", { important: true }),
        honour("La Liga", "4"),
        honour("FIFA Club World Cup", "5"),
        honour("European Super Cup", "5"),
        honour("Copa del Rey", "2"),
        honour("Croatian First League", "3"),
        honour("2018 World Cup runner-up", "1", { international: true })
      ],
      skills: [
        skill("Press resistance", "A low center of gravity, scanning, and turns let him receive safely under intense pressure."),
        skill("Outside-foot passing", "His trademark technique bends the ball around defensive lines without slowing the attack."),
        skill("Match rhythm", "Modrić can accelerate through a carry or pause possession until the right lane appears.")
      ],
      moments: [
        moment("Carrying Croatia in 2018", "Captained Croatia through three extra-time knockout ties to its first World Cup final, then left Russia with the Golden Ball."),
        moment("Assist at Stamford Bridge", "An outside-foot pass to Rodrygo helped rescue Real Madrid's 2022 Champions League run."),
        moment("Six European titles", "Remained central across a record-setting era of Madrid success.")
      ],
      why: [
        "Modrić seemed to get calmer as the matches became more important. He ran Real Madrid's midfield through repeated Champions League wins and then carried Croatia to a World Cup final and won the Ballon d'Or."
      ]
    },
    {
      slug: "toni-kroos",
      rank: 37,
      name: "Toni Kroos",
      fullName: "Toni Kroos",
      country: "Germany",
      position: "Midfielder",
      image: "Toni.png",
      gallery: ["kroos2.png", "kroos3.png"],
      officialGoals: "80",
      born: "January 4, 1990",
      birthplace: "Greifswald, Germany",
      height: "1.83 m",
      foot: "Right",
      number: "8",
      era: "2007-2024",
      mainClubs: "Bayern Munich, Bayer Leverkusen, Real Madrid",
      knownFor: "Passing precision, tempo, switches of play, composure",
      summary: "Toni Kroos made control look simple, using immaculate passing to organize championship teams for club and country.",
      definingTrait: "Choosing and executing the correct pass with almost no error",
      sideCaption: "Kroos controlled space through the speed, angle, and weight of his passing.",
      imagePosition: "center 16%",
      story: [
        "Kroos emerged at Bayern Munich, developed during a loan at Bayer Leverkusen, and returned to win the treble. In 2014, he starred in Germany's World Cup victory and then moved to Real Madrid.",
        "For a decade in Spain, he formed one of football's great midfields and won five more Champions Leagues. He retired in 2024 while still at the top, after another European title."
      ],
      clubs: [
        club("Bayern Munich and Leverkusen loan", "2007-2014", "Developed into a complete midfielder and won the 2013 European treble."),
        club("Real Madrid", "2014-2024", "Controlled the left side of midfield through a decade and won 23 major trophies.")
      ],
      stats: [
        stat("Champions Leagues", "6"),
        stat("World Cups", "1"),
        stat("Germany appearances", "114"),
        stat("Real Madrid games", "465")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA Champions League", "6", { important: true }),
        honour("La Liga", "4"),
        honour("Bundesliga", "3"),
        honour("FIFA Club World Cup", "6"),
        honour("German Cup", "3"),
        honour("Copa del Rey", "1")
      ],
      skills: [
        skill("Passing precision", "Kroos sustained remarkable accuracy while still attempting line-breaking and long-range passes."),
        skill("Switches of play", "He moved defenses across the pitch with driven diagonals that arrived at the receiver's preferred foot."),
        skill("Tempo control", "Few midfielders were better at recognizing when a match needed patience or immediate acceleration.")
      ],
      moments: [
        moment("2014 World Cup semi-final", "Scored twice in 69 seconds during Germany's historic 7-1 win over Brazil."),
        moment("Corner against Sweden", "Curled a stoppage-time free kick into the far corner to keep Germany alive at the 2018 World Cup."),
        moment("2024 Champions League", "Retired from club football after creating the final's opening goal and winning a sixth European Cup.")
      ],
      why: [
        "Kroos made difficult passes look routine and gave great teams their structure. A World Cup and six Champions Leagues show how reliably that control held up under pressure."
      ]
    },
    {
      slug: "puyol",
      rank: 38,
      name: "Carles Puyol",
      fullName: "Carles Puyol Saforcada",
      country: "Spain",
      position: "Defender",
      image: "puyol.png",
      gallery: ["puyol2.png", "puyol3.png"],
      officialGoals: "34",
      born: "April 13, 1978",
      birthplace: "La Pobla de Segur, Spain",
      height: "1.78 m",
      foot: "Right",
      number: "5",
      era: "1999-2014",
      mainClubs: "Barcelona",
      knownFor: "Leadership, anticipation, recovery defending, courage",
      summary: "Carles Puyol supplied the intensity, sacrifice, and leadership behind Barcelona and Spain's most successful era.",
      definingTrait: "Defending every loose ball as if the match depended on it",
      sideCaption: "Puyol's leadership balanced the artistry around him with uncompromising defensive work.",
      imagePosition: "center 14%",
      story: [
        "Puyol reached Barcelona's first team as a right back and developed into an elite center back and captain. His speed, concentration, and willingness to cover teammates made him essential to an attacking system.",
        "He captained Barcelona to its first Champions League title in 14 years and remained a leader through the Guardiola era. With Spain, he won Euro 2008 and scored the semi-final winner on the way to the 2010 World Cup."
      ],
      clubs: [
        club("Barcelona", "1999-2014", "Spent his entire senior career at the club, making 593 appearances and serving as captain.")
      ],
      stats: [
        stat("Barcelona games", "593"),
        stat("Spain appearances", "100"),
        stat("Champions Leagues", "3"),
        stat("La Liga titles", "6")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA European Championship", "1", { international: true }),
        honour("UEFA Champions League", "3", { important: true }),
        honour("La Liga", "6"),
        honour("Copa del Rey", "2"),
        honour("FIFA Club World Cup", "2"),
        honour("Spanish Super Cup", "6")
      ],
      skills: [
        skill("Recovery defending", "Acceleration and determination allowed him to repair space behind an aggressive team."),
        skill("Aerial courage", "Puyol attacked headers decisively despite often facing taller forwards."),
        skill("Leadership", "His standards were physical and visible, pulling teammates into the intensity of the match.")
      ],
      moments: [
        moment("2010 World Cup semi-final", "Powered a header past Germany to send Spain into its first World Cup final."),
        moment("2006 Champions League", "Lifted Barcelona's first European Cup since 1992 as captain."),
        moment("Captain's gesture", "Handed the armband to Eric Abidal so his teammate could lift the 2011 Champions League trophy.")
      ],
      why: [
        "Puyol gave Barcelona and Spain the defensive personality behind all that possession. He covered space, attacked every duel, organized the line, and set a standard his teammates trusted."
      ]
    },
    {
      slug: "figo",
      rank: 39,
      name: "Luís Figo",
      fullName: "Luís Filipe Madeira Caeiro Figo",
      country: "Portugal",
      position: "Winger / Attacking Midfielder",
      image: "figo.png",
      gallery: ["figo2.png", "figo3.png"],
      officialGoals: "165",
      born: "November 4, 1972",
      birthplace: "Almada, Portugal",
      height: "1.80 m",
      foot: "Right",
      number: "7",
      era: "1989-2009",
      mainClubs: "Sporting CP, Barcelona, Real Madrid, Inter Milan",
      knownFor: "Close control, crossing, changes of pace, chance creation",
      summary: "Luís Figo was the elite wide creator of his generation, beating defenders without wasting movement.",
      definingTrait: "Controlling the defender's balance before choosing the final action",
      sideCaption: "Figo created from the wing with patience, precision, and relentless consistency.",
      imagePosition: "center 16%",
      story: [
        "Figo developed at Sporting CP before becoming Barcelona's captain and attacking leader. His move to Real Madrid became one of football's most controversial transfers, but he remained a world-class creator and won the Champions League.",
        "He later added four Serie A titles with Inter. For Portugal, he led the Golden Generation to the Euro 2000 semi-final and the 2006 World Cup semi-final."
      ],
      clubs: [
        club("Sporting CP", "1989-1995", "Won the Portuguese Cup and became the leader of a celebrated young generation."),
        club("Barcelona", "1995-2000", "Won two league titles and became one of world football's best wide playmakers."),
        club("Real Madrid", "2000-2005", "Won the Ballon d'Or, the Champions League, and two La Liga titles."),
        club("Inter Milan", "2005-2009", "Finished with four consecutive Serie A titles.")
      ],
      stats: [
        stat("Portugal appearances", "127"),
        stat("Ballon d'Or awards", "1"),
        stat("Champions Leagues", "1"),
        stat("League titles", "8")
      ],
      honours: [
        honour("UEFA Champions League", "1", { important: true }),
        honour("La Liga", "4"),
        honour("Serie A", "4"),
        honour("European Cup Winners' Cup", "1"),
        honour("Copa del Rey", "2"),
        honour("Portuguese Cup", "1"),
        honour("Intercontinental Cup", "1")
      ],
      skills: [
        skill("One-on-one control", "Small touches and body feints invited defenders to commit before he changed direction."),
        skill("Crossing", "Figo delivered accurately from different heights, speeds, and positions."),
        skill("Creative consistency", "He produced chances every week without relying only on explosive pace.")
      ],
      moments: [
        moment("Euro 2000 against England", "Started Portugal's comeback with a powerful long-range goal in a classic 3-2 win."),
        moment("2002 Champions League", "Helped Real Madrid win its ninth European Cup during the Galáctico era."),
        moment("2006 World Cup", "Captained Portugal to its first World Cup semi-final since 1966.")
      ],
      why: [
        "Figo was a complete winger before the role became mostly about goals. He could beat a defender, pause the game, cross from either side, and create chances year after year."
      ]
    },
    {
      slug: "garrincha",
      rank: 40,
      name: "Garrincha",
      fullName: "Manuel Francisco dos Santos",
      country: "Brazil",
      position: "Winger",
      image: "garrincha.png",
      gallery: ["garrincha2.png", "Garrincha3.png"],
      officialGoals: "114",
      born: "October 28, 1933",
      birthplace: "Pau Grande, Brazil",
      height: "1.69 m",
      foot: "Right",
      number: "7",
      era: "1953-1972",
      mainClubs: "Botafogo, Corinthians, Flamengo",
      knownFor: "Dribbling, acceleration, repetition, joyful unpredictability",
      summary: "Garrincha was football's great natural dribbler, repeatedly beating defenders who knew exactly what he wanted to do.",
      definingTrait: "Making the same defender lose the same duel again and again",
      sideCaption: "The Joy of the People turned the right wing into his own stage.",
      imagePosition: "center 20%",
      story: [
        "Garrincha overcame unusual leg alignment and an unconventional path into professional football to become Botafogo's irresistible right winger. He used sudden acceleration, pauses, and changes of direction to unbalance defenders repeatedly.",
        "When Pelé was injured at the 1962 World Cup, Garrincha became Brazil's decisive star. He scored, created, and entertained on the way to a second straight world title."
      ],
      clubs: [
        club("Botafogo", "1953-1965", "Produced his defining football and won major state and interstate titles."),
        club("Corinthians, Flamengo, and later clubs", "1966-1972", "Continued a difficult later career after injuries reduced his explosiveness.")
      ],
      stats: [
        stat("World Cups", "2"),
        stat("Brazil appearances", "50"),
        stat("1962 World Cup goals", "4"),
        stat("Carioca titles", "3")
      ],
      honours: [
        honour("FIFA World Cup", "2", { important: true, international: true }),
        honour("Campeonato Carioca", "3"),
        honour("Rio-São Paulo Tournament", "3"),
        honour("Interstate club tournaments", "3")
      ],
      skills: [
        skill("Pure dribbling", "Garrincha shifted pace and direction while keeping the ball close enough to invite another challenge."),
        skill("Acceleration", "A sudden first step turned apparently harmless wide positions into immediate danger."),
        skill("Crossing after contact", "He stayed balanced through challenges and still delivered accurately into the box.")
      ],
      moments: [
        moment("1962 World Cup quarter-final", "Scored twice and created another goal against England."),
        moment("1962 World Cup semi-final", "Added two more goals against hosts Chile to send Brazil into the final."),
        moment("1958 World Cup final", "Created two first-half goals as Brazil won its first world championship.")
      ],
      why: [
        "Garrincha may be the greatest one-on-one dribbler Brazil has produced. His career was uneven, but in 1962 he took over the World Cup after Pelé was injured and became the tournament's defining player."
      ]
    },
    {
      slug: "van-basten",
      rank: 41,
      name: "Marco van Basten",
      fullName: "Marcel van Basten",
      country: "Netherlands",
      position: "Forward",
      image: "Van.png",
      gallery: ["vanbasten2.png", "Vanbasten3.png"],
      officialGoals: "306",
      born: "October 31, 1964",
      birthplace: "Utrecht, Netherlands",
      height: "1.88 m",
      foot: "Right",
      number: "9",
      era: "1981-1995",
      mainClubs: "Ajax, AC Milan",
      knownFor: "Complete finishing, movement, volleys, technical elegance",
      summary: "Marco van Basten compressed an all-time striker career into a short window before injury took away his prime.",
      definingTrait: "Finishing difficult chances with perfect body control",
      sideCaption: "Van Basten could score with power or delicacy from almost any angle.",
      imagePosition: "center 15%",
      story: [
        "Van Basten became a prolific champion at Ajax before joining AC Milan. In Italy, his movement, first touch, heading, and complete finishing led one of football's greatest club teams.",
        "He won three Ballon d'Or awards and produced the defining goal of Euro 1988, but recurring ankle injuries forced him to stop playing at 28 and retire at 30."
      ],
      clubs: [
        club("Ajax", "1981-1987", "Scored 152 goals, won three league titles, and lifted the Cup Winners' Cup."),
        club("AC Milan", "1987-1995", "Won two European Cups and four Serie A titles despite repeated injury absences.")
      ],
      stats: [
        stat("Ballon d'Or awards", "3"),
        stat("Netherlands goals", "24"),
        stat("European Cups", "2"),
        stat("Ajax goals", "152")
      ],
      honours: [
        honour("UEFA European Championship", "1", { important: true, international: true }),
        honour("European Cup", "2", { important: true }),
        honour("Serie A", "4"),
        honour("Eredivisie", "3"),
        honour("European Cup Winners' Cup", "1"),
        honour("KNVB Cup", "3"),
        honour("Intercontinental Cup", "2")
      ],
      skills: [
        skill("Complete finishing", "He scored with either foot, his head, volleys, chips, and first-time touches."),
        skill("Body control", "Van Basten adjusted in the air or while turning to meet difficult passes cleanly."),
        skill("Forward movement", "Intelligent curves and sudden changes of pace separated him from center backs.")
      ],
      moments: [
        moment("Euro 1988 final volley", "Scored from an almost impossible angle against the Soviet Union."),
        moment("Four goals against Gothenburg", "Produced a Champions League display that included a famous overhead kick."),
        moment("1989 European Cup final", "Scored twice as Milan completed one of the competition's most dominant campaigns.")
      ],
      why: [
        "A healthy Van Basten could finish in every way, link play, and decide major finals. Three Ballon d'Or awards show the level he reached; injuries are the only reason the résumé stops so early."
      ]
    },
    {
      slug: "pirlo",
      rank: 42,
      name: "Andrea Pirlo",
      fullName: "Andrea Pirlo",
      country: "Italy",
      position: "Midfielder",
      image: "pirlo.png",
      gallery: ["pirlo2.png", "pirlo3.png"],
      officialGoals: "86",
      born: "May 19, 1979",
      birthplace: "Flero, Italy",
      height: "1.77 m",
      foot: "Right",
      number: "21",
      era: "1995-2017",
      mainClubs: "AC Milan, Juventus, New York City FC",
      knownFor: "Deep playmaking, long passing, free kicks, composure",
      summary: "Andrea Pirlo controlled attacks from deep with vision and technique that made time appear to slow around him.",
      definingTrait: "Finding an attacking pass from the base of midfield",
      sideCaption: "Pirlo played in deep areas but thought like a number 10.",
      imagePosition: "center 15%",
      story: [
        "Pirlo began as an attacking midfielder before AC Milan moved him deeper. From there, he could face the entire pitch and use long passes, disguised balls, and set pieces to organize a championship side.",
        "After a decade in Milan, he joined Juventus and helped launch another dominant era. His 2006 World Cup displayed the full range of his calm, creative influence."
      ],
      clubs: [
        club("Brescia and Inter", "1995-2001", "Developed his technique before a positional change unlocked his best role."),
        club("AC Milan", "2001-2011", "Won two Champions Leagues and became the model for the modern deep playmaker."),
        club("Juventus", "2011-2015", "Helped the club win four consecutive Serie A titles."),
        club("New York City FC", "2015-2017", "Finished his career in Major League Soccer.")
      ],
      stats: [
        stat("Italy appearances", "116"),
        stat("Champions Leagues", "2"),
        stat("Serie A titles", "6"),
        stat("World Cups", "1")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA Champions League", "2", { important: true }),
        honour("Serie A", "6"),
        honour("Coppa Italia", "2"),
        honour("FIFA Club World Cup", "1"),
        honour("European Super Cup", "2")
      ],
      skills: [
        skill("Long passing", "Pirlo dropped the ball behind defenses with precise height and weight."),
        skill("Free kicks", "He used curl, dip, and knuckleball movement from central shooting positions."),
        skill("Composure", "Pressure rarely rushed his touch or changed his preferred passing decision.")
      ],
      moments: [
        moment("2006 World Cup final", "Created Italy's opening goal and scored the first penalty in the shootout."),
        moment("2012 against England", "Controlled the Euro quarter-final and converted a fearless Panenka penalty."),
        moment("2007 Champions League", "Directed Milan's midfield as the club returned to the European summit.")
      ],
      why: [
        "Pirlo controlled matches without appearing to hurry. From deep midfield he moved opponents, found runners, and gave Italy, Milan, and Juventus the rhythm they wanted."
      ]
    },
    {
      slug: "beckham",
      rank: 43,
      name: "David Beckham",
      fullName: "David Robert Joseph Beckham",
      country: "England",
      position: "Midfielder",
      image: "beckham.png",
      gallery: ["beckham2.png", "beckham3.png"],
      officialGoals: "146",
      born: "May 2, 1975",
      birthplace: "London, England",
      height: "1.83 m",
      foot: "Right",
      number: "7",
      era: "1992-2013",
      mainClubs: "Manchester United, Real Madrid, LA Galaxy, Paris Saint-Germain",
      knownFor: "Crossing, free kicks, long passing, work rate",
      summary: "David Beckham paired global fame with a highly disciplined, technically precise midfield game.",
      definingTrait: "Bending the ball into dangerous space from distance",
      sideCaption: "Beckham's delivery could decide a match before a defender reached him.",
      imagePosition: "center 18%",
      story: [
        "Beckham graduated with Manchester United's Class of '92 and became the right-sided creator of a team that won six league titles and the 1999 treble. His crossing and set pieces were backed by exceptional stamina and tactical discipline.",
        "He won La Liga with Real Madrid, two MLS Cups with LA Galaxy, and a French title with Paris Saint-Germain, becoming a champion in four countries."
      ],
      clubs: [
        club("Manchester United", "1992-2003", "Won six Premier League titles and delivered a central role in the 1999 treble."),
        club("Real Madrid", "2003-2007", "Ended his Spanish chapter with a dramatic La Liga title."),
        club("LA Galaxy and Milan loans", "2007-2012", "Raised MLS visibility and kept competing at the European level."),
        club("Paris Saint-Germain", "2013", "Won Ligue 1 during the final months of his career.")
      ],
      stats: [
        stat("England appearances", "115"),
        stat("Premier League titles", "6"),
        stat("Champions Leagues", "1"),
        stat("League titles", "10")
      ],
      honours: [
        honour("UEFA Champions League", "1", { important: true }),
        honour("Premier League", "6"),
        honour("FA Cup", "2"),
        honour("La Liga", "1"),
        honour("MLS Cup", "2"),
        honour("Ligue 1", "1"),
        honour("Intercontinental Cup", "1")
      ],
      skills: [
        skill("Crossing", "His whip and accuracy turned early deliveries into high-quality chances."),
        skill("Free kicks", "Beckham repeatedly cleared walls and found corners with a distinctive striking action."),
        skill("Work rate", "He covered the entire right side and gave attacking teams defensive balance.")
      ],
      moments: [
        moment("Halfway-line goal", "Scored against Wimbledon in 1996 with one of the Premier League's defining goals."),
        moment("1999 Champions League final", "Delivered both late corners as United completed its treble."),
        moment("Free kick against Greece", "Sent England to the 2002 World Cup with a stoppage-time equalizer at Old Trafford.")
      ],
      why: [
        "The celebrity sometimes hid how good Beckham actually was. His crossing and set pieces were elite, but so were the work rate, long passing, and willingness to fit into winning teams in several countries."
      ]
    },
    {
      slug: "george-best",
      rank: 44,
      name: "George Best",
      fullName: "George Best",
      country: "Northern Ireland",
      position: "Winger / Forward",
      image: "best.png",
      gallery: ["best2.png", "best3.png"],
      officialGoals: "260",
      born: "May 22, 1946",
      birthplace: "Belfast, Northern Ireland",
      height: "1.75 m",
      foot: "Right",
      number: "7",
      era: "1963-1984",
      mainClubs: "Manchester United",
      knownFor: "Dribbling, balance, two-footed finishing, charisma",
      summary: "George Best was the dazzling individualist of 1960s football, combining fearless dribbling with elite scoring.",
      definingTrait: "Gliding past contact without losing the ball or his balance",
      sideCaption: "Best turned crowded penalty areas into spaces for improvisation.",
      imagePosition: "center 16%",
      story: [
        "Best arrived from Belfast as a slim teenager and quickly became Manchester United's most exciting attacker. He could beat players inside or outside, finish with either foot, and survive the physical defending of his era.",
        "In 1968, he won the European Cup and Ballon d'Or at only 22. His peak ended too early, but the freedom and skill of that period remain central to football history."
      ],
      clubs: [
        club("Manchester United", "1963-1974", "Scored 179 goals, won two league titles, and became a European champion."),
        club("Later clubs", "1974-1984", "Played across Britain, Ireland, the United States, and elsewhere after leaving United.")
      ],
      stats: [
        stat("Manchester United goals", "179"),
        stat("Manchester United games", "470"),
        stat("Northern Ireland caps", "37"),
        stat("Ballon d'Or awards", "1")
      ],
      honours: [
        honour("European Cup", "1", { important: true }),
        honour("English First Division", "2"),
        honour("Charity Shield", "2")
      ],
      skills: [
        skill("Dribbling balance", "Best changed direction through tackles and remained upright on poor pitches."),
        skill("Two-footed finishing", "He could place or drive shots with either foot after carrying at speed."),
        skill("Improvisation", "His decisions were difficult to predict because he could create from almost any angle.")
      ],
      moments: [
        moment("1968 European Cup final", "Scored in extra time as United became England's first European champion."),
        moment("Six goals at Northampton", "Produced a famous one-man scoring exhibition in the 1970 FA Cup."),
        moment("El Beatle in Lisbon", "A brilliant European display against Benfica in 1966 announced him as a global star.")
      ],
      why: [
        "Best's prime was short, but it had everything: balance, pace, dribbling, goals, and nerve in major European matches. The career faded early; the peak still belongs here."
      ]
    },
    {
      slug: "buffon",
      rank: 45,
      name: "Gianluigi Buffon",
      fullName: "Gianluigi Buffon",
      country: "Italy",
      position: "Goalkeeper",
      image: "buffon.png",
      gallery: ["buffon2.png", "buffon3.png"],
      officialGoals: "0",
      born: "January 28, 1978",
      birthplace: "Carrara, Italy",
      height: "1.92 m",
      foot: "Right",
      number: "1",
      era: "1995-2023",
      mainClubs: "Parma, Juventus, Paris Saint-Germain",
      knownFor: "Positioning, reactions, leadership, longevity",
      summary: "Gianluigi Buffon set the standard for complete goalkeeping across nearly three decades.",
      definingTrait: "Making difficult saves look routine through perfect positioning",
      sideCaption: "Buffon's authority and consistency lasted from teenage debut to age 45.",
      imagePosition: "center 14%",
      story: [
        "Buffon made his Parma debut at 17 and soon became the world's most expensive goalkeeper. His reactions, handling, positioning, and command helped Parma win the UEFA Cup before a record-breaking move to Juventus.",
        "He was central to Italy's 2006 World Cup triumph and remained elite through multiple Juventus eras. His longevity never depended on one style of goalkeeping."
      ],
      clubs: [
        club("Parma", "1995-2001, 2021-2023", "Began and ended his career at the club, winning the UEFA Cup in his first spell."),
        club("Juventus", "2001-2018, 2019-2021", "Became captain and won ten recognized Serie A titles."),
        club("Paris Saint-Germain", "2018-2019", "Added a Ligue 1 title during a season in France.")
      ],
      stats: [
        stat("Italy appearances", "176"),
        stat("Serie A games", "657"),
        stat("Serie A titles", "10"),
        stat("World Cups", "1")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA Cup", "1", { important: true }),
        honour("Serie A", "10"),
        honour("Coppa Italia", "6"),
        honour("Ligue 1", "1"),
        honour("Italian Super Cup", "7")
      ],
      skills: [
        skill("Positioning", "Buffon read the shot early and reduced the target before needing a spectacular movement."),
        skill("Reflexes", "Explosive reactions remained a strength even as his game became more economical."),
        skill("Leadership", "He organized defenders constantly and gave high-pressure teams emotional stability.")
      ],
      moments: [
        moment("2006 World Cup", "Allowed only two goals in seven matches and made a crucial extra-time save in the final."),
        moment("Save against Zidane", "Tipped a powerful header over the bar in the 2006 World Cup final."),
        moment("Return to Serie B", "Stayed with Juventus after relegation and helped the club immediately return.")
      ],
      why: [
        "Buffon stayed among the world's best goalkeepers across several generations of teammates and strikers. He had the reactions for close shots, the positioning for everything else, and almost no weak season."
      ]
    },
    {
      slug: "bobby-moore",
      rank: 46,
      name: "Bobby Moore",
      fullName: "Robert Frederick Chelsea Moore",
      country: "England",
      position: "Defender",
      image: "moore.png",
      gallery: ["moore2.png", "moore3.png"],
      officialGoals: "30",
      born: "April 12, 1941",
      birthplace: "Barking, England",
      height: "1.83 m",
      foot: "Right",
      number: "6",
      era: "1958-1978",
      mainClubs: "West Ham United, Fulham",
      knownFor: "Anticipation, tackling, passing, leadership",
      summary: "Bobby Moore captained England to the World Cup through reading, timing, and composure rather than defensive chaos.",
      definingTrait: "Arriving at the exact moment a clean tackle became possible",
      sideCaption: "Moore defended with his eyes and mind before committing his body.",
      imagePosition: "center 18%",
      story: [
        "Moore became West Ham captain at 22 and led the club to the FA Cup and European Cup Winners' Cup. His calm distribution and precise tackling made him a modern defender before the term existed.",
        "At the 1966 World Cup, he captained England to its only men's world title and created the final goal. Pelé later described him as the best defender he faced."
      ],
      clubs: [
        club("West Ham United", "1958-1974", "Made 647 appearances and lifted three major trophies as captain."),
        club("Fulham", "1974-1977", "Reached another FA Cup final and continued playing in London."),
        club("North American clubs", "1976-1978", "Finished his playing career with spells in the United States.")
      ],
      stats: [
        stat("England appearances", "108"),
        stat("Matches as England captain", "90"),
        stat("West Ham games", "647"),
        stat("World Cups", "1")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("European Cup Winners' Cup", "1", { important: true }),
        honour("FA Cup", "1"),
        honour("Charity Shield", "1")
      ],
      skills: [
        skill("Anticipation", "Moore read passing intentions early and stepped in before danger fully formed."),
        skill("Clean tackling", "His timing separated the ball from the attacker without unnecessary force."),
        skill("Passing from defense", "He began attacks with measured passes rather than simply clearing pressure.")
      ],
      moments: [
        moment("1966 World Cup final", "Lifted the Jules Rimet Trophy and supplied the pass for England's fourth goal."),
        moment("Tackle on Jairzinho", "Produced a celebrated perfectly timed challenge at the 1970 World Cup."),
        moment("1965 European triumph", "Captained West Ham to the Cup Winners' Cup at Wembley.")
      ],
      why: [
        "Moore defended through judgment more than force. His reading of the game and calm use of the ball made him the natural captain of England's 1966 champions."
      ]
    },
    {
      slug: "robben",
      rank: 47,
      name: "Arjen Robben",
      fullName: "Arjen Robben",
      country: "Netherlands",
      position: "Winger",
      image: "robben.png",
      gallery: ["robben2.png", "robben3.png"],
      officialGoals: "246",
      born: "January 23, 1984",
      birthplace: "Bedum, Netherlands",
      height: "1.80 m",
      foot: "Left",
      number: "10",
      era: "2000-2021",
      mainClubs: "PSV, Chelsea, Real Madrid, Bayern Munich",
      knownFor: "Left-foot cuts, acceleration, ball carrying, decisive goals",
      summary: "Arjen Robben built a legendary career around a move everyone recognized and almost nobody could stop.",
      definingTrait: "Cutting inside from the right and creating his own shooting lane",
      sideCaption: "Robben's signature move remained dangerous because its timing was always different.",
      imagePosition: "center 15%",
      story: [
        "Robben developed at Groningen and PSV before winning league titles with Chelsea and Real Madrid. At Bayern Munich, his explosive carries and left-foot finishing made him a decisive Champions League winger.",
        "Injuries interrupted many seasons, but he repeatedly returned at an elite level. He also led the Netherlands to the 2010 World Cup final and starred again in 2014."
      ],
      clubs: [
        club("Groningen and PSV", "2000-2004", "Emerged as one of Europe's fastest and most dangerous young wingers."),
        club("Chelsea", "2004-2007", "Won two Premier League titles in José Mourinho's first Chelsea side."),
        club("Real Madrid", "2007-2009", "Added a La Liga title before moving to Germany."),
        club("Bayern Munich", "2009-2019", "Produced his defining decade and scored the club's 2013 European winner."),
        club("Groningen", "2020-2021", "Returned to his first club for a final season.")
      ],
      stats: [
        stat("Netherlands goals", "37"),
        stat("Netherlands appearances", "96"),
        stat("Bundesliga titles", "8"),
        stat("Champions Leagues", "1")
      ],
      honours: [
        honour("UEFA Champions League", "1", { important: true }),
        honour("Bundesliga", "8"),
        honour("Premier League", "2"),
        honour("La Liga", "1"),
        honour("Eredivisie", "1"),
        honour("German Cup", "5"),
        honour("FA Cup", "1")
      ],
      skills: [
        skill("Inside cut", "Robben changed speed, protected the ball, and opened a narrow angle for his left foot."),
        skill("Acceleration", "He separated from defenders over the first few steps even when starting from a standing position."),
        skill("Carrying at speed", "Close touches allowed him to travel long distances without surrendering control.")
      ],
      moments: [
        moment("2013 Champions League final", "Scored the 89th-minute winner against Borussia Dortmund at Wembley."),
        moment("2014 against Spain", "Outran the defense and finished a spectacular solo goal in a 5-1 World Cup win."),
        moment("2010 against Manchester United", "Volleyed a corner into the far corner to send Bayern through on away goals.")
      ],
      why: [
        "Everyone knew Robben wanted to cut in from the right onto his left foot. His speed, balance, and timing were so sharp that knowing rarely helped, even in Champions League and World Cup knockout matches."
      ]
    },
    {
      slug: "lewandowski",
      rank: 48,
      name: "Robert Lewandowski",
      fullName: "Robert Lewandowski",
      country: "Poland",
      position: "Forward",
      image: "lewa.png",
      gallery: ["lewa2.png", "lewa3.png"],
      officialGoals: "750",
      born: "August 21, 1988",
      birthplace: "Warsaw, Poland",
      height: "1.85 m",
      foot: "Right",
      number: "9",
      era: "2006-2026",
      mainClubs: "Lech Poznań, Borussia Dortmund, Bayern Munich, Barcelona",
      knownFor: "Box movement, first-touch finishing, strength, consistency",
      summary: "Robert Lewandowski refined center-forward play into a repeatable scoring system across Poland, Germany, and Spain.",
      definingTrait: "Creating a clean finish with one touch inside the box",
      sideCaption: "Lewandowski's movement made crowded penalty areas feel organized around him.",
      imagePosition: "center 14%",
      story: [
        "Lewandowski rose through Poland before Jürgen Klopp's Borussia Dortmund developed him into an elite pressing forward. At Bayern Munich, he became one of the most prolific scorers in European history.",
        "His 41-goal Bundesliga season broke Gerd Müller's record, and he later added three La Liga titles with Barcelona before leaving in 2026."
      ],
      clubs: [
        club("Znicz Pruszków and Lech Poznań", "2006-2010", "Climbed Poland's scoring charts and won the national league."),
        club("Borussia Dortmund", "2010-2014", "Won two Bundesliga titles and scored four against Real Madrid in a Champions League semi-final."),
        club("Bayern Munich", "2014-2022", "Scored 344 goals and completed the 2020 European treble."),
        club("Barcelona", "2022-2026", "Won three league titles and remained a leading scorer into his late thirties.")
      ],
      stats: [
        stat("Bayern Munich goals", "344"),
        stat("Bundesliga season record", "41"),
        stat("Champions League goals", "100+"),
        stat("FIFA Best awards", "2")
      ],
      honours: [
        honour("UEFA Champions League", "1", { important: true }),
        honour("Bundesliga", "10"),
        honour("La Liga", "3"),
        honour("German Cup", "4"),
        honour("Copa del Rey", "1"),
        honour("FIFA Club World Cup", "1"),
        honour("Polish League", "1")
      ],
      skills: [
        skill("Box movement", "Small double movements create separation just before a cross or cutback arrives."),
        skill("First-touch finishing", "He redirects passes accurately without needing an extra setup touch."),
        skill("Back-to-goal strength", "Lewandowski protects possession and links attacks before spinning toward goal.")
      ],
      moments: [
        moment("Five goals in nine minutes", "Came off the bench against Wolfsburg and produced a scoring sequence without precedent."),
        moment("2020 treble", "Scored 55 goals in 47 matches as Bayern won every competition it entered."),
        moment("41-goal Bundesliga season", "Broke Gerd Müller's long-standing single-season league record in 2021.")
      ],
      why: [
        "Lewandowski turned centre-forward play into a repeatable craft. The goals came in huge numbers, but so did the pressing, hold-up work, movement, and trophies across two major clubs."
      ]
    },
    {
      slug: "casillas",
      rank: 49,
      name: "Iker Casillas",
      fullName: "Iker Casillas Fernández",
      country: "Spain",
      position: "Goalkeeper",
      image: "iker.png",
      gallery: ["Casillas2.png", "casillas3.png"],
      officialGoals: "0",
      born: "May 20, 1981",
      birthplace: "Móstoles, Spain",
      height: "1.82 m",
      foot: "Left",
      number: "1",
      era: "1999-2020",
      mainClubs: "Real Madrid, Porto",
      knownFor: "Reflexes, one-on-ones, leadership, big-match saves",
      summary: "Iker Casillas produced his best goalkeeping in decisive moments and captained Spain through an unprecedented international era.",
      definingTrait: "Reacting at close range before a striker could celebrate",
      sideCaption: "San Iker built his reputation on saves that changed finals and knockout ties.",
      imagePosition: "center 14%",
      story: [
        "Casillas rose from Real Madrid's academy and became a Champions League winner while still a teenager. His reflexes and one-on-one saves made him exceptional even without the height of many modern goalkeepers.",
        "As Spain captain, he lifted Euro 2008, the 2010 World Cup, and Euro 2012 while anchoring a defense that rarely conceded."
      ],
      clubs: [
        club("Real Madrid", "1999-2015", "Made 725 appearances and won three Champions Leagues and five La Liga titles."),
        club("Porto", "2015-2020", "Won the Portuguese league and extended his Champions League appearance records.")
      ],
      stats: [
        stat("Spain appearances", "167"),
        stat("Real Madrid games", "725"),
        stat("Champions Leagues", "3"),
        stat("Major Spain titles", "3")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA European Championship", "2", { international: true }),
        honour("UEFA Champions League", "3", { important: true }),
        honour("La Liga", "5"),
        honour("Copa del Rey", "2"),
        honour("FIFA Club World Cup", "1"),
        honour("Portuguese League", "1")
      ],
      skills: [
        skill("Reflexes", "Casillas exploded toward shots from short distance with very little preparation time."),
        skill("One-on-ones", "He stayed upright, closed space quickly, and reacted to the final touch."),
        skill("Big-match focus", "His concentration and calm repeatedly peaked in finals and knockout matches.")
      ],
      moments: [
        moment("2010 World Cup final", "Stopped Arjen Robben in a decisive one-on-one before Spain won in extra time."),
        moment("2002 Champions League final", "Came off the bench and made several late saves to protect Madrid's lead."),
        moment("Euro 2008 shootout", "Saved two penalties against Italy as Spain broke its quarter-final barrier.")
      ],
      why: [
        "Casillas was at his best when a match came down to one chance. His reflexes and one-on-one saves were crucial to Spain's run of three straight major international titles."
      ]
    },
    {
      slug: "mbappe",
      rank: 50,
      name: "Kylian Mbappé",
      fullName: "Kylian Mbappé Lottin",
      country: "France",
      position: "Forward",
      image: "mbappe.png",
      gallery: ["mbappe2.png", "mbappe3.png"],
      officialGoals: "438",
      born: "December 20, 1998",
      birthplace: "Paris, France",
      height: "1.78 m",
      foot: "Right",
      number: "10",
      era: "2015-present",
      mainClubs: "Monaco, Paris Saint-Germain, Real Madrid",
      knownFor: "Explosive pace, transition scoring, movement, composure",
      summary: "Kylian Mbappé reached the highest level unusually early and built a historic World Cup record before his 25th birthday.",
      definingTrait: "Turning one yard of open grass into an unstoppable attack",
      sideCaption: "Mbappé combines sprinter-level acceleration with a scorer's calm in the box.",
      imagePosition: "center 16%",
      story: [
        "Mbappé broke through during Monaco's 2016-17 title run, then became Paris Saint-Germain's record scorer. His acceleration and direct finishing made him dangerous against both high lines and set defenses.",
        "He won the 2018 World Cup as a teenager and scored a hat trick in the 2022 final. Since joining Real Madrid in 2024, he has added Spanish scoring titles and major international club trophies."
      ],
      clubs: [
        club("Monaco", "2015-2017", "Broke through as a teenager and helped win Ligue 1 while reaching a Champions League semi-final."),
        club("Paris Saint-Germain", "2017-2024", "Became the club's all-time leading scorer and won six league titles."),
        club("Real Madrid", "2024-present", "Added a new chapter in Spain and won consecutive Pichichi scoring awards.")
      ],
      stats: [
        stat("World Cup final goals", "4"),
        stat("World Cup Golden Boots", "1"),
        stat("Ligue 1 top-scorer awards", "6"),
        stat("Pichichi awards", "2")
      ],
      honours: [
        honour("FIFA World Cup", "1", { important: true, international: true }),
        honour("UEFA Nations League", "1", { international: true }),
        honour("Ligue 1", "7"),
        honour("French Cup", "4"),
        honour("French League Cup", "2"),
        honour("UEFA Super Cup", "1"),
        honour("FIFA Intercontinental Cup", "1")
      ],
      skills: [
        skill("Acceleration", "His first steps separate him before defenders can turn and match the run."),
        skill("Transition finishing", "Mbappé carries at full speed and still places the final shot with control."),
        skill("Off-ball movement", "He delays and curves runs to stay onside before attacking space behind a defense.")
      ],
      moments: [
        moment("2018 World Cup", "Scored four goals, including one in the final, as France became world champion."),
        moment("2022 World Cup final", "Scored a hat trick and converted in the shootout during an extraordinary final."),
        moment("Barcelona hat trick", "Scored three times at Camp Nou in a 2021 Champions League knockout match.")
      ],
      why: [
        "Mbappé is still building his career, which keeps him at number 50 for now. A World Cup won as a teenager, four goals across two World Cup finals, and years of elite scoring already put him on the list."
      ]
    }
  ];

  const defaultHighlights = player => [
    {
      eyebrow: "Career film",
      title: "Best career highlights",
      query: "best career highlights"
    },
    {
      eyebrow: "Signature play",
      title: `${player.knownFor.split(",")[0]} compilation`,
      query: `${player.knownFor.split(",")[0]} compilation`
    },
    {
      eyebrow: "Big stage",
      title: "Greatest matches and moments",
      query: "greatest matches goals skills"
    }
  ];

  profiles.forEach(player => {
    player.highlights = player.highlights || defaultHighlights(player);
  });

  window.PLAYER_PROFILES = Object.fromEntries(
    profiles.map(player => [player.slug, player])
  );

  window.PLAYER_ORDER = [
    { rank: 1, slug: "messi", name: "Lionel Messi", path: "messi.html" },
    { rank: 2, slug: "ronaldo", name: "Cristiano Ronaldo", path: "ronaldo.html" },
    { rank: 3, slug: "maradona", name: "Diego Maradona", path: "maradona.html" },
    { rank: 4, slug: "ronaldo-nazario", name: "Ronaldo Nazário", path: "ronaldo-nazario.html" },
    { rank: 5, slug: "pele", name: "Pelé", path: "pele.html" },
    { rank: 6, slug: "zidane", name: "Zinedine Zidane", path: "zidane.html" },
    ...profiles.map(({ rank, slug, name }) => ({ rank, slug, name }))
  ];
})();
