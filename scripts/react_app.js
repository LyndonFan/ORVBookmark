// TODO: mAkE iT wOrK

class ORVWindow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: props.text,
            color: props.color,
        };
    }

    setColor(color){
        this.setState({color:color});
    }

    setText(text){
        this.setState({text:text});
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
        <div className={this.state.color+" windorv"}>
        <div className="white windorv">
            <div className={this.state.color+" windorv"}>
                <div className="white windorv">
                    <div className={this.state.color+" windorv lastwin"}>
                        <p style={{width:"100%"}}><span></span></p>
                        <div className="icon">✕</div>
                        <div> </div>
                        <div className="icon">❐</div>
                        <div> </div>
                        <div className="icon">—</div>
                        <p></p>
                        {this.state.text.split("\n").map(this.processLine)}
        </div></div></div></div></div></div>
        );
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.window = React.createElement(ORVWindow,{color:props.color,text:props.text});
        this.state = {
            windowColor: props.color,
            windowText: props.text
        };
    }

    changeColorHandler = (event) => {
        console.log(event.target.value);
        // this.window.setColor(event.target.value);
    }

    changeTextHandler = (event) => {
        console.log(event.target.value);
        // this.window.setText(event.target.value);
    }

  render() {
    return (
      <div className="App">
        <p>Choose the window's color:</p>
        <input type="radio" id="blue" name="windowColor" onChange={this.changeColorHandler} 
        value="blue"/>
        <label htmlFor="blue">Blue</label>
        <input type="radio" id="yellow" name="windowColor" onChange={this.changeColorHandler} 
        value="yellow"/>
        <label htmlFor="yellow">Yellow</label>
        <p>Enter the window's text. Seperate with new lines,
            and add "&lt;header&gt;" prefix to make the line a header.</p>
        <textarea onChange={this.changeTextHandler}>
            {this.state.windowText}
        </textarea>
        <ORVWindow
            color={this.state.windowColor}
            text ={this.state.windowText}
        />
        {this.window}
     </div>
    );
  }
}

const sampleText = "<header>Scenario 1\n<header>Proof of Value\nKill one of more living organisms.";
const domContainer = document.querySelector("#container");
ReactDOM.render(React.createElement(App,{color:"blue",text:sampleText}), domContainer);