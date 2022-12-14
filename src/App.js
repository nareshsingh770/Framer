import { useState, useCallback, useRef } from 'react'
import './App.css';
import Canvas from './components/Canvas';
import Header from './Header';
import Hero from './Hero';
import InputVal from './InputVal';



function App() {
  const downloadRef = useRef()
  const [uploadedImg, setUpload] = useState(null)
  const [canva, setCanva] = useState(false);
  const [settings, setSettings] = useState({
    size: 'A4',
    ratio: 'p',
    cols: 4,
  })

  const uploadImg = (f) => {

    let reader = new FileReader();
    reader.onloadend = function () {
      setUpload(reader.result)
    }
    reader.readAsDataURL(f);
  }


  const generator = useCallback((f) => {
    console.log(f)
    if (!f) {
      alert('Please Upload image')
      return
    }
    setCanva(true)
    uploadImg(f)
  }, [uploadedImg])


  const applySettings = useCallback((e) => {
    const { name, value } = e.target;
    setSettings((oldSetting) => {
      return {
        ...oldSetting,
        [name]: value
      }
    })
  }, [settings])

  const downloadToCanva = () => {
    console.log(downloadRef)
    downloadRef.current()
  }

  return (
    <div className="App">
      <Header />
      <Hero generatePos={generator} />

      {canva && (
        <>
          <section className='container mt-5'>
            <div className='row'>
              <div className='col-md-5'>
                <InputVal applied={applySettings} downloadPdf={downloadToCanva} setting={settings} />
              </div>
              <div className='col-md-7 pt-5'>
                <Canvas idname='uploaded-img' ref={downloadRef} setting={settings} base={uploadedImg} width={window.innerWidth > 620 ? 600 : window.innerWidth - 24} height='600' />
              </div>
            </div>
          </section>
        </>
      )}
    </div >
  );
}


export default App;
