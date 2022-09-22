import { useSelector } from "react-redux"

export function Catalog() {
  const state = useSelector(state => state);

  console.log(state);
  return (
    <h1>Catalog</h1>
  )
}