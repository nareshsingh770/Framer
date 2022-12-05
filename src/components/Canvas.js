import React, { useEffect } from 'react'

const Canvas = (props) => {
    useEffect(() => {
        const canvas = document.getElementById(props.idname)
        const aspectRatio = 0.70;
        const cols = 4;
        //console.log('canvas child')
        const ctx = canvas.getContext('2d');
        const imgObj = new Image()
        imgObj.src = props.base
        imgObj.onload = function () {
            let w = canvas.width;
            let nw = imgObj.naturalWidth;
            let nh = imgObj.naturalHeight;
            let pageWidth = w / cols;
            let pageHeight = pageWidth / aspectRatio
            let imgWidth = nw / cols;
            let imgHeight = imgWidth / aspectRatio
            let numRows = Math.ceil(nh / imgHeight)

            // console.log('Page width/height', pageHeight, pageWidth)
            // console.log('image width/height', imgWidth, imgHeight)
            // console.log('image natural width/height', nw, nh)
            // console.log('rows', numRows)

            for (let r = 0; r < numRows; r++) {
                for (let i = 0; i < cols; i++) {
                    ctx.fillStyle = "#fff";
                    ctx.fillRect(pageWidth * i, pageHeight * r, pageWidth, pageHeight)
                    ctx.drawImage(imgObj, imgWidth * i, imgHeight * r, imgWidth, imgHeight, pageWidth * i, pageHeight * r, pageWidth, pageHeight)
                    ctx.fstrokeStyle = "#000";
                    ctx.strokeRect(pageWidth * i, pageHeight * r, pageWidth, pageHeight);
                }
            }


            // ctx.drawImage(imgObj, 0, 0, 200, 200, 0, 0, 200, 200)
            // ctx.drawImage(imgObj, 200, 0, 200, 200, 200, 0, 200, 200)
        }
    });

    return (
        <>
            <canvas width={props.width} height={props.height} id={props.idname} />
        </>
    )
}

export default Canvas