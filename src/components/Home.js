import React, { Component } from 'react';
import Chart from 'chart.js';

export default class Home extends Component {
    render() {
        const { currentMacros, goalMacros } = this.props;
        return (
            <div>
                <h2>Macros</h2>
                <div>
                    <MacroChart macros={currentMacros} />
                    <MacroInfo 
                        type="Carbs" 
                        current={currentMacros.carbs} 
                        goal={goalMacros.carbs}
                    />
                    <MacroInfo 
                        type="Fat" 
                        current={currentMacros.fat} 
                        goal={goalMacros.fat}
                    />
                    <MacroInfo 
                        type="Protein" 
                        current={currentMacros.protein} 
                        goal={goalMacros.protein}
                    />
                </div>
            </div>
        );
    }
}

const MacroInfo = ({type, current, goal}) => {
    const currPercentage = Math.floor(current / goal * 100);
    return (
        <div>
            <h2>{type}: {currPercentage}%</h2>
            <p>Current: {current}g | Goal: {goal}g</p>
        </div>
    );
}

class MacroChart extends Component {
    chartRef = React.createRef();

    componentDidMount = () => {
        const { macros } = this.props;
        const ctx = this.chartRef.current.getContext('2d');
        this.setupChart(ctx, macros);
    }

    // Can probably organize the configuration more succinctly
    setupChart = (ctx, macros) => {
        const { carbs, fat, protein } = macros;
        const isEmpty = carbs + fat + protein === 0;
        const data = isEmpty ?
            [1, 0, 0] : 
            [carbs, fat, protein];
        const backgroundColor = isEmpty ?
            [
                'rgba(150, 150, 150, 0.5',
                'rgba(150, 150, 150, 0.5',
                'rgba(150, 150, 150, 0.5'
            ] 
            :
            [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
            ];

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColor
                }],
            
                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Carbs',
                    'Fat',
                    'Protein'
                ]
            },
            options: {}
        });
    }

    render() {
        return <canvas ref={this.chartRef} id='myChart'></canvas>;
    }
}