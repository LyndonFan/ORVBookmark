class ORVWindow extends React.Component{
    constructor(props){
        super(props);
        // this.text = props.text;
        // this.color = props.color;
        // this.hasBackground = props.hasBackground;
    }

    render(){
        // console.log(this.color);
        return (
        <div className="userstuff">
        <div className="blue windorv">
        <div className="white windorv">
            <div className="blue windorv">
                <div className="white windorv">
                    <div className="blue windorv lastwin">
                        <span style={{width:"100%"}}>
                            <span className="icon">✕</span>
                            <span> </span>
                            <span className="icon">❐</span>
                            <span> </span>
                            <span className="icon">—</span>
                        </span>
                        <p>Testing 123</p>
        </div></div></div></div></div></div>
        );
    }
}

const domContainer = document.querySelector("#container");
ReactDOM.render(React.createElement(ORVWindow), domContainer);