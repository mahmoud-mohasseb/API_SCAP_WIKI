const statesElement = document.querySelector('#states');
const flag = document.getElementById('flag');

let text = [];
let images = [];

console.log(images);
async function renderData() {
  const response = await fetch('/api/population');
  // fetching and transforming response to json
  const states = await response.json();
  //   console.log(states);
  states.forEach((state, index) => {
    const optionElement = document.createElement('option');
    // console.log(optionElement);
    // console.log(JSON.stringify(state.imagesrc));

    // flagsin.forEach((img) => {
    //   var image = document.createElement('img');
    //   image.src = img;
    // });

    images.push(state.imagesrc);
    text.push(state.PopulationChange18_19);
    // console.log(index);

    optionElement.setAttribute('value', state.name);
    optionElement.textContent = state.name;
    statesElement.append(optionElement);

    // flag.src(state.imagesrc);
    // console.log(state.name);
    // console.log(state.imagesrc);
  });

  document.getElementById('demo').innerHTML = text.length;
  console.log(text.length);
  for (var i = 0; i < text.length; i++) {
    var div = document.createElement('div');
    div.className = 'text';
    div.innerHTML = text[i];
    document.body.appendChild(div);
  }

  //countries
  for (var i = 0; i < images.length; i++) {
    var img = document.createElement('img');
    img.className = 'img';
    console.log(img);
    img.src = images[i];
    document.body.appendChild(img);
  }
}
renderData();

// const getFlagpop = () => {
//   var data = document.getElementById('data');
//   data.style.color = 'red';
//   console.log('mahmoud');
//    renderData();
//   // states.forEach(state => {
//   //     console.log(state);
//   // });
// };
