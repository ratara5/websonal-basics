const books = [
  {
    id: 1,
    name: 'Electrical Engineering',
    description: 'Electricity, Instalations, Dessign',
    shape:{
      backgroundColor:'red',
      height:'40%'
    }
  },
  {
    id: 2,
    name: 'Grapical Design',
    description: 'Color, Shapes, Content',
    shape:{
      backgroundColor:'blue',
      height:'40%'
    }
  },
  {
    id: 3,
    name: 'Spirituality',
    description: 'God, Bible, Ministry',
    shape:{
      backgroundColor:'purple',
      height:'50%'
    }
  },
  {
    id: 4,
    name: 'Teaching',
    description: 'Maths, Phisycs, Education',
    shape:{
      backgroundColor:'green',
      height:'45%'
    }
  },
  {
    id: 5,
    name: 'Health',
    description: 'Cardiovascular, Digestive, Skin',
    shape:{
      backgroundColor:'lightblue',
      height:'30%'
    }
  },
  {
    id: 6,
    name: 'Soccer',
    description: 'World Championship, Chelsea, Fresstyle',
    shape:{
      backgroundColor:'orange',
      height:'25%'
    }
  },
  {
    id: 7,
    name: 'Clothes',
    description: 'Elegant, Blue, Shoes',
    shape:{
      backgroundColor:'gray',
      height:'25%'
    }
  },
  {
    id: 8,
    name: 'Cats',
    description: 'Miel, Black, Houses',
    shape:{
      backgroundColor:'lightgreen',
      height:'35%'
    }
  },
  {
    id: 9,
    name: 'Family',
    description: 'Parents, Brothers, Travels',
    shape:{
      backgroundColor:'yellow',
      height:'50%'
    }
  },
  {
    id: 10,
    name: 'Food',
    description: 'Cook, Dinner, Pie',
    shape:{
      backgroundColor:'pink',
      height:'50%'
    }
  }
];

function getBooks(books) {
  //const uls=document.getElementsByTagName("ul"); //TODO: Ir llenando según la cantidad de libros que quepan por stand
  const uls = document.getElementsByTagName('ul');
  output = '';
  books.forEach((book) => {
    output += `<li style="height:${book.shape.height}; background-color:${book.shape.backgroundColor};" id=${book.id}><a>${book.name}</a></li>`;
    position = book.id - 1;
    //TODO: Ir llenando según la cantidad de libros que quepan por stand
  });
  uls[0].innerHTML = output;
}

getBooks(books);

function getBookDescription(books) {
  const as = document.getElementsByTagName('a');
  const desktop = document.getElementsByClassName('desktop');
  arrayAs = Array.from(as);
  arrayAs.forEach((a, i) => {
    //desktop.innerHTML='';
    a.addEventListener('click', () => {
      desktop[0].innerHTML = `<div style="background-color:${books[i].shape.backgroundColor}">${books[i].description}</div>`;
    });
  });
}

getBookDescription(books);
