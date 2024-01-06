const second = document.getElementById('second');
const svg = document.getElementById('svg');
const curvePath = document.getElementById('curve');
const point = document.getElementById('point');

function updateSVGSize() {
    const width = second.clientWidth;
    const height = second.clientHeight;

    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    curvePath.setAttribute('d', `M0 ${height} C${width * 0.25} ${height * 0.5}, ${width * 0.75} ${height * 0.5}, ${width} 0`);
}

window.addEventListener('resize', updateSVGSize);
updateSVGSize();

const pathLength = curvePath.getTotalLength();
curvePath.style.strokeDasharray = pathLength;

gsap.set(point, { x: 0, y: svg.clientHeight });

gsap.to(point, {
    duration: 60,
    motionPath: {
        path: curvePath,
        align: curvePath,
        autoRotate: true
    },
    repeat: -1,
});
