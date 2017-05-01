function GameService() {

  function TargetMaker(name, health, hand, belt, paddle) {
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

  this.getTarget = function getTarget(name) {
    if (name == monkey.name) {
      return monkey
    }
    else if (name == peanut.name) {
      return peanut
    }
  }


  this.processAttack = function attack(targetName, type) {
      var target = this.getTarget(targetName)
      if(!target){
        alert("ERROR")
      }
      
      var totalMod = calcMods(target)
      target.health -= target[type] * totalMod
      target.hits ++
    }

    function calcMods(target){
      var totalMods = 1
      for (var i = 0; i < target.items.length; i++) {
        var item = target.items[i];
        totalMods -= item.modifier
      }
      return totalMods
    }


 function ItemMaker(name, modifier, description){
 this.name = name
 this.modifier = modifier
 this.description = description
 }

 var items = {
   shield: new ItemMaker('Sheild', 0.5, "Use Protection!"),
   helmet: new ItemMaker('Helmet', 0.3, 'Watch your dome!'),
   banana: new ItemMaker('Banana', 0.7, 'Get your stamina up!'),
 }

 this.processItem = function(targetName, itemName){
   var target = this.getTarget(targetName)
   if(!target){
     alert("ERROR")
   }
   target.items.push(items[itemName])
   console.log(target)
 }


  }