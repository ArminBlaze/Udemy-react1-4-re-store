// const compose = ( ...fns) => (comp) => {
//   return fns.reduceRight(
//     (wrapped, f) => f(wrapped), comp
  // );
// };


//Получит много функций и компонент.
//Функции запишет в массив fns
//Начнёт с конца массива и обернёт компонент в последнюю функцию
//в конце вернёт результат самой первой обертки. Т.е обернёт компонент во все обертки, начиная с последней и заканчивая первой. Первая обертка будет "самой большой матрешкой".
function compose(...fns) {
  return function (component) {
    return fns.reduceRight(
      (previousValue, f) => {
        // console.log(previousValue);
        return f(previousValue)
      },
      component
    )
  }
}

// compose(
//   fn1,
//   fn2(mapStateToProps, actions)
// )(component);

export default compose;