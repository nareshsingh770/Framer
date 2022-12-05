import React, { useEffect } from 'react'

const Canvas = (props) => {
    useEffect(() => {
        const canvas = document.getElementById(props.idname)
        console.log('canvas child')
        const ctx = canvas.getContext('2d');
        const imgObj = new Image()
        imgObj.src = props.base
        imgObj.onload = function () {
            let w = canvas.width;
            let nw = imgObj.naturalWidth;   //1350
            let nh = imgObj.naturalHeight;  //900
            let aspect = nw / nh;
            let h = w / aspect;
            canvas.height = h;
            ctx.fillStyle = "blue";
            ctx.fillRect(0, 0, 300, 300)
            ctx.fillStyle = "#ddd";
            ctx.drawImage(imgObj, 0, 0, 200, 200, 0, 0, 200, 200)
            ctx.fillRect(300, 0, 300, 300)
            ctx.drawImage(imgObj, 200, 0, 200, 200, 200, 0, 200, 200)
        }
    }, []);

    return (
        <>
            <canvas width={props.width} height={props.height} id={props.idname} />
        </>
    )
}

export default Canvas