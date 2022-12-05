import React from 'react'

const Hero = (props) => {
    return (
        <>
            <div className="jumbotron text-center">
                <h1>Framer</h1>
                <p>Create your poster</p>
                <form className='row justify-content-center'>
                    <div className="col-md-6">
                        <div className='upload-section d-flex align-items-center'>
                            <input className='flex-grow-1' type='file' onChange={(e) => props.uploadChange(e)} />
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-danger" onClick={props.generatePos}>Generate</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Hero