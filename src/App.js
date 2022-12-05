import { useEffect, useState } from 'react'
import './App.css';
import Canvas from './components/Canvas';
import CounterMain from './CounterMain';
import Header from './Header';
import Hero from './Hero';
import InputVal from './InputVal';
import Upload from './Upload';


function App() {
  const [createPos, setPoster] = useState(false)
  const [file, setFile] = useState(null)
  const [uploadedImg, setUpload] = useState(null)
  const [canva, setCanva] = useState(false)

  const uploadImg = () => {

    let reader = new FileReader();
    reader.onloadend = function () {
      //console.log(reader.result)
      setUpload(reader.result)
    }
    reader.readAsDataURL(file);
  }

  const uploadChange = (e) => {

    setFile(e.target.files[0])
  }

  const generator = () => {
    if (!file) {
      alert('Please Upload image')
      return
    }
    setCanva(true)
    uploadImg()
    setPoster(true)
  }
  return (
    <div className="App">
      <Header />
      <Hero uploadChange={uploadChange} generatePos={generator} />

      {canva && (
        <>
          <section className='container mt-5'>
            <div className='row'>
              <div className='col-md-5'>
                <InputVal />
              </div>
              <div className='col-md-7'>
                <Canvas idname='uploaded-img' base={uploadedImg} width='600' height='600' />
              </div>
            </div>
          </section>
        </>
      )}



    </div >
  );
  // return (
  //   <div className="App">
  //     <CounterMain />
  //   </div >
  // );
}


export default App;
