import React, { Component } from 'react';

class PlotForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            plotName: "",
            plotLocation: "",
            dungeonGoal: "",
            villain: "",
            ally: "",
            townGoal: "",
            wildernessGoal: "",
        }
        // TODO: Implement wrapper function to clean up this list of handler bindings.
        this.handleClick = this.handleClick.bind(this);
        this.handlePlotNameChange = this.handlePlotNameChange.bind(this);
        this.handleAllyChange = this.handleAllyChange.bind(this);
        this.handleWildernessGoalChange = this.handleWildernessGoalChange.bind(this);
        this.handleDungeonGoalChange = this.handleDungeonGoalChange.bind(this);
        this.handleVillainChange = this.handleVillainChange.bind(this);
        this.handleTownGoalChange = this.handleTownGoalChange.bind(this);
    }
    handleClick(e) {
        // TODO: Implement wrapper function to clean up this list of function calls.
        this.getDungeonGoal(this.rollDie())
        this.getVillains(this.rollDie())
        this.getTownGoal(this.rollDie())
        this.getWildernessGoal(this.rollDie())
        this.getAllies(this.rollDie())
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
    handleAllyChange(e) {
        this.setState({ally: e.target.value});
    }
    handleTownGoalChange(e) {
        this.setState({townGoal: e.target.value});
    }
    handleWildernessGoalChange(e) {
        this.setState({wildernessGoal: e.target.value});
    }
    // TODO: Implement list size detection to set range. IE if a document only has 5 entries the roll range should be 1-5.
    rollDie() {
        return Math.floor(Math.random() * 20) + 1
    }
    getDungeonGoal(rollValue) {
        fetch('http://localhost:4000/get-dungeon-goals') // TODO: Implement adventure-builder-server variable
            .then(response => {return response.json()})
            .then(data => {this.setState({dungeonGoal: data[0][rollValue]})})
    }
    getVillains(rollValue) {
        fetch('http://localhost:4000/get-villain') // TODO: Implement adventure-builder-server variable
            .then(response => {return response.json()})
            .then(data => {this.setState({villain: data[0][rollValue]})})
    }

    getAllies(rollValue) {
        fetch('http://localhost:4000/get-allies') // TODO: Implement adventure-builder-server variable
            .then(response => {return response.json()})
            .then(data => {this.setState({ally: data[0][rollValue]})})
    }

    getTownGoal(rollValue) {
        fetch('http://localhost:4000/get-town-goals') // TODO: Implement adventure-builder-server variable
            .then(response => {return response.json()})
            .then(data => {this.setState({townGoal: data[0][rollValue]})})
    }

    getWildernessGoal(rollValue) {
        console.log(rollValue);
        fetch('http://localhost:4000/get-wilderness-goals') // TODO: Implement adventure-builder-server variable
            .then(response => {return response.json()})
            .then(data => {this.setState({wildernessGoal: data[0][rollValue]})})
    }

    render() {
        return (
            <div>
            <form id="requirements">
                <div className="text-field edit-plot-name">
                    <label htmlFor="plot-name">Plot Name</label>
                    <input type="text" id="plot-name" name="plot-name" value={this.state.plotName} onChange={this.handlePlotNameChange}/>
                </div>
                <div className="checklist edit-plot-locations">
                    <label htmlFor="plot-locations">Plot Locations</label>
                    <div className="plot-locations">
                        <input type="checkbox" id="dungeon" name="dungeon" value="Dungeon"/>
                        <label htmlFor="dungeon">Dungeon</label><br/>
                        <input type="checkbox" id="wilderness" name="wilderness" value="Wilderness"/>
                        <label htmlFor="wilderness">Wilderness</label><br/>
                        <input type="checkbox" id="town" name="town" value="Town"/>
                        <label htmlFor="town">Town</label><br/>
                    </div>
                </div>
                <div className="dice-roll">
                    <span>Roll Plot</span>
                    <input name="roll-plot" type="button" className="die-btn" value="" onClick = {this.handleClick}/>
                </div>
            </form>

            <form id="plot">
                <div className="textarea edit-plot">
                    <label htmlFor="dungeon-goal">Dungeon Goal</label>
                    <textarea id="dungeon-goal" name="dungeon-goal" value={this.state.dungeonGoal}
                              onChange={this.handleDungeonGoalChange}/>
                </div>
                <div className="textarea edit-plot">
                    <label htmlFor="wilderness-goal">Wilderness Goal</label>
                    <textarea id="wilderness-goal" name="wilderness-goal" value={this.state.wildernessGoal}
                              onChange={this.handleWildernessGoalChange}/>
                </div>
                <div className="textarea edit-plot">
                    <label htmlFor="town-goal">Town Goal</label>
                    <textarea id="town-goal" name="town-goal" value={this.state.townGoal}
                              onChange={this.handleTownGoalChangeGoalChange}/>
                </div>
                <div className="textfield edit-npc">
                    <label htmlFor="villain">Villain</label>
                    <input type="text" id="villain" name="villain" value={this.state.villain} onChange={this.handleVillainChange}/>
                </div>
                <div className="textfield edit-npc">
                    <label htmlFor="ally">Ally</label>
                    <input type="text" id="ally" name="ally" value={this.state.ally} onChange={this.handleAllyChange}/>
                </div>


            </form>
            </div>
        )
    }
}



export default PlotForm;    