import React, { Component, } from 'react';
import { NavLink } from "react-router-dom";

export default class Mood extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let moods = [];
    moods.push(<NavLink to="/stuff" id="adventMood" className="moodsConts">
    				 <img id="compass" src="./res/img/icons/compass.png"></img>
    				 <img id="arrow" src="./res/img/icons/arrow.png"></img>
    				 <img id="traveler" src="./res/img/icons/traveler.png"></img></NavLink>);

    moods.push(<NavLink to="/stuff" id="sadMood" className="moodsConts">
    				<img id="sadface" src="./res/img/icons/sadface.png"></img>
    				<img id="tear" src="./res/img/icons/tear.png"></img></NavLink>);

    moods.push(<NavLink to="/stuff" id="romanticMood" className="moodsConts">
    				<img id="heart" src="./res/img/icons/heart.png"></img>
    				<img id="couple" src="./res/img/icons/couple.png"></img></NavLink>);

    moods.push(<NavLink to="/stuff" id="hungryMood" className="moodsConts">
    				<img id="burger1" src="./res/img/icons/burger1.png"></img>
    				<img id="burger2" src="./res/img/icons/burger2.png"></img>
    				<img id="burger3" src="./res/img/icons/burger3.png"></img></NavLink>);

    moods.push(<NavLink to="/stuff" id="tiredMood" className="moodsConts">
    					<div class="Zzz">
							<span class="s2">z</span>
							<span class="s3">z</span>
							<span class="s4">z</span>
							<span class="s5">z</span>
							<span class="s6">z</span></div>
    				<img id="tiredMan" src="./res/img/icons/tiredMan.png"></img></NavLink>);

    moods.push(<NavLink to="/stuff" id="creativeMood" className="moodsConts">
    				<img id="creativeFace" src="./res/img/icons/creativeFace.png"></img> 
    				<img id="gear1" className="spin" src="./res/img/icons/gear.png"></img>
    				<img id="gear2" className="spin-back" src="./res/img/icons/gear.png"></img>
    				<img id="gear3" className="spin" src="./res/img/icons/gear.png"></img></NavLink>);

    return (<div><h1>HOW ARE YOU FEELING TODAY?</h1><div className="grid-container">{moods}</div></div>);
  }
}

