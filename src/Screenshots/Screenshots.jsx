import React, {Fragment, useState} from 'react';

const Screenshots = (props) =>  {

  return(
    <div>
        {props.location.state.screenshots
        .map( (screen, index) =>{
            return(
                <Fragment key={index}>
                  <img  src={screen.image} width='300' alt={index}/>
                </Fragment>
            )
          }
        )}
    </div>
  )
};

export default Screenshots;