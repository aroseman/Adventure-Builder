import React, { Component } from 'react';

class PlotForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            plotName: "",
            plotLocation: "",
            dungeonGoal: "",
            villain: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlePlotNameChange = this.handlePlotNameChange.bind(this);
    }
    handleClick(e) {
        // fetch('http://localhost:4000/get-plots')
        //     .then(response => { return response.json()})
        //     .then(data => {this.setState({ plotName: data[0].name})})
        this.getDungeonGoal(this.rollDie())
        this.getVillains(this.rollDie())
    }
    handlePlotNameChange(e) {
        this.setState({plotName: e.target.value});
    }
    handlePlotLocationChange(e) {
        this.setState({plotLocation: e.target.value});
    }
    handleDungeonGoalChange(e) {
        this.setState({dungeonGoal: e.target.value});
    }
    handleVillainChange(e) {
        this.setState({villain: e.target.value});
    }
    rollDie() {
        return Math.floor(Math.random() * 20) + 1
    }
    getDungeonGoal(rollValue) {
        fetch('http://localhost:4000/get-dungeon-goals')
            .then(response => {return response.json()})
            .then(data => {this.setState({dungeonGoal: data[0][rollValue]})})
    }
    getVillains(rollValue) {
        fetch('http://localhost:4000/get-villain')
            .then(response => {return response.json()})
            .then(data => {this.setState({villain: data[0][rollValue]})})
    }
    render() {
        return (
            <div>
            <form id="requirements">
                <div class="text-field edit-plot-name">
                    <label for="plot-name">Plot Name</label>
                    <input type="text" id="plot-name" name="plot-name" value={this.state.plotName} onChange={this.handlePlotNameChange}/>
                </div>
                <div class="checklist edit-plot-locations">
                    <label for="plot-locations">Plot Locations</label>
                    <div name="plot-locations">
                        <input type="checkbox" id="dungeon" name="dungeon" value="Dungeon"/>
                        <label for="dungeon">Dungeon</label><br/>
                        <input type="checkbox" id="wilderness" name="wilderness" value="Wilderness"/>
                        <label for="wilderness">Wilderness</label><br/>
                        <input type="checkbox" id="town" name="town" value="Town"/>
                        <label for="town">Town</label><br/>
                    </div>
                </div>
                <div class="dice-roll">
                    <span>Roll Plot</span>
                    <input name="roll-plot" type="button" class="die-btn" value="" onClick = {this.handleClick}/>
                </div>
            </form>

            <form id="plot">
                <label for="dungeon-goal">Dungeon Goal</label>
                <textarea id="dungeon-goal" name="dungeon-goal" value={this.state.dungeonGoal} onChange={this.handleDungeonGoalChange}/>
                <div class="textfield edit-villain">
                    <label for="villain">Villain</label>
                    <input type="text" id="villain" name="villain" value={this.state.villain} onChange={this.handleVillainChange}/>
                </div>
            </form>
            </div>
        )
    }
}



export default PlotForm;    