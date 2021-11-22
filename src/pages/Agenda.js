import React from 'react';
import WheelPicker from 'react-wheelpicker';

import './demo.css'

class Agenda extends React.Component {

    constructor(){
        super()

        this.state = {
            picker1Open: false,
            picker2Open: false,
            data: ["Intro to Data Science", "Big Data", "Design and Analysis of Algorithms", "Operating Systems", "Cloud Computing", "Principles of Database Systems", "Human Computer Interaction", "Information Security & Privacy", "Machine learning", "Artificial Intelligence"],
            defaultSelection: 3,
            selection: "Operating Systems",
            defaultSelection2: 3,
            selection2: "Operating Systems",
        }
    }

    render(){
        return (
            <React.Fragment>
            <div className="demo-container">
                <div className="picker-container"><center><span className="anim"> animation = 'wheel'</span></center><br/>
                    <div className="selected" onClick={() => this.setState({ picker1Open: !this.state.picker1Open})}>{this.state.selection}</div>
                    {this.state.picker1Open &&
                        <div className="picker-1">
                        <WheelPicker
                            data={this.state.data}
                            height={50}
                            fontSize={15}
                            defaultSelection={this.state.defaultSelection}
                            parentHeight={150}
                            updateSelection={selectedIndex => this.setState({ selection: this.state.data[selectedIndex], defaultSelection: selectedIndex })}
                            scrollerId="scroll-select-subject"
                            animation="wheel"
                        />
                        </div>
                    }
                </div>
                <div className="picker-container"><center><span className="anim">animation = 'flat'</span></center> <br/>
                    <div className="selected" onClick={() => this.setState({ picker2Open: !this.state.picker2Open})}>{this.state.selection2}</div>
                    {this.state.picker2Open &&
                        <div className="picker-2">
                        <WheelPicker
                            data={this.state.data}
                            height={50}
                            fontSize={13}
                            defaultSelection={this.state.defaultSelection2}
                            parentHeight={250}
                            updateSelection={selectedIndex => this.setState({ selection2: this.state.data[selectedIndex], defaultSelection2: selectedIndex })}
                            scrollerId="scroll-select-subject-2"
                            animation="flat"
                        />
                        </div>
                    }
                </div>
            </div>
            </React.Fragment>
        )
    }
    
}

export default Agenda
