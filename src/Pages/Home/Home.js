import * as React from "react";
import * as THREE from "three";
import * as facemesh from '@tensorflow-models/facemesh';

const Home = () => {
    const camera = React.useRef(null),
        video = React.useRef(null),
        three = React.useRef(null),
        scene = React.useRef(null),
        texture = React.useRef(null),
        reqLoop = React.useRef(null),
        renderer = React.useRef(null);

    let ellipse;

    const main = async () => {
        video.current.play();
        let videoWidth = video.current.videoWidth;
        let videoHeight = video.current.videoHeight;
        video.current.width = videoWidth;
        video.current.height = videoHeight;
        renderPrediction();
    }

    const getVideo = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                facingMode: 'user',
            }
        });
        video.current.srcObject = stream;
    }

    const onLoaded = () => {
        scene.current = new THREE.Scene();
        camera.current = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
        scene.current.add( camera.current );
        renderer.current = new THREE.WebGLRenderer( { antialias: true } );
        renderer.current.setPixelRatio( window.devicePixelRatio );
        renderer.current.setSize( window.innerWidth, window.innerHeight );
        texture.current = new THREE.VideoTexture( video.current );
        texture.current.minFilter = THREE.LinearFilter;
        texture.current.magFilter = THREE.LinearFilter;
        texture.current.format = THREE.RGBFormat;
        three.current.appendChild( renderer.current.domElement );
        let geometry = new THREE.PlaneGeometry(video.current.offsetWidth, video.current.offsetHeight);
        video.current.style.display = "none";
        let material = new THREE.MeshBasicMaterial( { map: texture.current } );
        let cube = new THREE.Mesh( geometry, material );
        scene.current.add( cube );
        window.addEventListener('resize', () => {
            renderer.current.setPixelRatio( window.devicePixelRatio );
            renderer.current.setSize( window.innerWidth, window.innerHeight );
            camera.current.updateProjectionMatrix();
        })
        camera.current.position.z = 5;
        renderer.current.render( scene.current, camera.current );
        main();
    }

    const renderPrediction = async () => {
        let videoWidth = video.current.videoWidth;
        let videoHeight = video.current.videoHeight;
        const model = await facemesh.load();
        const predictions = await model.estimateFaces(video.current);
        if (predictions.length > 0) {
            for (let i = 0; i < predictions.length; i++) {
                const keypoints = predictions[i].scaledMesh;
                const x = keypoints[0][0];
                const y = keypoints[0][1];
                let rWidth = window.innerWidth;
                let rHeight = window.innerHeight;
                if(ellipse) {
                    let curve = new THREE.EllipseCurve(
                        x + rWidth/2 - videoWidth/2, y + rHeight/2 - videoHeight/2,            // ax, aY
                        1, 1,           // xRadius, yRadius
                        0, 2*Math.PI,  // aStartAngle, aEndAngle
                        false,            // aClockwise
                        0                 // aRotation
                    );
                    let points = curve.getPoints( 50 );
                    let geometry = new THREE.BufferGeometry().setFromPoints( points );
                    geometry.translate(-rWidth/2,-rHeight/2,0);
                    geometry.scale(-1,-1,0)
                    geometry.rotateY(-Math.PI)
                    ellipse.geometry = geometry;
                } else if(ellipse == null) {
                    let curve = new THREE.EllipseCurve(
                        x + rWidth/2 - videoWidth/2, y + rHeight/2 - videoHeight/2,            // ax, aY
                        1, 1,           // xRadius, yRadius
                        0, 2*Math.PI,  // aStartAngle, aEndAngle
                        false,            // aClockwise
                        0                 // aRotation
                    );
                    let points = curve.getPoints( 50 );
                    let geometry = new THREE.BufferGeometry().setFromPoints( points );
                    
                    let material = new THREE.LineBasicMaterial( { linewidth: 10, color : 0x32EEDB } );
                    ellipse = new THREE.Line( geometry, material );
                    geometry.translate(-rWidth/2,-rHeight/2,0);
                    geometry.scale(-1,-1,0)
                    geometry.rotateY(-Math.PI)
                    scene.current.add(ellipse);
                }
            }
        }
        var animate = function () {
            reqLoop.current = requestAnimationFrame(renderPrediction);
            renderer.current.render( scene.current, camera.current );
        };
        animate();
    }

    React.useEffect(() => {
        getVideo();
    });
    React.useEffect(() => {
        return () => {
            if(scene.current) {
                scene.current.dispose();
            }
            if(texture.current) {
                texture.current.dispose();
            }
            if(renderer.current) {
                renderer.current.dispose();
            }
            if(camera.current) {
                camera.current.dispose();
            }
            if(ellipse) {
                ellipse.dispose();
            }
            if(reqLoop.current) {
                cancelAnimationFrame(reqLoop.current);
            }
        }
    });
    return (
        <React.Fragment>
            <div>
                <div ref={three}></div>
                <video onLoadedData={onLoaded} autoPlay ref={video}></video>
            </div>
        </React.Fragment>
    )
}

export default Home;