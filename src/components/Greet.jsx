    const Greet = (props) => {
    console.log(props)

    return(
        <h1>Hello {props.name} also known as {props.heroname}</h1>
    )
}

export default Greet;