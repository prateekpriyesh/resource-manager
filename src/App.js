import React from 'react';
import logo from './logo.svg';
import './App.css';
import avatar from './assets/avatar.jpg';
import leftArrow from './assets/left-chevron.svg';
import rightArrow from './assets/right-chevron.svg';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      availableResources: [
        {
          avatar,
          name: 'A',
        },
        {
          avatar,
          name: 'B',
        },
        {
          avatar,
          name: 'C',
        },
        {
          avatar,
          name: 'D',
        },
        {
          avatar,
          name: 'E',
        }
      ],
      assignedResources: [],
    }
  }

  assignResource = () => {
    let { availableResources, assignedResources } = this.state;
    if(availableResources.length > 0) {
      this.setState({
        assignedResources: [...assignedResources, availableResources[0]],
      }, () => {
        this.setState({
          availableResources: availableResources.slice(1)
        })
      })
    }
  }

  releaseResource = () => {
    let { availableResources, assignedResources } = this.state;
    if(assignedResources.length > 0) {
      this.setState({
        availableResources: [...availableResources, assignedResources[0]]
      }, () => {
        this.setState({
          assignedResources: assignedResources.slice(1),
        })
      })
    }
  }

  render() {
    let { availableResources, assignedResources } = this.state;
    return (
      <div className="App">
        <div className="available-pool">
          {
            availableResources && availableResources.map((resource, index) => {
              return(
                <div className="resource" key={`resource-${index}`}>
                    <img src={resource.avatar} alt="avatar" className="avatar"/>
                    <div className="name">{resource.name}</div>
                </div>
              );
            })
          }
        </div>

        <div className="arrows">
          <img src={rightArrow} alt="right" className="arrow" onClick={this.assignResource}/>
          <img src={leftArrow} alt="left" className="arrow" onClick={this.releaseResource}/>
        </div>

        <div className="assigned-pool">
          {
            assignedResources && assignedResources.map((resource, index) => {
              return(
                <div className="resource" key={`resource-${index}`}>
                    <img src={resource.avatar} alt="avatar" className="avatar"/>
                    <div className="name">{resource.name}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
