

//do not skid my stuff (skid means steal) don't change the credits don't remove the credits add real changes if you edit it

var alertAllow = document.createElement('iframe');document.body.append(alertAllow);window.alert = alertAllow.contentWindow.alert.bind(window);
alertAllow.remove(); 


// Get the hostname from the current URL
const hostname = window.location.hostname; // e.g., 'tower.blooket.com'

// Split the hostname into its components by dots
const subdomains = hostname.split('.');

// Check if there's at least one subdomain and retrieve the first part
const firstSubdomain = subdomains.length > 1 ? subdomains[0] : '';


var Url = firstSubdomain;
console.log(Url);
//toggles
var guessT = "off"
var freezeT = "off"
var autoT = "off"
var sidebarT = "off"
var suT = "off"
var hideT = "off"
var switchedT = "off"

//themes
//dark
var grey = "#2c2f33";
var greyT = "#ffffff"

//defult
var guiState = "open";
var theme = "dark";
var page = "utilities";
var lastUpdated = "5/12/24"
//gui width and height
var guiW = "370px"
var guiH = "250px"

//change blooket text
if (Url === "play") {
let text = document.querySelector("._linkText_sahgi_17");
if (text) {
text.innerHTML = "Thunder Client";
text.style.fontSize = "30px";
text.removeAttribute("href");   
text.href = "https://discord.gg/vfvfCeKrJK";
    text.target = "_blank";
    text.textContent = "Thunder Client";
}
}

if (Url === "play") {

}



//gui
var gui =
document.createElement("div")
gui.style.width = guiW;
gui.style.height = guiH;
gui.style.backgroundColor = grey;
gui.style.border = "none"
gui.style.borderRadius = "20px"
gui.style.position = "absolute"
gui.style.display = "block"
document.body.appendChild(gui)

//draggable
var initialX;
var initialY;
var offsetX = 0;
var offsetY = 0;





// Function to handle mouse/touch down event
function startDragging(e) {
    if (e.type === "mousedown") {
        initialX = e.clientX - offsetX;
        initialY = e.clientY - offsetY;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDragging);
    } else if (e.type === "touchstart") {
        var touch = e.targetTouches[0];
        initialX = touch.clientX - offsetX;
        initialY = touch.clientY - offsetY;
        document.addEventListener("touchmove", drag);
        document.addEventListener("touchend", stopDragging);
    }
}

// Function to handle mouse/touch move event
function drag(e) {
    e.preventDefault();
    if (e.type === "mousemove") {
        offsetX = e.clientX - initialX;
        offsetY = e.clientY - initialY;
    } else if (e.type === "touchmove") {
        var touch = e.targetTouches[0];
        offsetX = touch.clientX - initialX;
        offsetY = touch.clientY - initialY;
    }
    gui.style.left = offsetX + "px";
    gui.style.top = offsetY + "px";
}

// Function to handle mouse/touch up event
function stopDragging() {
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDragging);
    document.removeEventListener("touchmove", drag);
    document.removeEventListener("touchend", stopDragging);
}

// Add event listeners for both mouse and touch events
gui.addEventListener("mousedown", startDragging);
gui.addEventListener("touchstart", startDragging);


 var sidebar = document.createElement("div")
 sidebar.style.width = "160px"
 sidebar.style.height = guiH;
 sidebar.style.backgroundColor = grey;
 sidebar.style.border = "none"
 sidebar.style.position = "absolute"
 sidebar.style.top = "0px"
 sidebar.style.left = "400px"
 sidebar.style.borderRadius = "20px"
 gui.appendChild(sidebar)

 mini = document.createElement("div")
 mini.style.width = "160px"
 mini.style.height = "40px"
 mini.style.backgroundColor = "#3b3f45"
 mini.style.border = "none"
   mini.style.position = "absolute";
 mini.style.top = "0px";
 mini.style.left = "0px";
 mini.style.borderRadius = "20px 20px 0px 0px";
 sidebar.appendChild(mini)

 var miniT = document.createElement("p")
 miniT.style.width = "160px"
 miniT.style.height = "20px"
 miniT.style.color = "white"
 miniT.style.position = "absolute"
 miniT.style.top = "-5px"
 miniT.style.left = "0px"
 miniT.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>'
 miniT.style.fontFamily = "sans-serif"
 miniT.style.textAlign = "center"
 miniT.style.fontSize = "12px"
 sidebar.appendChild(miniT)

 //status
 var status2 = document.createElement("p")
 status2.innerHTML = "Status:"
 status2.style.width = "160px"
 status2.style.fontFamily = "sans-serif"
 status2.style.color = "black"
 status2.style.position = "absolute"
 status2.style.top = "40px"
 status2.style.left = "7px"
 status2.style.fontSize = "12px"
 status2.style.color = "white"
 sidebar.appendChild(status2)

 var status3 = document.createElement("p")
 status3.innerHTML = "Undetected"
 status3.style.width = "10px"
 status3.style.fontFamily = "sans-serif"
 status3.style.color = "green"
 status3.style.position = "absolute"
 status3.style.top = "40px"
 status3.style.left = "55px"
 status3.style.fontSize = "12px"
 status3.style.fontWeight = "bold"
 sidebar.appendChild(status3)

 var last = document.createElement("p")
 last.innerHTML = "Last Updated: " + lastUpdated;
 last.style.width = "160px"
 last.style.fontFamily = "sans-serif"
 last.style.fontSize = "12px"
 last.style.color = "white"
 last.style.position = "absolute"
 last.style.top = "60px"
 last.style.left = "7px"
 last.style.whiteSpace = "nowrap"
 sidebar.appendChild(last)

 var credit = document.createElement("p")
 credit.innerHTML = "Made by: ShinyThunder"
 credit.style.width = "160px"
 credit.style.fontFamily = "sans-serif"
 credit.style.fontSize = "12px"
 credit.style.color = "white"
 credit.style.position = "absolute"
 credit.style.top = "80px"
 credit.style.left = "7px"
 credit.style.whiteSpace = "nowrap"
 sidebar.appendChild(credit)

var guessCount = document.createElement("p")
guessCount.innerHTML = "Guess Count: " + guessT;
guessCount.style.width = "160px"
guessCount.style.fontFamily = "sans-serif"
guessCount.style.fontSize = "12px"
guessCount.style.color = "white"
guessCount.style.position = "absolute"
guessCount.style.top = "100px"
guessCount.style.left = "7px"
sidebar.appendChild(guessCount)
    

//bar
bar = document.createElement("div")
bar.style.width = guiW;
bar.style.height = "40px"
bar.style.backgroundColor = "#3b3f45"
bar.style.border = "none"
bar.style.borderRadius = "20px 20px 0px 0px"
bar.style.position = "absolute"

gui.appendChild(bar)

// Global variable to control guessing process
let isGuessingActive = false;

// Function to generate a random 7-digit code
function generateRandomId() {
  return Math.floor(Math.random() * 9000000) + 1000000;
}

function guessCode() {
  let guesses = 0;
  let sleep = 0;

  function reactHandler() {
    return Object.values(
      (function react(r = document.querySelector("body>div")) {
        return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"));
      })()
    )[1].children[0]._owner.stateNode;
  }

  function checkGameExists() {
    if (!isGuessingActive) {
      return; // Stop if guessing is inactive
    }

    const randomId = generateRandomId();
    const url = `https://fb.blooket.com/c/firebase/id?id=${randomId}`;

    fetch(url, {
      method: 'GET',
      credentials: 'include', // Include cookies
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === true) {
          console.log("Game found:", randomId);
          guessCount.innerHTML = `Code: ${randomId}`;
          const handler = reactHandler();
          if (handler) {
            handler.setState({ client: { hostId: randomId.toString() } });
            handler.onJoin();
          }
        } else {
          guesses++;
              guessCount.innerHTML = `Guesses: ${guesses}`;
          sleep++;

          if (sleep > 15) {
            setTimeout(() => {
              if (isGuessingActive) checkGameExists(); // Retry with a 1-second delay
            }, 1000);
            sleep = 0;
          } else {
            if (isGuessingActive) checkGameExists(); // Retry immediately
          }
        }
      })
      .catch(error => {
        console.error("Error:", error);
        guessCount.innerHTML = `Error: ${error.message}`; // Display error message
      });
  }

  // Call checkGameExists to start the process
  checkGameExists();
}

// Function to toggle the guessing process
function toggleGuessCode() {
  isGuessingActive = !isGuessingActive; // Toggle guessing on/off

  if (isGuessingActive) {
    guessCount.innerHTML = "Guessing started...";
    guessCode(); // Start guessing if toggled on
  } else {
      guessCount.innerHTML = "Guess Count: " + guessT;
  }
}




function useAnyBlook() {
   (() => {
       let blooks = ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Alpaca", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Deer", "Wolf", "Beaver", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Gorilla", "Hippo", "Rhino", "Giraffe", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus", "Witch", "Wizard", "Elf", "Fairy", "Slime Monster", "Jester", "Dragon", "Queen", "Unicorn", "King", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", "Old Boot", "Jellyfish", "Clownfish", "Frog", "Crab", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Dolphin", "Baby Shark", "Megalodon", "Panda", "Sloth", "Tenrec", "Flamingo", "Zebra", "Elephant", "Lemur", "Peacock", "Chameleon", "Lion", "Amber", "Dino Egg", "Dino Fossil", "Stegosaurus", "Velociraptor", "Brontosaurus", "Triceratops", "Tyrannosaurus Rex", "Ice Bat", "Ice Bug", "Ice Elemental", "Rock Monster", "Dink", "Donk", "Bush Monster", "Yeti", "Dingo", "Echidna", "Koala", "Kookaburra", "Platypus", "Joey", "Kangaroo", "Crocodile", "Sugar Glider", "Deckhand", "Buccaneer", "Swashbuckler", "Treasure Map", "Seagull", "Jolly Pirate", "Pirate Ship", "Kraken", "Captain Blackbeard", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Stocking", "Gingerbread Man", "Gingerbread House", "Reindeer", "Snowman", "Santa Claus", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Caramel Apple", "Candy Corn", "Werewolf", "Ghost", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lucky Hamster", "Chocolate Rabbit", "Spring Rabbit", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Frost Wreath", "Tropical Globe", "New York Snow Globe", "London Snow Globe", "Japan Snow Globe", "Egypt Snow Globe", "Paris Snow Globe", "Red Sweater Snowman", "Blue Sweater Snowman", "Elf Sweater Snowman", "Santa Claws", "Cookies Combo", "Chilly Flamingo", "Snowy Bush Monster", "Nutcracker Koala", "Sandwich", "Ice Slime", "Frozen Fossil", "Ice Crab", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Teal Platypus", "Red Astronaut", "Orange Astronaut", "Yellow Astronaut", "Lime Astronaut", "Green Astronaut", "Cyan Astronaut", "Blue Astronaut", "Pink Astronaut", "Purple Astronaut", "Brown Astronaut", "Black Astronaut", "Lovely Planet", "Lovely Peacock", "Haunted Pumpkin", "Pumpkin Cookie", "Ghost Cookie", "Red Gummy Bear", "Blue Gummy Bear", "Green Gummy Bear", "Chick Chicken", "Chicken Chick", "Raccoon Bandit", "Owl Sheriff", "Vampire Frog", "Pumpkin King", "Leprechaun", "Anaconda Wizard", "Spooky Pumpkin", "Spooky Mummy", "Agent Owl", "Master Elf", "Party Pig", "Wise Owl", "Spooky Ghost", "Phantom King", "Tim the Alien", "Rainbow Astronaut", "Hamsta Claus", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue"];

       let reactHandler = () => {
           return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
       };

       let blookData = {};
       blooks.forEach(e => {
           blookData[e] = 1;
       });

       let {
           stateNode: reactNode
       } = reactHandler();

       reactNode.setState({
           blookData: blookData,
           unlocks: blooks
       });
   })();
}

function getDaily() {


   (() => {
       const cheat = (async () => {
           let i = document.createElement('iframe');
           document.body.append(i);
           window.alert = i.contentWindow.alert.bind(window);
           i.remove();
           if (!location.href.includes("play.blooket.com")) (alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"));
           else {
               const { t } = await fetch("https://play.blooket.com/api/playersessions/solo", {
                   body: JSON.stringify({
                       gameMode: "Factory",
                       questionSetId: ["60101da869e8c70013913b59", "625db660c6842334835cb4c6", "60268f8861bd520016eae038", "611e6c804abdf900668699e3", "60ba5ff6077eb600221b7145", "642467af9b704783215c1f1b", "605bd360e35779001bf57c5e", "6234cc7add097ff1c9cff3bd", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "5fac96fe2ca0da00042b018f", "600b14d8d42a140004d52165", "5f88953cdb209e00046522c7", "600b153ad42a140004d52172", "5fe260e72a505b00040e2a11", "5fe3d085a529560004cd3076", "5f5fc017aee59500041a1456", "608b0a5863c4f2001eed43f4", "5fad491512c8620004918ace", "5fc91a9b4ea2e200046bd49a", "5c5d06a7deebc70017245da7", "5ff767051b68750004a6fd21", "5fdcacc85d465a0004b021b9", "5fb7eea20bd44300045ba495"][Math.floor(Math.random() * 24)]
                   }),
                   credentials: "include",
                   method: "POST"
               }).then(x => x.json());
               await fetch("https://play.blooket.com/api/playersessions/landings", {
                   body: JSON.stringify({ t }),
                   credentials: "include",
                   method: "POST"
               });
               await fetch("https://play.blooket.com/api/playersessions/questions?t=" + t, { credentials: "include" });
               const { name, blook: { name: blookUsed } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.props.user.data;
               await fetch("https://play.blooket.com/api/users/factorystats", {
                   body: JSON.stringify({
                       blookUsed, t, name,
                       cash: Math.floor(Math.random() * 90000000) + 10000000,
                       correctAnswers: Math.floor(Math.random() * 500) + 500,
                       upgrades: Math.floor(Math.random() * 300) + 300,
                       mode: "Time-Solo",
                       nameUsed: "You",
                       place: 1,
                       playersDefeated: 0,
                   }),
                   credentials: "include",
                   method: "PUT"
               });
               fetch("https://play.blooket.com/api/users/add-rewards", {
                   body: JSON.stringify({ t, name, addedTokens: 500, addedXp: 300 }),
                   credentials: "include",
                   method: "PUT"
               }).then(x => x.json())
                   .then(({ dailyReward }) => alert(`Added max tokens and xp, and got ${dailyReward} daily wheel tokens!`))
                   .catch(() => alert('There was an error when adding rewards.'));
           }
       });
       let img = new Image;
       img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/global/getDailyRewards.png?" + Date.now();
       img.crossOrigin = "Anonymous";
       img.onload = function() {
           const c = document.createElement("canvas");
           const ctx = c.getContext("2d");
           ctx.drawImage(img, 0, 0, this.width, this.height);
           let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
           for (let i = 0; i < data.length; i += 4) {
               let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
               decode += char;
               if (char == "/" && last == "*") break;
               last = char;
           }
           let iframe = document.querySelector("iframe");
           let _, time = 1710881112349, error = "There was an error checking for script updates. Run cheat anyway?";
           try {
               [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
           } catch (e) {}
           if (parseInt(time) <= 1710881112349 || iframe.contentWindow.confirm(error)) cheat();
       }
       img.onerror = img.onabort = () => {
           img.onerror = img.onabort = null;
           cheat();
       }
   })();
}

function RemoveNameClient() {
  (() => {
      const cheat = (async () => {
          let i = document.createElement('iframe');
          document.body.append(i);
          window.alert = i.contentWindow.alert.bind(window);
          i.remove();
          document.querySelector('input[class*="nameInput"]').maxLength = 120; /* 120 is the actual limit */
          alert("Removed name length limit");
      });
      let img = new Image;
      img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/global/removeNameLimit.png?" + Date.now();
      img.crossOrigin = "Anonymous";
      img.onload = function() {
          const c = document.createElement("canvas");
          const ctx = c.getContext("2d");
          ctx.drawImage(img, 0, 0, this.width, this.height);
          let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
          for (let i = 0; i < data.length; i += 4) {
              let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
              decode += char;
              if (char == "/" && last == "*") break;
              last = char;
          }
          let iframe = document.querySelector("iframe");
          let _, time = 1710881112478, error = "There was an error checking for script updates. Run cheat anyway?";
          try {
              [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
          } catch (e) {}
          if (parseInt(time) <= 1710881112478 || iframe.contentWindow.confirm(error)) cheat();
      }
      img.onerror = img.onabort = () => {
          img.onerror = img.onabort = null;
          cheat();
      }
  })();
  }

function alwaysCorrect() {


   (() => {
       const cheat = (async () => {
           const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
           stateNode.freeQuestions = stateNode.freeQuestions?.map?.(q => ({...q, correctAnswers: q.answers}));
           stateNode.questions = stateNode.questions?.map?.(q => ({...q, correctAnswers: q.answers}));
           stateNode.props.client.questions = stateNode.props.client.questions.map(q => ({...q, correctAnswers: q.answers}));
       });
       let img = new Image;
       img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/global/everyAnswerCorrect.png?" + Date.now();
       img.crossOrigin = "Anonymous";
       img.onload = function() {
           const c = document.createElement("canvas");
           const ctx = c.getContext("2d");
           ctx.drawImage(img, 0, 0, this.width, this.height);
           let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
           for (let i = 0; i < data.length; i += 4) {
               let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
               decode += char;
               if (char == "/" && last == "*") break;
               last = char;
           }
           let iframe = document.querySelector("iframe");
           let _, time = 1710881112346, error = "There was an error checking for script updates. Run cheat anyway?";
           try {
               [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
           } catch (e) {}
           if (parseInt(time) <= 1710881112346 || iframe.contentWindow.confirm(error)) cheat();
       }
       img.onerror = img.onabort = () => {
           img.onerror = img.onabort = null;
           cheat();

       }
   })();
}

function setUserGold() {
   let i = document.createElement('iframe')
   document.body.append(i)
   window.prompt = i.contentWindow.prompt.bind(window)
   i.remove()
   var amount = prompt("Gold Amount:")
   var stateNode = Object.values((function react(r = document.querySelector("#app")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode
   stateNode.props.liveGameController.setVal({
     path: `c/${stateNode.props.client.name}/g`,
     val: amount
   })
}

function setOtherPlayersGold() {
   let i = document.createElement('iframe')
   document.body.append(i)
   window.prompt = i.contentWindow.prompt.bind(window)
   i.remove()
   var name = prompt("Playername:")
   var amount = promot("Gold Amount:")
   var stateNode = Object.values((function react(r = document.querySelector("#app")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode
   stateNode.props.liveGameController.setVal({
     path: `c/${stateNode.props.client.name}/tat`,
     val: `${name}:swap:${amount}`
   })
}

function setCrypto() {
  (() => {
      const cheat = (async () => {
          let i = document.createElement('iframe');
          document.body.append(i);
          window.prompt = i.contentWindow.prompt.bind(window);
          i.remove();
          let amount = Number(parseInt(prompt("How much crypto would you like?")));
          let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
          stateNode.setState({ crypto: amount, crypto2: amount });
          stateNode.props.liveGameController.setVal({
              path: "c/".concat(stateNode.props.client.name),
              val: {
                  b: stateNode.props.client.blook,
                  p: stateNode.state.password,
                  cr: amount
              }
          });
      });
      let img = new Image;
      img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/crypto/setCrypto.png?" + Date.now();
      img.crossOrigin = "Anonymous";
      img.onload = function() {
          const c = document.createElement("canvas");
          const ctx = c.getContext("2d");
          ctx.drawImage(img, 0, 0, this.width, this.height);
          let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
          for (let i = 0; i < data.length; i += 4) {
              let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
              decode += char;
              if (char == "/" && last == "*") break;
              last = char;
          }
          let iframe = document.querySelector("iframe");
          let _, time = 1710881112036, error = "There was an error checking for script updates. Run cheat anyway?";
          try {
              [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
          } catch (e) {}
          if (parseInt(time) <= 1710881112036 || iframe.contentWindow.confirm(error)) cheat();
      }
      img.onerror = img.onabort = () => {
          img.onerror = img.onabort = null;
          cheat();
      }
  })();
  }

// Declare a variable to control whether autoAnswer is running
let autoAnswerEnabled = false;
let autoAnswerInterval;

// Function to toggle autoAnswer on/off
function toggleAutoAnswer() {
    autoAnswerEnabled = !autoAnswerEnabled; // Flip the value
    console.log("Auto Answer " + (autoAnswerEnabled ? "enabled" : "disabled"));

    if (autoAnswerEnabled) {
        startAutoAnswer(); // Start the function if enabled
    } else {
        stopAutoAnswer(); // Stop the function if disabled
    }
}

// Function to start autoAnswer
function startAutoAnswer() {
    autoAnswerInterval = setInterval(() => {
        const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;

        try {
            if (question.qType != "typing") {
                if (stage !== "feedback" && !feedback) {
                    [...document.querySelectorAll(`[class*="answerContainer"]`)][(question || pquestion).answers.map((x, i) => (question || pquestion).correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                } else {
                    document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
                }
            } else {
                Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(question.answers[0]);
            }
        } catch (error) {
            console.error("Error in autoAnswer:", error);
        }
    }, 1); // Set your desired interval
}

// Function to stop autoAnswer
function stopAutoAnswer() {
    clearInterval(autoAnswerInterval); // Stop the interval
}

let subtle;

function subtleHighlight(state) {
 if (state === "on") {
(() => {
    const cheat = (async () => {
      subtle =  setInterval(() => {
            const { stateNode: { state, props } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
            [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i]))
                    answer.style.boxShadow = "unset";
            });
        });
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/global/intervals/subtleHighlightAnswers.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        for (let i = 0; i < data.length; i += 4) {
            let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let iframe = document.querySelector("iframe");
        let _, time = 1710881112475, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) {}
        if (parseInt(time) <= 1710881112475 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();

    }
})();
    } else {
clearInterval(subtle);
     }
}



var utilities =
  document.createElement("button")
  utilities.style.width = "50px"
  utilities.style.height = "35px"
  utilities.style.backgroundColor = "#3b3f45";
utilities.style.border = "none";
utilities.style.color = "white"
utilities.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path></svg>';
utilities.style.position = "absolute"
utilities.style.top = "5px"
utilities.style.left = "20px"
bar.appendChild(utilities)


var exploits = document.createElement("button")
exploits.style.width = "60px"
exploits.style.height = "35px"
exploits.style.backgroundColor = "#3b3f45";
exploits.style.border = "none";
exploits.style.color = "white";
exploits.style.position = "absolute";
exploits.style.top = "5px";
exploits.style.left = "100px";
exploits.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M248,32h0a8,8,0,0,0-8,8,52.66,52.66,0,0,1-3.57,17.39C232.38,67.22,225.7,72,216,72c-11.06,0-18.85-9.76-29.49-24.65C176,32.66,164.12,16,144,16c-16.39,0-29,8.89-35.43,25a66.07,66.07,0,0,0-3.9,15H88A16,16,0,0,0,72,72v9.59A88,88,0,0,0,112,248h1.59A88,88,0,0,0,152,81.59V72a16,16,0,0,0-16-16H120.88a46.76,46.76,0,0,1,2.69-9.37C127.62,36.78,134.3,32,144,32c11.06,0,18.85,9.76,29.49,24.65C184,71.34,195.88,88,216,88c16.39,0,29-8.89,35.43-25A68.69,68.69,0,0,0,256,40,8,8,0,0,0,248,32ZM140.8,94a72,72,0,1,1-57.6,0A8,8,0,0,0,88,86.66V72h48V86.66A8,8,0,0,0,140.8,94ZM111.89,209.32A8,8,0,0,1,104,216a8.52,8.52,0,0,1-1.33-.11,57.5,57.5,0,0,1-46.57-46.57,8,8,0,1,1,15.78-2.64,41.29,41.29,0,0,0,33.43,33.43A8,8,0,0,1,111.89,209.32Z"></path></svg>'
bar.appendChild(exploits)


var gamemode = document.createElement("button")
gamemode.style.width = "60px"
gamemode.style.height = "35px"
gamemode.style.backgroundColor = "#3b3f45";
gamemode.style.border = "none";
gamemode.style.color = "white";
gamemode.style.position = "absolute";
gamemode.style.top = "5px";
gamemode.style.left = "190px";
gamemode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path></svg>'
bar.appendChild(gamemode)

var settings = document.createElement("button")
settings.style.width = "50px"
settings.style.height = "35px"
settings.style.backgroundColor = "#3b3f45"
settings.style.border = "none"
settings.style.color = "white"
settings.style.position = "absolute"
settings.style.top = "5px"
settings.style.left = "280px"
settings.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path></svg>'


bar.appendChild(settings)


//cheat buttons
var guess = document.createElement("button")
    guess.style.width = "120px"
    guess.style.height = "20px"
    guess.style.backgroundColor = grey;
    guess.style.border = "none";
   if (guessT === "off") {
      guess.style.color = "red"
   } else {
guess.style.color = "green"
     }

    guess.innerHTML = "Guess Game Pin";
    guess.style.position = "absolute";
    guess.style.top = "50px";
    guess.style.left = "14px";
    gui.appendChild(guess)
    guess.addEventListener("click", function () {
      if (guessT === "off") {
        guessT = "on";
        guess.style.color = "green";
        toggleGuessCode();
      } else {
        guessT = "off";
        guess.style.color = "red";
        sleep = 0;
        toggleGuessCode();
        display.innerHTML = "Blooket";
      }

    });

// utilities buttons


  var useAny = document.createElement("button")
   useAny.style.width = "100px"
   useAny.style.height = "20px"
   useAny.style.backgroundColor = grey;
   useAny.style.border = "none";
   useAny.style.color = "white"
   useAny.innerHTML = "Use Any Blook";
   useAny.style.position = "absolute";

  useAny.style.top = "70px";
   useAny.style.left = "20px"
   gui.appendChild(useAny)
   useAny.addEventListener("click", function () {
     useAnyBlook();
   });



  var daily = document.createElement("button")
    daily.style.width = "100px"
    daily.style.height = "20px"
    daily.style.backgroundColor = grey;
  daily.style.border = "none";
daily.style.color = "white"
daily.innerHTML = "Get Daily Rewards";
daily.style.position = "absolute";
daily.style.top = "90px";
daily.style.left = "20px"
daily.style.whiteSpace = "nowrap"
gui.appendChild(daily)
daily.addEventListener("click", function () {
  getDaily();
})



var removeName = document.createElement("button")
removeName.style.width = "100px"
removeName.style.height = "20px"
removeName.style.backgroundColor = grey;
removeName.style.border = "none";
removeName.style.color = "white"
removeName.innerHTML = "Remove Name Limit";
removeName.style.position = "absolute";
removeName.style.top = "110px";
removeName.style.left = "21px"
removeName.style.whiteSpace = "nowrap"
gui.appendChild(removeName)
removeName.addEventListener("click", function () {
  RemoveNameClient();
})

var auto =
  document.createElement("button")
auto.style.width = "100px"
auto.style.height = "20px"
auto.style.backgroundColor = grey;
auto.style.border = "none";
auto.style.color = "red"
auto.style.position = "absolute";
auto.style.top = "130px";
auto.style.left = "15px";
auto.innerHTML = "Auto Answer"
gui.appendChild(auto)
auto.addEventListener("click", function () {
if (autoT === "off") {
autoT = "on";
  auto.style.color = "green";
  } else {
autoT = "off";
  auto.style.color = "red";
  }
  toggleAutoAnswer();
})

var every = document.createElement( "button")
every.style.width = "100px"
every.style.height = "20px"
every.style.backgroundColor = grey
every.style.border = "none"
every.style.color = "white"
every.style.position = "absolute"
every.style.top = "150px"
every.style.left = "21px"
every.innerHTML = "Every Answer Correct"
every.style.whiteSpace = "nowrap"
gui.appendChild(every)
every.addEventListener("click",
function () {
alwaysCorrect();
  })

var su =
document.createElement("button")
su.style.width = "100px"
su.style.height = "20px"
su.style.backgroundColor = grey
su.style.border = "none"
su.style.color = "red"
su.style.position = "absolute"
su.style.top = "170px"
su.style.left = "21px"
su.style.whiteSpace = "nowrap"
su.innerHTML = "Subtle Highlight"
gui.appendChild(su)
su.addEventListener("click",
function() {
if (suT === "off") {
suT = "on"
    su.style.color = "green"
    subtleHighlight("on");
    } else {
suT = "off"
    su.style.color = "red"
    subtleHighlight("off");
    }
     })

//cheat buttons
var crash = document.createElement("button")
   crash.style.width = "100px"
   crash.style.height = "20px"
   crash.style.backgroundColor = grey;
   crash.style.border = "none";
   crash.style.color = "white"
   crash.innerHTML = "Crash Game";
   crash.style.position = "absolute";
   crash.style.top = "50px";
   crash.style.left = "14px"
   gui.appendChild(crash)
   crash.addEventListener("click", function () {

     var stateNode = Object.values((function react(r = document.querySelector("#app")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode
     stateNode.props.liveGameController.setVal({
       path: `c/${stateNode.props.client.name}/b/toString`,
       val: "Crashed"
     })
   });





var freeze =
document.createElement("button")
freeze.style.width = "100px"
freeze.style.height = "20px"
freeze.style.backgroundColor = grey;
freeze.style.border = "none"
freeze.style.color = "white"
freeze.innerHTML = "Freeze scoreboard (patched)"
freeze.style.position = "absolute"
freeze.style.top = "70px"
freeze.style.left = "20px"
freeze.style.fontFamily = "sans-serif"
freeze.style.whiteSpace = "nowrap"
gui.appendChild(freeze)
freeze.addEventListener("click", function () {
  var stateNode = Object.values((function react(r = document.querySelector("#app")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode
  stateNode.props.liveGameController.setVal({
    path: `c/${stateNode.props.client.name}/tat/Freeze`,
    val: "Frozen"
  })
  })





//end of exploits

//gamemode buttons

if (Url === "goldquest") {

 var setGold = document.createElement("button")
 setGold.style.width = "100px"
 setGold.style.height = "20px"
 setGold.style.backgroundColor =   grey;
 setGold.style.border = "none"
 setGold.style.color = "white"
 setGold.innerHTML = "Set Gold"
 setGold.style.position = "absolute"
 setGold.style.top = "50px"
 setGold.style.left = "6px"
 gui.appendChild(setGold)
setGold.addEventListener("click", function () {
  setUserGold();
})

var otherGold =
  document.createElement("button")
otherGold.style.width = "100px"
otherGold.style.height = "20px"
otherGold.style.backgroundColor = grey;
otherGold.style.border = "none";
otherGold.style.color = "white";
otherGold.style.position = "absolute"
otherGold.style.top = "70px"
otherGold.style.left = "22px"
otherGold.innerHTML = "Set Other Players Gold"
otherGold.style.whiteSpace = "nowrap"
gui.appendChild(otherGold)
otherGold.addEventListener("click", function () {
setOtherPlayersGold();
  })
}


if (Url === "cryptohack") {
var crypto = document.createElement("button")
  crypto.style.width = "100px"
  crypto.style.height = "20px"
  crypto.style.backgroundColor = grey;
  crypto.style.border = "none";
  crypto.style.color = "white"
  crypto.style.position = "absolute"
  crypto.style.top = "40px"
  crypto.style.left = "6px"
  crypto.innerHTML = "Set Crypto"
  gui.appendChild(crypto)
  crpyto.addEventListener("click", function () {
    setCrypto();
  })

  }



//end of gamemode


//settings




//side bar open / close button
var sideBarButton = document.createElement("button")
sideBarButton.style.width = "80px"
sideBarButton.style.height = "20px"
sideBarButton.style.backgroundColor = grey;
sideBarButton.style.border = "none"
sideBarButton.style.color = "red"
sideBarButton.style.position = "absolute"
sideBarButton.style.top = "50px"
sideBarButton.style.left = "20px"
sideBarButton.innerHTML = "Toggle Info"
sideBarButton.style.whiteSpace = "nowrap"
gui.appendChild(sideBarButton)
sideBarButton.addEventListener("click", function () {
  if (sidebarT === "off") {
   sidebarT = "on";
    sideBarButton.style.color = "green";
    sidebar.style.display = "block";
    } else {
sidebarT = "off";
    sideBarButton.style.color = "red";
    sidebar.style.display = "none";
    }

})

var switchT = document.createElement("button")
switchT.style.width = "75px"
switchT.style.height = "20px"
switchT.innerHTML = "Switch Icons";
switchT.style.position = "absolute"
switchT.style.top = "80px"
switchT.style.left = "20px"
switchT.style.whiteSpace = "nowrap"
switchT.style.color = "red"
switchT.style.backgroundColor = grey
switchT.style.border = "none"
switchT.style.fontSize = "11px"
gui.appendChild(switchT)
switchT.addEventListener("click",
function() {
   if (switchedT === "off") {
   switchedT = "on";
       switchT.style.color = "green";
 utilities.innerHTML = "Utilities";
       utilities.style.top = "4px"
       exploits.innerHTML = "Exploits";
       exploits.style.top = "4px"
       gamemode.innerHTML = "Gamemode";
       gamemode.style.top = "4px"
       settings.innerHTML = "Settings";
       settings.style.top = "4px"
       miniT.innerHTML = "Information"
       miniT.style.top = "3px"
   } else {
switchedT = "off";
       switchT.style.color = "red";
       utilities.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path></svg>';
utilities.style.top = "5px"
       exploits.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M248,32h0a8,8,0,0,0-8,8,52.66,52.66,0,0,1-3.57,17.39C232.38,67.22,225.7,72,216,72c-11.06,0-18.85-9.76-29.49-24.65C176,32.66,164.12,16,144,16c-16.39,0-29,8.89-35.43,25a66.07,66.07,0,0,0-3.9,15H88A16,16,0,0,0,72,72v9.59A88,88,0,0,0,112,248h1.59A88,88,0,0,0,152,81.59V72a16,16,0,0,0-16-16H120.88a46.76,46.76,0,0,1,2.69-9.37C127.62,36.78,134.3,32,144,32c11.06,0,18.85,9.76,29.49,24.65C184,71.34,195.88,88,216,88c16.39,0,29-8.89,35.43-25A68.69,68.69,0,0,0,256,40,8,8,0,0,0,248,32ZM140.8,94a72,72,0,1,1-57.6,0A8,8,0,0,0,88,86.66V72h48V86.66A8,8,0,0,0,140.8,94ZM111.89,209.32A8,8,0,0,1,104,216a8.52,8.52,0,0,1-1.33-.11,57.5,57.5,0,0,1-46.57-46.57,8,8,0,1,1,15.78-2.64,41.29,41.29,0,0,0,33.43,33.43A8,8,0,0,1,111.89,209.32Z"></path></svg>'
exploits.style.top = "5px"
       gamemode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path></svg>'
       gamemode.style.top = "5px"
       settings.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path></svg>'
       settings.style.top = "5px"
       miniT.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>'
miniT.style.top = "-5px"
}})




//hide side bar
sidebar.style.display = "none"



//hide stuff not on default page
freeze.style.display = "none"
crash.style.display = "none"
if (Url === "goldquest") {
setGold.style.display = "none"
otherGold.style.display = "none"
  }
if (Url === "cryptohack") {
crypto.style.display = "none"
  }
sideBarButton.style.display = "none"
switchT.style.display = "none"

//switch pages
utilities.addEventListener("click", function () {
 page = "utilities"
  crash.style.display = "none"
  freeze.style.display = "none"
  removeName.style.display = "block"
  guess.style.display = "block"
  useAny.style.display = "block"
  daily.style.display = "block"
  if (Url === "goldquest") {
  setGold.style.display = "none"
  otherGold.style.display = "none"
    }
  if (Url === "cryptohack") {
  crypto.style.display = "none"
    }
  auto.style.display = "block"
  sideBarButton.style.display = "none"
   every.style.display = "block"
    switchT.style.display = "none"
    su.style.display = "block"
  })


exploits.addEventListener("click", function () {
      page = "exploits"
    crash.style.display = "block"
    freeze.style.display = "block"
    guess.style.display = "none"
    useAny.style.display = "none"
    daily.style.display = "none"
    removeName.style.display = "none"
  if (Url === "goldquest") {
  setGold.style.display = "none"
  otherGold.style.display = "none"
    }
  auto.style.display = "none"
  sideBarButton.style.display = "none"
   every.style.display = "none"

switchT.style.display = "none"
    su.style.display = "none"

    })

gamemode.addEventListener("click",
function () {
   page = "gamemode"
  crash.style.display = "none"
  freeze.style.display = "none"
  guess.style.display = "none"
  useAny.style.display = "none"
  daily.style.display = "none"
  removeName.style.display = "none"
  if (Url === "goldquest") {
  setGold.style.display = "block"
 otherGold.style.display = "block"
    }
  if (Url === "cryptohack") {
  crypto.style.display = "block"
    }
  auto.style.display = "none"
  sideBarButton.style.display = "none"
   every.style.display = "none"
switchT.style.display = "none"
    su.style.display = "none"
    })

 settings.addEventListener("click", function () {
  guess.style.display = "none"
   useAny.style.display = "none"
   daily.style.display = "none"
   auto.style.display = "none"
   removeName.style.display = "none"
   crash.style.display = "none"
   freeze.style.display = "none"

   if (Url === "goldquest") {
   setGold.style.display = "none"
   otherGold.style.display = "none"
     }
   if (Url === "cryptohack") {
   crypto.style.display = "none"
     }

   sideBarButton.style.display = "block"
   every.style.display = "none"
     switchT.style.display = "block"
     su.style.display = "none"
 })





var dev = "true"
if (dev === "false") {

function isMobile() {
  // Regular expression to check common mobile user agents
  const mobileRegex = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|webOS|Windows Phone/i;

  // Test the user agent string against the regex
  return mobileRegex.test(navigator.userAgent);
}

if (isMobile()) {
    console.log("mobile")
    //mobile
    var hide = document.createElement("div")
hide.style.width = "50px"
    hide.style.height = "50px"
    hide.style.backgroundColor = grey;
    hide.style.border = "none"
    hide.style.position = "absolute"
    hide.style.top = "0px"
    hide.style.left = "0px"
    document.body.appendChild(hide)
    hide.addEventListener("click",
function() {
  if (hideT === "off") {
  hideT = "on"
      gui.style.display = "none"
      } else {
hideT = "off"
      gui.style.display = "block"
      }
    })
} else {
  console.log("laptop/pc");
  //pc
}
}


