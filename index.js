// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase()=== name.toLowerCase());
};
console.log (findMatching(drivers,"Bobby"));
console.log (findMatching(drivers,"anne"));
console.log (findMatching(drivers,"sally"));

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
}
console.log (fuzzyMatch(drivers,"bobby"));

function matchName(drivers, name){
return drivers.filter(driver => driver.name === name);
};
console.log(matchName(drivers,"Annette"));


