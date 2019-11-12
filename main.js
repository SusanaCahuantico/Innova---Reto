const container = document.getElementById('container');

const dataJSON = () => {
    // fetch('https://raw.githubusercontent.com/SusanaCahuantico/LIM009-DL-2.0/master/src/data/potter.json')
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(data => {
          console.log(data)
      })
      };
  dataJSON();