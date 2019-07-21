function Fighter(obj){
    let _name = obj.name;
    let _damage = obj.damage;
    let _hp = obj.hp;
    let _agility = obj.agility;
    let losses = 0;
    let wins = 0;
  
          this.getName = function(){
              return _name; 
}
          this.getDamage = function(){
              return _damage; 
}
          this.getAgility = function(){
              return _agility; 
}
          this.getHealth = function(){
              return _hp; 
}
          this.attack = function(fighter) {
            const maxChance = 100;
            let probability = maxChance - fighter.getAgility();
            let chance = Math.floor(Math.random() * (maxChance + 1));
                if (chance <= probability) {
                  fighter.dealDamage(_damage);
                  return `${_name} make ${_damage} damage to ${fighter.getName()}`;
                 } else {
                      return `${_name} attack missed`;
                  }
            }
             this.dealDamage = function(amountDmg) {
                if (_hp - amountDmg < 0) {
                  _hp = 0;
                } else {
                    _hp = _hp - amountDmg;
                }
                return _hp;
              }
              this.logCombatHistory =function() {
                  return `Name: ${_name}, Wins: ${wins}, Losses: ${losses}`;
              }
              this.heal = function(amountHp) {
                  if (_hp + amountHp > obj.hp) {
                    _hp = obj.hp;
                    } else {
                   _hp = _hp + amountHp;
                      }
                return _hp;
              }
              this.addWin = function() {
                  ++wins;
              }
  
              this.addLoss = function() {
                  ++losses;
              }         
  
   }
  
   function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
      console.log(`${fighter1.getName()} is dead and can't fight`);
    } else if (fighter2.getHealth() === 0) {
      console.log(`${fighter2.getName()} is dead and can't fight`);
    }
  
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      console.log(fighter1.attack(fighter2));
      if (fighter2.getHealth() > 0) {
        console.log(fighter2.attack(fighter1));
      }
    }
  
    if (fighter1.getHealth() === 0) {
      fighter1.addLoss();
      fighter2.addWin();
    } else if (fighter2.getHealth() === 0) {
      fighter2.addLoss();
      fighter1.addWin();
    }
  }
  const fighter1 = new Fighter({name: 'John',damage: 20,hp: 100,agility: 25});
  const fighter2 = new Fighter({name: 'Jim',damage: 10,hp: 120,agility: 40});
  battle(fighter1,fighter2);