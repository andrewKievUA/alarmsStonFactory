 import { connect } from 'react-redux'
 import {Button,Table,Container} from "react-bootstrap"
 import React, { Component } from 'react'

 import { Doughnut } from 'react-chartjs-2';
 import VerticalBar from "./VerticalBar.jsx"




 //console.log(this,"this")
 class App2 extends Component {
    constructor(props) {
        super(props);
        this.props=props
       // console.log(this.props)
       // console.log(this.props.data[0][2][0].comment)
    }
    showThis(){
       // console.log(this,"this")
    }
  
  render()
{
       return <>
    <Container>

    <VerticalBar />
<Table striped bordered hover variant="dark" size="222px" responsive="true">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
  { this.props.data[0][2].map((el,index) => {
              return(
                    <tr key={index}>
                    <td >{el.id}</td>
                    <td >{el.comment}</td>
                    <td >{el.time.replace("T"," ").replace("Z"," ").slice(0, 19) }</td>
                    </tr>
              )
            }
          )        
        }
  </tbody>
</Table>
</Container>
   </>
  }
}


const mapStateToProps = (state) => {
    return {data:state}

}

const mapDispatchToProps = (dispatch) => {
  return {
    calculateDailyTotalAlarms: () =>  dispatch({ type: 'calculateDailyTotalAlarms' }),
    getDatastore:              () =>  dispatch({ type: 'getDatastore' })
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App2) 