import React, { Component } from 'react'

import ActualComments from './ActualComments'
import SharePost from './SharePost'
class BottomOptions extends Component{
    render(){
        return(
            <div className="article-links">
              <ActualComments />
              <SharePost />
            </div>
        )
    }
}
export default BottomOptions