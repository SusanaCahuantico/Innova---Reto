const container = document.getElementById('container');

const dataJSON = () => {
    // fetch('https://raw.githubusercontent.com/SusanaCahuantico/LIM009-DL-2.0/master/src/data/potter.json')
    fetch('https://pokeapi.co/docs/v2.html/#pokemon-section')
      .then(res => res.json())
      .then(datos => {
        console.log(datos);
        dataJSON()
      });
  };
//  dataJSON();