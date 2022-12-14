import React, { useEffect, memo, forwardRef, useImperativeHandle } from 'react';
import { jsPDF } from 'jspdf'

const Canvas = (props, ref) => {
    const imgDataList = []

    const generateCanva = () => {
        const canvas = document.getElementById(props.idname)
        console.log("Child rendered")
        // canvas.width = window.innerWidth;
        let aspectRatio;
        const ratio = props.setting.ratio
        ratio === 'l' ? aspectRatio = 1.41 : aspectRatio = 0.70
        const cols = props.setting.cols;
        //console.log('canvas child')
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const imgObj = new Image()
        imgObj.src = props.base
        imgObj.onload = function () {
            let w = canvas.width;
            let nw = imgObj.naturalWidth;
            let nh = imgObj.naturalHeight;
            const imgAR = nw / nh
            let pageWidth = w / cols;
            let pageHeight = pageWidth / aspectRatio
            let imgWidth = nw / cols;
            let imgHeight = imgWidth / aspectRatio
            let numRows = Math.ceil(nh / imgHeight)

            // console.log('Page width/height', pageHeight, pageWidth)
            // console.log('image width/height', imgWidth, imgHeight)
            // console.log('image natural width/height', nw, nh)
            // console.log('rows', numRows)
            ctx.drawImage(imgObj, 0, 0, nw, nh, 0, 0, w, w / imgAR)

            for (let r = 0; r < numRows; r++) {
                for (let i = 0; i < cols; i++) {
                    var imgData = ctx.getImageData(pageWidth * i, pageHeight * r, pageWidth, pageHeight);
                    imgDataList.push(imgData)
                }
            }
            let count = 0
            for (let r = 0; r < numRows; r++) {
                for (let i = 0; i < cols; i++) {
                    ctx.fillStyle = "#fff";
                    ctx.fillRect(pageWidth * i, pageHeight * r, pageWidth, pageHeight)
                    ctx.putImageData(imgDataList[count], pageWidth * i, pageHeight * r)
                    ctx.fstrokeStyle = "#000";
                    ctx.strokeRect(pageWidth * i, pageHeight * r, pageWidth, pageHeight);
                    count++;
                }
            }
        }
    }

    // const printPDF = () => {
    //     const doc = new jsPDF(props.setting.ratio, "mm", "a4");
    //     const width = doc.internal.pageSize.getWidth();
    //     const height = doc.internal.pageSize.getHeight();
    //     imgDataList.forEach(val => {
    //         doc.addImage(val, 'JPEG', 0, 0, width, height)
    //         doc.addPage()
    //     })
    //     doc.text(width / 2 - 50, height / 2, 'Thanks for using Framer App')
    //     doc.save("framer_generated.pdf");
    // }

    useEffect(() => {
        generateCanva();
    });

    useImperativeHandle(ref, () => {
        function pdfDownload() {
            const doc = new jsPDF(props.setting.ratio, "mm", "a4");
            const width = doc.internal.pageSize.getWidth();
            const height = doc.internal.pageSize.getHeight();
            imgDataList.forEach(val => {
                doc.addImage(val, 'JPEG', 0, 0, width, height)
                doc.addPage()
            })
            doc.text(width / 2 - 50, height / 2, 'Thanks for using Framer App')
            doc.save("framer_generated.pdf");
        }
        return pdfDownload
    })
    return (
        <>
            <canvas width={props.width} height={props.height} id={props.idname} />
        </>
    )
}

export default memo(forwardRef(Canvas))