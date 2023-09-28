/* eslint-disable react/prop-types */
import "./ButtonModules.css"

export default function Button({ title, ...rest }) {
  return <button {...rest}>{title}</button>
}
