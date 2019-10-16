import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import StagePatternDetails from './StagePatternDetails'
import axios from 'axios'

export default class StagePatterns extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedStagePattern: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getStagePatternData();
  }

  //Function to get the StagePattern Data from json
  getStagePatternData() {
    axios.get('assets/samplejson/stagePatternlist.json').then(response => {
      this.setState({stagePatternList: response})
    })
  };

  render() {
    if (!this.state.stagePatternList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

          this.state.stagePatternList.data.map(stagePattern => <Panel bsStyle="info" key={stagePattern.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{stagePattern.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{stagePattern.description}</p>
              <Button bsStyle="info" onClick={() => this.setState({selectedStagePattern: stagePattern.id})}>

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-6">
        <StagePatternDetails val={this.state.selectedStagePattern}/>
      </div>
    </div>)
  }

}
