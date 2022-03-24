const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const displayWriter = document.getElementById('writer');

// Quotes
const quotes = [
   "Those who do not understand true pain can never understand true peace.",
   
   "There Are Two Things That Collectors Always Want. The First As An Item Of Extreme Rarity. The Second Is Colleagues To Whom They Can Brag About Their Collection.",

   "The accumulation of those little despairs is what makes a person an adult",

   "In all things, one cannot win with defense alone. To Win, you must attack.",

   "People become stronger because they have memories they can't forget.",

   "In Exchange For Power, Maybe I've Lost Something That Is Essential To Being Human.",

   "Forgetting is like a wound. The wound may heal, but it has already left a scar.",
   
   "To surpass monsters, you must be willing to abandon your humanity.",

   "Dedication is a talent all on its own.",

   "You should enjoy the little detours to the fullest because that's where you'll find things more important than what you want.",

   "A place where someone still thinks about you is a place you can call home.",

   "Laws Aren't Perfect, Because Humans Who Created Laws Aren't Perfect. It's Impossible To Be Perfect. However, The Laws Are Evidence Of The Human Struggle To Be Righteous.",

   "It's only obvious that the world is a cruel place. If you can't change the world then you have to change yourself!",

   "Look at my eyes, Faye. One of them is a fake because I lost it in an accident. Since then, I've been seeing the past in one eye and the present in the other. So, I thought I could only see patches of reality, never the whole picture.",

   "Power comes in response to a need, not a desire. You have to create that need.",

   "A dropout will beat a genius through hard work.",

   "When people are faced with a situation they don't understand, it's easy for fear to take hold.",

   "The moment you think of giving up, think of the reason why you held on so long.",

   "A person grows up when he's able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.",

   "If You Can Do One Thing, Hone It To Perfection. Hone It To The Utmost Limit.",

   "Life and death are like light and shadow. They're both always there. But people don't like thinking about death, so subconsciously, they always look away from it.",

   "If you begin to regret, you'll dull your future decisions and let others make your choices for you. All tha's left for you then is to die. Nobody can foretell the outcome. Each decision you make holds meaning only by affecting your next decision.",

   "You need to accept the fact that you're not the best and have all the will to strive to be better than anyone you face.",

   "An apology is a promise to do things differently next time, and to  keep the promise",

   "All You Did Was Memorize A Fact. Your Body Has No Clue What It Needs To Do.",

   "You are calm and intelligent, but youth can invite disaster. Do not fight alone.",

   "The most inflated egos are often the most fragile.",

   "Searching for someone to blame is such a pain"

];

// Authors
const writers = [
   " - Pain (Naruto)",
   " - Kurapika (Hunter X Hunter)",
   " - Kento Nanami (Jujutsu Kaisen)",
   " - L (Death Note)", 
   " - Tsunade (Naruto)", 
   " - Saitama (One Punch Man)", 
   " - Monkey D. Luffy (One Piece)",
   " - Arming Arlert (Attack On Titan)",
   " - Alphonse Elric (Fullmetal Alchemist)",
   " - Ging (Hunter X Hunter)", 
   " - Jiraiya Sensei (Naruto)", 
   " - Soichiro Yagami (Death Note)", 
   " - Tatsumi (Death Parade)",
   " - Spike Spiegel (Cowboy Bebop)",
   " - Goku (Dragon Ball Z)",
   " - Rock Lee (Naruto)",
   " - Armin Arlert (Attack On Titan)",
   " - Natsu Dragneel (Fairy Tail)",
   " - Jiraiya Sensei (Naruto)",
   " - Jigoro (Demon Slayer)",
   " - Yato (Noragami)",
   " - Erwin Smith (Attack On Titan)",
   " - Roronoa Zoro (One Piece)",
   " - Ging (Hunter X Hunter)",
   " - Sabito (Demon Slayer)",
   " - Dr Kuseno (One Punch Man)",
   " - All Might (My Hero Academia)",
   " - Satoru Gojo (Jujutsu Kaisen)"
];

// Get values using a random number as the index
btn.addEventListener('click', () => {
   const index = generateRandomNumber();
   quote.textContent = quotes[index];
   displayWriter.innerText = writers[index];
});

// Random number
function generateRandomNumber() {
   const randomNumber = Math.floor(Math.random() * quotes.length);
   return randomNumber;
};
