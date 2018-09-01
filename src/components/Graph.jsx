import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Graph extends Component {
  render() {
    return (
      <div>
        <Plot
          data={[
            {
              x: [0, 1, 2, 3, 4, 5, 6],
              y: this.props.gainsTakeOutCapital,
              type: 'scatter',
              marker: { color: 'red' },
              name: 'Take out investments'
            },
            {
              x: [0, 1, 2, 3, 4, 5, 6],
              y: this.props.gainsFullReinvest,
              type: 'scatter',
              marker: { color: 'blue' },
              name: '100% Reinvest'
            }
            // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] }
          ]}
          layout={{
            width: 700,
            height: 500,
            title: 'Linear Scale',
            xaxis: {
              range: [0, 6]
            },
            yaxis: {
            }
          }}
          config={{ 'displayModeBar': false }}
        />
        <Plot
          data={[
            {
              x: [0, 1, 2, 3, 4, 5, 6],
              y: this.props.gainsTakeOutCapital,
              type: 'scatter',
              marker: { color: 'red' },
              name: 'Take out investments'
            },
            {
              x: [0, 1, 2, 3, 4, 5, 6],
              y: this.props.gainsFullReinvest,
              type: 'scatter',
              marker: { color: 'blue' },
              name: '100% Reinvest'
            }
            // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] }
          ]}
          layout={{
            width: 700,
            height: 500,
            title: 'Log scale',
            xaxis: {
              range: [0, 6]
            },
            yaxis: {
              type: 'log'
            }
          }}
          config={{ 'displayModeBar': false }}
        />
      </div>
    );
  }
}
export default Graph
