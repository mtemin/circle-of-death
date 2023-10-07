let people = [];
function totalPeople(number){
    for(let i=1; i<=number; i++){
        people.push(i);
    }
    return people;
};
totalPeople(100); //input for how many people will attend in the game


function circleOfDeath(people){
  while(people.length > 1){
    for(let i = 1; i <= people.length; i++){
      if(i === people.length - 1){
        people.splice(0, 1);

      }else{
        people.splice(i+1, 1);

      }
    }
  }
  console.log(people);
}
circleOfDeath(totalPeople());
