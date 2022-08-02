export function Post (props) {
  const {cb, name} = props;
  return <h2 onClick={cb}>{name}</h2>
}