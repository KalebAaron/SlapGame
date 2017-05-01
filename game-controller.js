function GameController() {


  var service = new GameService()

  this.onAttackClick = function attack(targetName, type) {
    service.processAttack(targetName, type)
    update(service.getTarget(targetName))

  }

function update(target) {
  if(target.name=="The Monkey"){
   document.getElementById('healthBar').innerHTML = target.health;
   document.getElementById('hits').innerHTML = target.hits  
  }
  else if(target.name=="Peanut"){
    document.getElementById('healthBarTwo').innerHTML = target.health;
   document.getElementById('hitsTwo').innerHTML = target.hits
  } 
 }

this.giveItem = function getItem(targetName, itemName){
  service.processItem(targetName, itemName)
}

}
var gameController = new GameController()