const Element = (props) => {
    if (!props) return false

    const _element = document.createElement(props.type)

    if (props.sons) props.sons.forEach(son => _element.appendChild(son))
    if (props.text) _element.textContent = props.text
    if (props.class) _element.classList.add(...props.class)
    if (props.src) _element.src = props.src

    return _element
}
export default Element