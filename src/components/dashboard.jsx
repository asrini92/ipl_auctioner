import React from "react";

const options = {
  title: "My Daily Activities",
  is3D: true,
  pieSliceText: "value",
  slices: {
    0: { offset: 0.2 }
  }
};
var data = [];

class Dashboard extends React.Component {
  componentWillMount() {
    data = getData();
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default Dashboard;
