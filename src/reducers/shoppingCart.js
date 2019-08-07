function updateShoppingCart (state, action) {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 250,
    }
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART': {
      return universalCartUpdate(state, action.value, 1)
    }

    case 'BOOK_MINUS_COUNT': {
      return universalCartUpdate(state, action.value, -1)
    } 

    case 'BOOK_DELETE_FROM_CART': {
      return universalCartUpdate(state, action.value, 0)
    } 

    default: 
      return state.shoppingCart;
  }
}


function universalCartUpdate(state, bookId, amount) {
  //сначала надо искать есть ли эта книга в cartItems
  // let shoppingCart = state.shoppingCart;
  let cartItems = state.shoppingCart.cartItems;
  let idx = cartItems.findIndex( (item) => item.id === bookId);
  const oldItem = cartItems[idx];
  
  //если книги нет в заказе, то нам понадобятся данные об этой книге для создания newItem
  const book = (oldItem)
                ? null
                : state.bookList.books.find( (book) => book.id === bookId );
  
  //если книга уже есть в заказе, то данные можно взять из oldItem
  //а вместо книги передать null
  const newItem = updateItem(oldItem, book, amount);
  let newCart = updateCartItems(cartItems, newItem, idx);

  return {
    cartItems: newCart,
  }
}

function updateItem (oldItem, book, amount) {
  //берём count из oldItem или устанавливаем в 1
  let count = (oldItem) ? oldItem.count + amount : 1;
  //если amount 0, то эту позицию нужно удалить из заказа
  if(amount === 0) count = 0;

  //если нет oldItem, то нужно создать новую запись, взяв данные из book
  if(!oldItem) {
    return {
      id: book.id,
      title: book.title,
      count: count,
      total: book.price * count,
    };
  }

  //иначе берем данные из oldItem
  const price = oldItem.total / oldItem.count;

  return {
    ...oldItem,
    count: count,
    total: price * count,
  }
}

function updateCartItems (cartItems, item, idx) {
  //если в заказе нет такой книги, то добавляем новый элемент в конец
  if(idx === -1) {
    return [...cartItems, item]
  }

  //удаляем элемент из заказа
  if(item.count <= 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx+1) //без второго аргумента = до конца.
    ]
  }
  
  //обновляем элемент в массиве
  return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx+1) //без второго аргумента = до конца.
    ]
}


export default updateShoppingCart;