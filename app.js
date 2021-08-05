class Personality{
 constructor( type, name, description ){
this.type=type
this.name=name
this.description=description
}
}

let theMediator = new Personality(
"INFP", "The Mediator", `A Mediator (INFP) is someone who possesses the Introverted, Intuitive, Feeling, and Prospecting personality traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do.
Although they may seem quiet or unassuming, Mediators (INFPs) have vibrant, passionate inner lives. Creative and imaginative, they happily lose themselves in daydreams, inventing all sorts of stories and conversations in their minds. These personalities are known for their sensitivity – Mediators can have profound emotional responses to music, art, nature, and the people around them.
Idealistic and empathetic, Mediators long for deep, soulful relationships, and they feel called to help others. But because this personality type makes up such a small portion of the population, Mediators may sometimes feel lonely or invisible, adrift in a world that doesn’t seem to appreciate the traits that make them unique.
 ` )   ;

let theAdvocate= new Personality ("INFJ", "The Advocate", `An Advocate (INFJ) is someone with the Introverted, Intuitive, Feeling, and Judging personality traits. They tend to approach life with deep thoughtfulness and imagination. Their inner vision, personal values, and a quiet, principled version of humanism guide them in all things.
“Treat people as if they were what they ought to be and you help them to become what they are capable of being.”
JOHANN WOLFGANG VON GOETHE
Advocates are the rarest personality types of all. Still, Advocates leave their mark on the world. They have a deep sense of idealism and integrity, but they aren’t idle dreamers – they take concrete steps to realize their goals and make a lasting impact.
Advocates’ unique combination of personality traits makes them complex and quite versatile. For example, Advocates can speak with great passion and conviction, especially when standing up for their ideals. At other times, however, they may choose to be soft-spoken and understated, preferring to keep the peace rather than challenge others.
`);

let theLogician= new Personality("INTP", "The Logician", `A Logician (INTP) is someone with the Introverted,  Intuitive, Thinking, and Prospecting personality traits. These flexible thinkers enjoy taking an unconventional approach to many aspects of life. They often seek out unlikely paths, mixing willingness to experiment with personal creativity.
The important thing is not to stop questioning. Curiosity has its own reason for existence.
ALBERT EINSTEIN
Logicians pride themselves on their unique perspectives and vigorous intellect. They can’t help but puzzle over the mysteries of the universe – which may explain why some of the most influential philosophers and scientists of all time have been Logicians. This personality type is fairly rare, but with their creativity and inventiveness, Logicians aren’t afraid to stand out from the crowd.
 `);

let theArchitect = new Personality("INTJ", "Architect ", `An Architect (INTJ) is a person with the Introverted,  Intuitive, Thinking,  and Judging personality traits. These thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do. Their inner world is often a private, complex one.
“Thought constitutes the greatness of man. Man is a reed, the feeblest thing in nature, but he is a thinking reed.”
BLAISE PASCAL
It can be lonely at the top. As one of the rarest personality types – and one of the most capable – Architects (INTJs) know this all too well. Rational and quick-witted, Architects may struggle to find people who can keep up with their nonstop analysis of everything around them.
 `);


let theAdventurer =new Personality("ISFP","The Adventurer",`An Adventurer (ISFP) is a person with the Introverted, Observant, Feeling, and Prospecting  personality traits. They tend to have open minds, approaching life, new experiences, and people with grounded warmth. Their ability to stay in the moment helps them uncover exciting potentials.
I change during the course of a day. I wake and I’m one person, and when I go to sleep I know for certain I’m somebody else.
BOB DYLAN
Adventurer personalities are true artists, but not necessarily in the typical sense where they’re out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it’s that they use aesthetics, design and even their choices and actions to push the limits of social convention. Adventurers enjoy upsetting traditional expectations with experiments in beauty and behavior – chances are, they’ve expressed more than once the phrase “Don’t box me in!”`)

let theDefender = new Personality("ISFJ","The Defender",`A Defender (ISFJ) is someone with the Introverted, Sensing, Feeling, and Judging personality traits. These people tend to be warm and unassuming in their own steady way. They’re efficient and responsible, giving careful attention to practical details in their daily lives.
Love only grows by sharing. You can only have more for yourself by giving it away to others.
BRIAN TRACY
The Defender personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though sensitive, Defenders have excellent analytical abilities; though reserved, they have well-developed people skills and robust social relationships; and though they are generally a conservative type, Defenders are often receptive to change and new ideas. As with so many things, people with the Defender personality type are more than the sum of their parts, and it is the way they use these strengths that defines who they are.
Defenders are true altruists, meeting kindness with kindness-in-excess and engaging the work and people they believe in with enthusiasm and generosity.
There’s hardly a better type to make up such a large proportion of the population, nearly 13%. Combining the best of tradition and the desire to do good, Defenders are found in lines of work with a sense of history behind them, such as medicine, academics and charitable social work.
 `)

let theVirtu = new Personality("ISTP", "The Virtuoso", `A Virtuoso (ISTP) is someone with the Introverted, Sensing, Thinking, and Prospecting personality traits. They tend to have an individualistic mindset, pursuing goals without needing much external connection. They engage in life with inquisitiveness and personal skill, varying their approach as needed.
I wanted to live the life, a different life. I didn’t want to go to the same place every day and see the same people and do the same job. I wanted interesting challenges.
HARRISON FORD
Virtuosos love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project, building the useful and the superfluous for the fun of it, and learning from their environment as they go. Often mechanics and engineers, Virtuosos find no greater joy than in getting their hands dirty pulling things apart and putting them back together, just a little bit better than they were before.
 `) 


 let theLogis = new Personality("ISTJ", "The Logistician  ", `A Logistician (ISTJ) is someone with the Introverted,  Sensing, Thinking , and Judging personality traits. These people tend to be reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose.
 My observation is that whenever one person is found adequate to the discharge of a duty... it is worse executed by two persons, and scarcely done at all if three or more are employed therein.
 GEORGE WASHINGTON
 The Logistician personality type is thought to be the most abundant, making up around 13% of the population. Their defining characteristics of integrity, practical logic and tireless dedication to duty make Logisticians a vital core to many families, as well as organizations that uphold traditions, rules and standards, such as law offices, regulatory bodies and military. People with the Logistician personality type enjoy taking responsibility for their actions, and take pride in the work they do – when working towards a goal, Logisticians hold back none of their time and energy completing each relevant task with accuracy and patience.
  `)

  let theCamp = ("ENFP", "The Campaigner", `A Campaigner (ENFP) is someone with the , Extroverted, Intuitive, Feeling, and Prospecting personality traits. These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. Their vibrant energy can flow in many directions.
  It doesn’t interest me what you do for a living. I want to know what you ache for – and if you dare to dream of meeting your heart’s longing.
  ORIAH MOUNTAIN DREAMER
  Campaigners (ENFPs) are true free spirits – outgoing, openhearted, and open-minded. With their lively, upbeat approach to life, they stand out in any crowd. But even though they can be the life of the party, Campaigners don’t just care about having a good time. These personality types run deep – as does their longing for meaningful, emotional connections with other people.
   ` )
  
   let thePro= new Personality ("ENFJ", "The Protagonist", `A Protagonist (ENFJ) is a person with the Extraverted, Intuitive,  Feeling, and Judging personality traits. These warm, forthright types love helping others, and they tend to have strong ideas and values. They back their perspective with the creative energy to achieve their goals.
  Protagonists (ENFJs) feel called to serve a greater purpose in life. Thoughtful and idealistic, these personality types strive to have a positive impact on other people and the world around them. They rarely shy away from an opportunity to do the right thing, even when doing so is far from easy.
   `)

let theDeb= new Personality("ENTP", "The Debator", `A Debater (ENTP) is a person with the Extraverted, Intuitive, Thinking, and Prospecting personality traits. They tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility. They pursue their goals vigorously despite any resistance they might encounter.
No one loves the process of mental sparring more than the Debater personality type, as it gives them a chance to exercise their effortlessly quick wit, broad accumulated knowledge base, and capacity for connecting disparate ideas to prove their points. Debaters are the ultimate devil’s advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. They don’t always do this because they are trying to achieve some deeper purpose or strategic goal, though. Sometimes it’s for the simple reason that it’s fun.
An odd juxtaposition arises with Debaters, as they are uncompromisingly honest, but will argue tirelessly for something they don’t actually believe in, stepping into another’s shoes to argue a truth from another perspective.
Playing the devil’s advocate helps people with the Debater personality type to not only develop a better sense of others’ reasoning, but a better understanding of opposing ideas – since Debaters are the ones arguing them.
This tactic shouldn’t be confused with the sort of mutual understanding Diplomat personalities seek – Debaters, like all Analyst personality types, are on a constant quest for knowledge, and what better way to gain it than to attack and defend an idea, from every angle, from every side?

 `)

 let theCom= new Personality("ENTJ", "The Commander ", `A Commander (ENTJ) is someone with the Extraverted, Intuitive, Thinking, and Judging personality traits. They are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them.
 Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma — which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.
 STEVE JOBS
 Commanders are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. However, Commanders are also characterized by an often ruthless level of rationality, using their drive, determination and sharp minds to achieve whatever end they’ve set for themselves. Perhaps it is best that they make up only three percent of the population, lest they overwhelm the more timid and sensitive personality types that make up much of the rest of the world – but we have Commanders to thank for many of the businesses and institutions we take for granted every day.
  ` )

  let theEnter = ("ESFP", "The Entertainer", `An Entertainer (ESFP) is a person with the Extraverted, Sensing, Feeling, and Prospecting personality traits. These people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown. They can be very social, often encouraging others into shared activities.
  I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you surely don’t deserve me at my best.
  MARILYN MONROE
  If anyone is to be found spontaneously breaking into song and dance, it is the Entertainer personality type. Entertainers get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy as Entertainers when it comes to encouraging others, and no other personality type does it with such irresistible style.
   ` )

   let theCon= new Personality("ESFJ", "The Consul", `A Consul (ESFJ) is a person with the Extraverted, Sensing, Feeling, and Judging personality traits. They are attentive and people-focused, and they enjoy taking part in their social community. Their achievements are guided by decisive values, and they willingly offer guidance to others.
   Encourage, lift and strengthen one another. For the positive energy spread to one will be felt by us all.
   DEBORAH DAY
   People who share the Consul personality type are, for lack of a better word, popular – which makes sense, given that it is also a very common personality type, making up twelve percent of the population. In high school, Consuls are the cheerleaders and the quarterbacks, setting the tone, taking the spotlight and leading their teams forward to victory and fame. Later in life, Consuls continue to enjoy supporting their friends and loved ones, organizing social gatherings and doing their best to make sure everyone is happy.
   At their hearts, Consul personalities are social creatures, and thrive on staying up to date with what their friends are doing.
    `)

    let theEnt = new Personality("ESTP", "The Entrepreneur", `An Entrepreneur (ESTP) is someone with the Extraverted, Sensing, Thinking, and Prospecting personality traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits.
    Life is either a daring adventure or nothing at all.
    HELEN KELLER
    Entrepreneurs always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, Entrepreneur personalities love to be the center of attention. If an audience member is asked to come on stage, Entrepreneurs volunteer – or volunteer a shy friend.
    Theory, abstract concepts and plodding discussions about global issues and their implications don’t keep Entrepreneurs interested for long. Entrepreneurs keep their conversation energetic, with a good dose of intelligence, but they like to talk about what is – or better yet, to just go out and do it. Entrepreneurs leap before they look, fixing their mistakes as they go, rather than sitting idle, preparing contingencies and escape clauses.
     `)

     let theExec = new Personality("ESTJ", "The Executive", `An Executive (ESTJ) is someone with the Extraverted, Sensing, Thinking, and Judging personality traits. They possess great fortitude, emphatically following their own sensible judgment. They often serve as a stabilizing force among others, able to offer solid direction amid adversity.
     Good order is the foundation of all things.
     EDMUND BURKE
     Executives are representatives of tradition and order, utilizing their understanding of what is right, wrong and socially acceptable to bring families and communities together. Embracing the values of honesty, dedication and dignity, people with the Executive personality type are valued for their clear advice and guidance, and they happily lead the way on difficult paths. Taking pride in bringing people together, Executives often take on roles as community organizers, working hard to bring everyone together in celebration of cherished local events, or in defense of the traditional values that hold families and communities together.
     `)
   
     const personalities=[theMediator, theAdvocate, theLogician ,theArchitect , theAdventurer, theDefender, theVirtu, theLogis,theCamp, thePro,theDeb, theCom, theEnter, theCon, theEnt, theExec];

let index = 0

function updateDom(){
    type.textContent= personalities[index].type
            name.textContent = personalities[index].name
description.textContent = personalities[index].description
}


let type = document.getElementById ("type");
let name = document.getElementById ("name");
let desc = document.getElementById ("Description");

let backBtn= document.getElementById ("backBtn")
let nextBtn= document.getElementById ("nextBtn")

updateDom()

nextBtn.addEventListener( "click", function(){
    if(index==personalities.length-2){
index++
        nextBtn.disabled = true
nextBtn["aria-disabled"]= true;
    } else if (index < personalities.length-1){
index++
    }
updateDom();
})

backBtn.addEventListener("click",()=>{
    if( index == 1){
index--
 backBtn.disabled=true
backBtn["aria-disabled"]=true    }
 else if( index > 1){
     index--
 }
updateDom()
});