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
          ]}
          layout={{
            title: 'Linear Scale',
            xaxis: {
              range: [0, 6]
            },
            yaxis: {
            },
            autosize: true
          }}
          useResizeHandler= { true }
          config={{ 'displayModeBar': false }}
          className = {'plot'}
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
          ]}
          layout={{
            title: 'Log scale',
            xaxis: {
              range: [0, 6]
            },
            yaxis: {
              type: 'log'
            },
            autosize: true
          }}
          config={{ 'displayModeBar': false }}
          useResizeHandler= { true }
          className = {'plot'}
        />
      </div>
    );
  }
}
export default Graph
