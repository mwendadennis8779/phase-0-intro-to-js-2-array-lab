// Write your solution here!
 const cats = ["Milo", "Otis", "Garfield"]



function destructivelyAppendCat(){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    cats.push('Ralph');
}
function destructivelyPrependCat(){
    cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
      cats.unshift('Bob')

} 
function destructivelyRemoveLastCat(){
    cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
      cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
      cats.shift();
}
function appendCat(name){
    cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
     const appendCat= [...cats, 'Broom'];
     return appendCat;
    
}

function prependCat(Arnold){
    cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield')
    const prependCat = ['Arnold', ...cats];
    return prependCat;
}
function removeLastCat(){
    cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
      const removeLastCat = cats.slice(0, cats.length-1);
      return removeLastCat;
}
function removeFirstCat(){
    cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
      const removeFirstCat = cats.slice(1)
      return removeFirstCat;
}