

export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Властелин Колец',
      author: 'Толкиен',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
      },
    {
      id: 2,
      title: 'Алеткар',
      author: 'Сандерс',
      price: 33,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
    },
  ];
		
  getBooks() {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if (Math.random() > 0.75) {
          reject(new Error('BIG ERROR!'))
        }
        else {
          resolve(this.data);
        }
      }, 700);
    })
  }

}