// var health = 100;
// var name = "The Monkey";
// var hits = 0;

function TargetMaker(name, health, hand, belt, paddle){
this.name = name
this.health = health
this.hits = 0
this.hand = hand
this.belt = belt
this.paddle = paddle
this.items = []
}

var monkey = new TargetMaker("The Monkey", 100, 1, 5, 10)
var peanut = new TargetMaker("Peanut", 75, 2, 10, 20)

function attack(target, type){
  target.health -= target[type]
  update(target)
  
}

function ItemMaker(name, modifier, description){
this.name = name
this.modifier = modifier
this.description = description
}

var items = {
  sheild: new ItemMaker('Sheild', 0.5, "Use Protection!"),
  helmet: new ItemMaker('Helmet', 0.3, 'Watch your dome!'),
  banana: new ItemMaker('Banana', 0.7, 'Get your stamina up!'),
}

function giveItem(target, itemName){
  target.items.push(items[itemName])
  console.log(target)
}

// function hand(target) {
//   target.health -= 1;
//   update(target);
// }
// function belt(target) {
//   target.health -= 5;
//   update(target);
// }
// function paddle(target) {
//   target.health -= 10;
//   update(target);
// }
function update(target) {
  document.getElementById('healthBar').innerHTML = target.health;
}
function hitNumber(target) {
  target.hits += 1;
  hitCount(target)
}
function hitCount(target) {
  document.getElementById('hits').innerHTML = target.hits;
}
