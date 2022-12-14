import React, { useState, memo } from 'react'

const Hero = (props) => {
    //console.log('Hero rendered')
    const [file, setFile] = useState(null)
    const uploadChange = (e) => {

        setFile(e.target.files[0])
    }
    return (
        <>
            <div className="jumbotron text-center">
                <h1>Framer</h1>
                <p>Create your poster</p>
                <form className='row justify-content-center'>
                    <div className="col-md-6">
                        <div className='upload-section d-flex align-items-center'>
                            <input className='flex-grow-1' type='file' onChange={(e) => uploadChange(e)} />
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-danger" onClick={() => props.generatePos(file)}>Generate</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default memo(Hero)