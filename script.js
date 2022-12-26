const books = [
  {
    id: 1,
    name: 'Electrical Engineering',
    description: 'Electricity, Instalations, Dessign',
  },
  {
    id: 2,
    name: 'Grapical Design',
    description: 'Color, Shapes, Content',
  },
  {
    id: 3,
    name: 'Spirituality',
    description: 'God, Bible, Ministry',
  },
  {
    id: 4,
    name: 'Teaching',
    description: 'Maths, Phisycs, Education',
  },
  {
    id: 5,
    name: 'Health',
    description: 'Cardiovascular, Digestive, Skin',
  },
  {
    id: 6,
    name: 'Soccer',
    description: 'World Championship, Chelsea, Fresstyle',
  },
  {
    id: 7,
    name: 'Clothes',
    description: 'Elegant, Blue, Shoes',
  },
  {
    id: 8,
    name: 'Cats',
    description: 'Miel, Black, Houses',
  },
  {
    id: 9,
    name: 'Family',
    description: 'Parents, Brothers, Travels',
  },
  {
    id: 10,
    name: 'Food',
    description: 'Cook, Dinner, Pie',
  },
];

function getBooks(books) {
  //const uls=document.getElementsByTagName("ul"); //TODO: Ir llenando según la cantidad de libros que quepan por stand
  const uls = document.getElementsByTagName('ul');
  output = '';
  books.forEach((book) => {
    output += `<li id=${book.id}><a>${book.name}</a></li>`;
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
      desktop[0].innerHTML = books[i].description;
    });
  });
}

getBookDescription(books);
