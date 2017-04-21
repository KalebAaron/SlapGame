var health = 100;
var name = "The Monkey";
var hits = 0;
function hand() {
  health = health - 1;
  update();
}
function belt() {
  health = health - 5;
  update();
}
function paddle() {
  health = health - 10;
  update();
}
function update() {
  document.getElementById('healthBar').innerHTML = health;
}
function hitNumber() {
  hits = hits + 1;
  hitCount()
}
function hitCount() {
  document.getElementById('hits').innerHTML = hits;
}
function atZero() {
  if (health == 0) {
    document.getElementById('mainPhoto').innerHTML = <img src="assets/images/deadmonkey.svg">
      }
}