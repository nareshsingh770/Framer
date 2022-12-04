import { useState } from 'react'
import './App.css';
import {storage} from './firebase'
import {ref} from './firebase/storage'
import {v4} from 'uuid';

function App() {
  const [uploadedImg, uploadImg] = useState(null)
  const uploadServ = () => {
    if (uploadedImg === null) {
      alert('Please Upload any image')
      return
    }
    const imageRef = ref(storage, `./images/${uploadedImg.name+v4}`)
    
  }
  return (
    <div className="App">
      <a href='#'>
        Create your Poster
      </a>
      <div className='img-upload'>
        <label>Upload</label>
        <input type='file' onChange={(e) => uploadImg(e.target.files[0])} />
        <button onClick={uploadServ}>upload</button>
      </div>
    </div>
  );
}

export default App;
