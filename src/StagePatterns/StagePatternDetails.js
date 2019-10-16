import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of StagePatterns Component
export default class StagePatternDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getStagePatternDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get StagePattern Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getStagePatternDetails(this.props.val)
    }
  }

  //Function to Load the stagePatterndetails data from json.
  getStagePatternDetails(id) {
    axios.get('assets/samplejson/stagePattern' + id + '.json').then(response => {
      this.setState({stagePatternDetails: response})
    })
  };

  render() {
    if (!this.state.stagePatternDetails)
      return (<p>Loading Data</p>)
    return (<div className="stagePatterndetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.stagePatternDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.stagePatternDetails.data.name}</p>
          <p>Description : {this.state.stagePatternDetails.data.description}</p>
          <video></video>
        </Panel.Body>
      </Panel>
    </div>)
  }
}
