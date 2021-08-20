
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux'
import React, { Component } from 'react'



class VerticalBar extends Component {
  constructor(props) {
    super(props);
    this.props=props
    

}


 render(){
   const zzz = this.props.data


const data = {
  labels: ['Опускания вчера', 'Перемещения вчера', 'Сквитирован вчера', 'Опускания позавчера', 'Перемещения позавчера', 'Сквитирован позавчера' ],
  datasets: [
    {
      label: '# Аварий',
      
      data: zzz,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

 return <>

    <div className='header'>
      <h1 className='title'>Аварии Сборщика</h1>
      <div className='links'>

      </div>
    </div>
    <Bar data={data} options={options} />
  </>
}}

const mapStateToProps = (state) => {
  return {data:state[1]}

}

export default connect(mapStateToProps) (VerticalBar) 