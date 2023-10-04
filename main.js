import './style.css'
import axios from 'axios';


const url = 'https://dog.ceo/api/breeds/image/random';

const getDog = async()=> {
  return await axios.get(url).then(response => {
    let image = response.data.message;
    document.getElementById("image").setAttribute("src", image);


  })
}

getDog();


document.querySelector('#app').innerHTML = `
<h1> Using Axios in Vite Js</h1>

<h2> Random dog</h2>

<button class="bnt" onclick="getDog()">Generate</button>
<br></br>
<br></br>

<img id="image" src="" alt="Dog" width="350" height="350"   />

`

window.getDog = getDog;