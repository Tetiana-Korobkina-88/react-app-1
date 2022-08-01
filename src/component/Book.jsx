export const Book = (props) => {
  return <div>
    <h1>Today is {props.name ? <span>{props.name}</span> : 'Ooops'}</h1>
    <p>{props.year}</p>
    <p>{props.price}</p>
    <p>{props.children}</p>
  </div>
}