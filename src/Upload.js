import React from 'react'

const Upload = (props) => {
    return (
        <div className='img-upload'>
            <label>Upload</label>
            <input type='file' onChange={(e) => props.uploadChange(e)} />
            <button onClick={props.generatePos}>Generate</button>
        </div>
    )
}

export default Upload