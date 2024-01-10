


import reactImg from '../assets/react-core-concepts.png';
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}



export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];
  
    return (<>
    <header>
      <p><img src={reactImg}/></p>
      <p>{description} text</p>
    </header>
    </>)
  }