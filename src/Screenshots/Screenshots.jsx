import React, {Fragment} from 'react';

class Screenshots extends React.Component  {

  render () {
    return(
      <div>
        {this.props.location.state.screenshots
        .map( (screen, index) =>{
            return(
                <Fragment key={index}>
                  <img  src={screen.image} width='300' alt={index}/>
                </Fragment>
                
            )}
        )
        
        }
      </div>
    )
  };
};

export default Screenshots;