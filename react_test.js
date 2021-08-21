/** @jsx React.DOM */

class ORVWindow extends React.Component{
    constructor(props){
        super(props);
        this.text = props.text;
        this.color = props.color;
        this.hasBackground = props.hasBackground;
    }

    render(){
        console.log(this.color);
        return (
        <div>
        <div class="blue windorv">
        <div class="white windorv">
            <div class="blue windorv">
                <div class="white windorv">
                    <div class="blue windorv lastwin">
                        <p style="width:100%;">
                            <span>
                                <div class="icon">✕</div>
                                <div> </div>
                                <div class="icon">❐</div>
                                <div> </div>
                                <div class="icon">—</div>
                            </span>
                        </p>
                        <p>Testing 123</p>
        </div></div></div></div></div></div>
        );
    }
}

const domContainer = document.querySelector('#orvwindows');
ReactDOM.render(React.createElement(ORVWindow), domContainer);