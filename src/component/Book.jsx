export const Book = (props) => {
  return props.name ? (
  <div>
    <h1>Today is {props.name}</h1>
    <p>{props.year}</p>
    <p>{props.price}</p>
    <p>{props.children}</p>
  </div>
  ) : null
};