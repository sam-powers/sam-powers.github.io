const svg = document.getElementById('svg');
const rc = rough.svg(svg);

//line and rectangle
//svg.appendChild(rc.line(60, 60, 190, 60));
//svg.appendChild(rc.rectangle(10, 10, 100, 100));
//svg.appendChild(rc.rectangle(140, 10, 100, 100, {
//  fill: 'rgba(255,0,0,0.2)',
//  fillStyle: 'solid',
//  roughness: 2
//}));
//svg.appendChild(rc.rectangle(10, 130, 100, 100, {
//  fill: 'red',
//  stroke: 'blue',
//  hachureAngle: 60,
//  hachureGap: 10,
//  fillWeight: 5,
//  strokeWidth: 5
//}));


// ellipse and circle
//svg.appendChild(rc.ellipse(350, 50, 150, 80));
//svg.appendChild(rc.ellipse(610, 50, 150, 80, {
//  fill: 'blue'
//}));
//svg.appendChild(rc.circle(480, 50, 80, {
//  stroke: 'red', strokeWidth: 2,
//  fill: 'rgba(0,255,0,0.3)', fillStyle: 'solid'
//}));

//overlapping circles
//svg.appendChild(rc.circle(480, 150, 80, {
//  stroke: 'red', strokeWidth: 4,
//  fill: 'rgba(0,255,0,1)', fillWeight: 4, hachureGap: 6
//}));
//svg.appendChild(rc.circle(530, 150, 80, {
//  stroke: 'blue', strokeWidth: 4,
//  fill: 'rgba(255,255,0,1)', fillWeight: 4, hachureGap: 6
//}));

// linearPath and polygon
//svg.appendChild(rc.linearPath([[690, 10], [790, 20], [750, 120], [690, 100]], {
//  roughness: 0.7,
//  stroke: 'red', strokeWidth: 4
//}));
//svg.appendChild(rc.polygon([[690, 130], [790, 140], [750, 240], [690, 220]]));
//svg.appendChild(rc.polygon([[690, 250], [790, 260], [750, 360], [690, 340]], {
//  stroke: 'red', strokeWidth: 4,
//  fill: 'rgba(0,0,255,0.2)', fillStyle: 'solid'
//}));
//svg.appendChild(rc.polygon([[690, 370], [790, 385], [750, 480], [690, 460]], {
//  stroke: 'red',
//  hachureAngle: 65,
//  fill: 'rgba(0,0,255,0.6)'
//}));


// arcs
var r = 300;
var x = 350;
var y = 500;




svg.appendChild(rc.arc(x+5, y+5, r, r, 0, Math.PI / 2 +.5, true, {
  stroke: 'red', strokeWidth: 2,
  fill: 'rgba(255,255,0,0.4)', 
   hachureAngle: 22,
      hachureGap: 4
}));

svg.appendChild(rc.arc(x-5, y+5, r, r, Math.PI / 2 + .55, Math.PI , true, {
  stroke: 'red', strokeWidth: 2,
      hachureAngle: 95,
      hachureGap: 4,
  fill: 'rgba(255,255,0,0.4)',
           roughness:7

}));

svg.appendChild(rc.arc(x-5, y-5, r, r, Math.PI, Math.PI / 2 *3 + .65, true, {
  stroke: 'black', strokeWidth: 1,
      hachureAngle: 0,
      hachureGap: 4,
  fill: 'rgba(255,255,255,0.8)',
               roughness:5

}));

svg.appendChild(rc.arc(x+40, y-20, r, r, Math.PI/2 *3 + .66, Math.PI *2, true, {
  stroke: 'red', strokeWidth: 2,
      hachureAngle: 50,
      hachureGap: 4,
  fill: 'rgba(0,0,0,0.4)',
       roughness:4

}));


// draw sine curve
//let points = [];
//for (let i = 0; i < 20; i++) {
//  // 4pi - 400px
//  let x = (400 / 20) * i + 10;
//  let xdeg = (Math.PI / 100) * x;
//  let y = Math.round(Math.sin(xdeg) * 90) + 500;
//  points.push([x, y]);
//}
//svg.appendChild(rc.curve(points, {
//  roughness: 1.2, stroke: 'red', strokeWidth: 3
//}));

//On the Page
svg.appendChild(rc.polygon([[5, 300], [100, 275], [200, 225], [300, 200], [400, 100], [500,50], [500, 300]], {
   roughness:4,
    stroke: 'black', 
    strokeWidth: 2,
  hachureAngle: 75,
      hachureGap: 4,
  fill: 'rgba(0,0,255,0.6)'
}));

//svg.appendChild(rc.linearPath([[0, 295], [100, 245], [200, 195], [300, 145], [400, 95],  [500, 45]], {
//  roughness: 0.7,
//  stroke: 'red', strokeWidth: 4
//}));

svg.appendChild(rc.polygon([[5, 290], [100, 215], [200, 165], [300, 90], [400, 90], [500,40], [0, 40]], {
   roughness:4,
    stroke: 'black', 
    strokeWidth: 2,
  hachureAngle: 75,
      hachureGap: 4,
  fill: 'rgba(255,0,0,0.6)'
}));




