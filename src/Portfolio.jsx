import { Component } from "react"
import { useState } from "react"
import Toolbar from "./Toolbar"
import ProjectList from "./ProjectList"
import projects from "./projects"

export default class Portfolio extends Component {
  
  constructor(props) {
    super(props)
    this.onSelectFilter = this.onSelectFilter.bind(this)
    this.state = {
      projests: projects,
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: "All",
      onSelectFilter: this.onSelectFilter
    }
    
  }

  onSelectFilter(filter) {
    this.state.projests = projects
    this.state.selected = "All"

    if (filter !== "All") {
            this.state.selected = filter
            this.state.projests = this.state.projests.filter(function (el) {
          return el.category === filter;
        })
    } 
 
    this.setState(this.state)
  }

  render () {
           
    return(
      <>
        <div className="toolbar-container">
          <Toolbar
            props={this.state} 
          />
        </div>
        <ProjectList projects={this.state.projests} />
      </>
    )
   
  }
}