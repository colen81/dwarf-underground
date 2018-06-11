import React, { Component } from 'react'
import BottomOptions from './BottomOptions'
import FirstParagraphInfo from './FirstParagraphInfo'
import FirstParagraphText from './FirstParagraphText'
class Body extends Component{
    render(){
        return(
            <div className="large-8 medium-12 columns article">
            <FirstParagraphInfo />
            <FirstParagraphText />
            <BottomOptions />
          </div>
        )

    }
}
export default Body