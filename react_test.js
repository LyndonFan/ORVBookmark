class ORVWindow extends React.Component{
    constructor(props){
        super(props);
        this.text = props.text;
        this.color = props.color;
    }

    processLine(line){
        if (line.substr(0,8)==="<header>"){
            return (
                <p className="header">
                {line.substr(8)}</p>);
        } else {
            return (<p>{line}</p>);
        }
    }

    render(){
        console.log("Testing...");
        return (
        <div className="userstuff">
        <div className={this.color+" windorv"}>
        <div className="white windorv">
            <div className={this.color+" windorv"}>
                <div className="white windorv">
                    <div className={this.color+" windorv lastwin"}>
                        <p style={{width:"100%"}}><span></span></p>
                        <div className="icon">✕</div>
                        <div> </div>
                        <div className="icon">❐</div>
                        <div> </div>
                        <div className="icon">—</div>
                        <p></p>
                        {this.text.split("\n").map(this.processLine)}
        </div></div></div></div></div></div>
        );
    }
}
const sampleText = "<header>Sample 123\nHello world!"
const domContainer = document.querySelector("#container");
ReactDOM.render(React.createElement(ORVWindow,{color:"blue",text:sampleText}), domContainer);
const domContainer2 = document.querySelector("#container2");
ReactDOM.render(React.createElement(ORVWindow,{color:"yellow",text:sampleText}), domContainer2);