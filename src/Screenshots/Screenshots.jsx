import React from 'react';

class Screenshots extends React.Component  {

  render () {
    return(
      <div>
        {this.props.location.state.screenshots
        .map( screen =>{
            return(
                <img src={screen.image} width='300'/>
            )}
        )
        
        }
      </div>
    )
  };
};

export default Screenshots;