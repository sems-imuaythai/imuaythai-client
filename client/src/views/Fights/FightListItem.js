import moment from 'moment'
import React from 'react'
import Versus from './Versus'
import RedFighterDropTargetDecorator from './RedFighterDropTargetDecorator'
import BlueFighterDropTargetDecorator from './BlueFighterDropTargetDecorator'

const FightListItem = (props) => {

  return <div className="card">
           <div className="card-body">
             <div className="row">
               <div className="col-md-5">
                 <RedFighterDropTargetDecorator fight={ props.fight } fighter={ props.fight.redAthlete } number={ props.number } />
               </div>
               <div className="col-md-2 align-self-center text-center">
                 <Versus/> Apr. start time:
                 { ' ' + moment(props.fight.startDate).format('YYYY-MM-DD HH:mm') } Ring: <strong>{ ' ' + props.fight.ring }</strong>
               </div>
               <div className="col-md-5">
                 <BlueFighterDropTargetDecorator fight={ props.fight } fighter={ props.fight.blueAthlete } number={ props.number } />
               </div>
             </div>
           </div>
         </div>
}

export default FightListItem