class ORVWindow extends React.Component{
    constructor(props){
        super(props);
        // this.text = props.text;
        // this.color = props.color;
        // this.hasBackground = props.hasBackground;
    }

    render(){
        console.log("Testing...");
        return (
        <div className="userstuff">
        <div className="blue windorv">
        <div className="white windorv">
            <div className="blue windorv">
                <div className="white windorv">
                    <div className="blue windorv lastwin">
                        <p style={{width:"100%"}}><span></span></p>
                        <div className="icon">✕</div>
                        <div> </div>
                        <div className="icon">❐</div>
                        <div> </div>
                        <div className="icon">—</div>
                        <p></p>
                        <p>Testing 123</p>
        </div></div></div></div></div></div>
        );
    }
}