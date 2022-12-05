import { useEffect, useState } from 'react'
import './App.css';
import Canvas from './components/Canvas';


function App() {
  const [uploadedImg, setUpload] = useState(null)

  const uploadImg = (img) => {

    let reader = new FileReader();
    reader.onloadend = function () {
      //console.log(reader.result)
      setUpload(reader.result)
    }
    reader.readAsDataURL(img);


  }

  return (
    <div className="App">
      {
        uploadedImg && <Canvas idname='uploaded-img' base={uploadedImg} width='600' height='300' />
      }
      <div className='img-upload'>
        <label>Upload</label>
        <input type='file' onChange={(e) => uploadImg(e.target.files[0])} />
        <button >upload</button>
      </div>
    </div >
  );
}


export default App;
