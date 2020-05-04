import * as React from "react";
import * as THREE from "three";
import * as facemesh from '@tensorflow-models/facemesh';

var scene, rWidth, rHeight, ellipse, camera, renderer;

const main = async () => {
    document.getElementById('video').play();
    let video = document.getElementById('video');
    let videoWidth = video.videoWidth;
    let videoHeight = video.videoHeight;
    video.width = videoWidth;
    video.height = videoHeight;
    renderPrediction();
}

const renderPrediction = async () => {
    let video = document.getElementById('video');
    let videoWidth = video.videoWidth;
    let videoHeight = video.videoHeight;
    const model = await facemesh.load();
    const predictions = await model.estimateFaces(video);
    if (predictions.length > 0) {
        if(scene.children.length > 2) {
            for(var i = scene.children.length-1; i > 1; i--) {
                scene.remove(scene.children[i]);
            }
        }
        for (let i = 0; i < predictions.length; i++) {
            const keypoints = predictions[i].scaledMesh;
            for (let i = 0; i < keypoints.length; i++) {
                const x = keypoints[i][0];
                const y = keypoints[i][1];
                var curve = new THREE.EllipseCurve(
                    x + rWidth/2 - videoWidth/2, y + rHeight/2 - videoHeight/2,            // ax, aY
                    1, 1,           // xRadius, yRadius
                    0, 2*Math.PI,  // aStartAngle, aEndAngle
                    false,            // aClockwise
                    0                 // aRotation
                );
                
                var points = curve.getPoints( 50 );
                var geometry = new THREE.BufferGeometry().setFromPoints( points );
                
                var material = new THREE.LineBasicMaterial( { linewidth: 10, color : 0x32EEDB } );
                
                ellipse = new THREE.Line( geometry, material );
                ellipse.name = "ellipse"+i;
                scene.add(ellipse);
                setTimeout(() => {
                    scene.remove(ellipse)
                },2000);
                geometry.translate(-rWidth/2,-rHeight/2,0);
                geometry.scale(-1,-1,0)
                geometry.rotateY(-Math.PI)
            }
        }
    }
    requestAnimationFrame(renderPrediction);
}

const getVideo = async () => {
    const video = document.getElementById('video');
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            facingMode: 'user',
        }
    });
    video.srcObject = stream;
}

const onLoaded = () => {
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
    scene.add( camera );
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    rWidth = window.innerWidth;
    rHeight = window.innerHeight;
    let video = document.getElementById('video')
    var texture = new THREE.VideoTexture( video );
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    document.getElementById('three').appendChild( renderer.domElement );
    console.log(video.videoWidth, video.videoHeight);
    var geometry = new THREE.PlaneGeometry(video.offsetWidth, video.offsetHeight);
    document.getElementById('video').style.display = "none";
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    window.addEventListener('resize', () => {
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.updateProjectionMatrix();
    })
    camera.position.z = 5;
    var animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };
    animate();
    main();
}

const Home = () => {
    React.useEffect(() => {
        getVideo();
    });
    return (
        <React.Fragment>
            <div>
                <div id="three"></div>
                <video onLoadedData={onLoaded} autoPlay id="video"></video>
            </div>
        </React.Fragment>
    )
}

export default Home;