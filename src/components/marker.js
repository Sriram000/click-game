const size = 10;

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: `${ size }px`,
    width:  `${ size }px`,
    marginTop: `${ -size / 2 }px`,
    marginLeft: `${ -size / 2 }px`,
    background: "red",
}

const Marker = () => <div style={ style }></div>
       
export default Marker;