function hello() {
  var a = 2; // limite la portée à la fonction
  if (false) {
    let b = 2; // limite la portée à un bloc
    const c = 3
  }

  console.log(a);
  console.log(b);
}

hello();
// console.log(a);
