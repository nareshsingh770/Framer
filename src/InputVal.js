import React, { memo } from 'react'

const InputVal = (props) => {

    return (
        <div>
            <h3>Paper and size</h3>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-12'>
                        <h6 className='text-start'>Paper Setting</h6>
                    </div>
                    <div className='col-md-6 pt-3'>
                        <select className="form-select">
                            <option>A4 Size</option>
                        </select>
                    </div>
                    <div className='col-md-6 pt-3'>
                        <select className="form-select" value={props.setting.ratio} name='ratio' onChange={(e) => props.applied(e)}>
                            <option value='p'>Portrait</option>
                            <option value='l'>Landscape</option>
                        </select>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12'>
                        <h6 className='text-start'>Output size</h6>
                    </div>
                    <div className='col-md-6 pt-3'>
                        <input type="number" name='cols' className="form-control" onChange={(e) => { props.applied(e) }} value={props.setting.cols} />
                    </div>

                </div>
                <div className='container'>
                    <div className='row justify-content-end mt-4'>
                        <button className='btn btn-success col-5' onClick={() => { props.downloadPdf() }}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(InputVal)