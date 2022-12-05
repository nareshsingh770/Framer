import React from 'react'

const InputVal = () => {
    return (
        <div>
            <h3>Paper and size</h3>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-12'>
                        <h6 className='text-start'>Paper Setting</h6>
                    </div>
                    <div className='col-md-6'>
                        <select class="form-select">
                            <option>A4 Size</option>
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <select class="form-select">
                            <option>Portrait</option>
                            <option>Landscape</option>
                        </select>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12'>
                        <h6 className='text-start'>Output size</h6>
                    </div>
                    <div className='col-md-6'>
                        <input type="number" class="form-control" value='4' />
                    </div>
                    <div className='col-md-6'>
                        <select class="form-select">
                            <option>Portrait</option>
                            <option>Landscape</option>
                        </select>
                    </div>
                </div>
                <div className='container'>
                    <div className='row justify-content-end mt-4'>
                        <button className='btn btn-success col-5'>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputVal