import React, { Component } from 'react'
import Comments from './Comments'
import FirstParagraphInfo from './FirstParagraphInfo'
import FirstParagraphText from './FirstParagraphText'
class Body extends Component{
    render(){
        return(
            <div className="large-8 medium-12 columns article">
            <FirstParagraphInfo />
            <FirstParagraphText />
            <Comments />
          </div>
        )

    }
}
export default Body