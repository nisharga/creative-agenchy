import React from 'react';

const SingleServiceList = ({val}) => {
    const tagHandleChange = () => {
        alert('Status Change SuccesFully');
    }
    return (
        <div className='row'> 
            {
                val.map(data => 
                    <div className='col-md-6'>
                    <div className='singleService'>
                        <div className='singleServiceTop'>
                            <img src={require(`../../../images/icons/${data.icon}`)} alt={'service icon'} style={{'width': '70px'}}>
                            </img>
    
                         <select name="tag" id="tag" className="tag" onChange={tagHandleChange}>
                        <option value={'pendinga'}>Pending</option>
                        <option value={'done'}>Done</option> 
                         </select>  
    
                        </div>
                        <h5>{data.name}</h5>
                        <p>{data.data}</p>
                    </div>
                  </div>
                )
            }
            </div>
        // </div>
    );
};

export default SingleServiceList;