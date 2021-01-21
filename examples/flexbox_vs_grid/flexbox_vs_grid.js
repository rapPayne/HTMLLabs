
export function sayHello() {
  console.log('worked')
}

export function makeBoxes(howMany) {
  const boxes = [];
  for (let i=0 ; i<howMany ; i++ ) {
    const newDiv = document.createElement('div');
    boxes.push(newDiv);
  }
  return boxes;
}