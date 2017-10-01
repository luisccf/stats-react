import React from 'react'
import ReactHighcharts from 'react-highcharts'


const Spiderweb = (props) => {
    let pokemon = {...props.pokemon, pointPlacement: 'on'}
    pokemon.data.pop()

    const config = {
        chart: {
            type: 'line',
            polar: true,
        },
        title: {
            text: pokemon.name,
        },
        xAxis: {
            categories: props.stats,
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        series: [
            pokemon
        ]
    }

    return <ReactHighcharts config={config} />
}

export default Spiderweb
