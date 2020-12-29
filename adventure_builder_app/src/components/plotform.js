import React, { Component } from 'react';

class PlotForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonLabel: "weenie"
        }
    }
    render() {
        return (
            <form>
                <div class="text-field edit-plot-name">
                    <label for="plot-name">Plot Name</label>
                    <input type="text" id="plot-name" name="plot-name"/>
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
                    <input name="roll-plot" type="button" class="die-btn" value=""/>
                </div>
            </form>
        )
    }
}

export default PlotForm;    