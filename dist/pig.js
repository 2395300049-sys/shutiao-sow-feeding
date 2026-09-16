/**
 * Shared adult sow mesh, metres. Facing -Z; origin is the floor below the barrel.
 * Vertex layout: position.xyz, outward normal.xyz, colour.rgb, part (stride 10).
 * Plain arrays deliberately match the installation renderer's indexed geometry.
 */
export function createPigMesh() {
  const mesh = { vertices: [], indices: [], mode: 'triangles' };
  const skin = [.79, .565, .515], belly = [.71, .475, .445];
  const nose = [.62, .355, .345], earInner = [.68, .395, .385];
  const hoof = [.255, .225, .225], eye = [.075, .060, .055];
  const add = (a,b) => a.map((v,i) => v+b[i]);
  const sub = (a,b) => a.map((v,i) => v-b[i]);
  const mul = (a,s) => a.map(v => v*s);
  const dot = (a,b) => a.reduce((s,v,i) => s+v*b[i],0);
  const cross = (a,b) => [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const unit = a => mul(a,1/(Math.hypot(...a)||1));
  const vertex = (p,n,c) => {
    const i=mesh.vertices.length/10;
    mesh.vertices.push(...p,...n,...c,0);
    return i;
  };
  function tri(a,b,c) {
    const point=i=>mesh.vertices.slice(i*10,i*10+3);
    const normal=i=>mesh.vertices.slice(i*10+3,i*10+6);
    const area=cross(sub(point(b),point(a)),sub(point(c),point(a)));
    if(Math.hypot(...area)<1e-10) return;
    if(dot(area,add(add(normal(a),normal(b)),normal(c)))<0) [b,c]=[c,b];
    mesh.indices.push(a,b,c);
  }
  function face(a,b,c,color) {
    const n=unit(cross(sub(b,a),sub(c,a)));
    tri(vertex(a,n,color),vertex(b,n,color),vertex(c,n,color));
  }
  function ellipsoid(center,radius,color,segments=18,rings=10,tilt=0,shade=false) {
    const base=mesh.vertices.length/10, co=Math.cos(tilt),si=Math.sin(tilt);
    const rot=p=>[p[0],p[1]*co-p[2]*si,p[1]*si+p[2]*co];
    for(let j=0;j<=rings;j++) {
      const a=j/rings*Math.PI,sa=Math.sin(a),ca=Math.cos(a);
      for(let i=0;i<=segments;i++) {
        const b=i/segments*Math.PI*2;
        const p=[sa*Math.cos(b),ca,sa*Math.sin(b)];
        const n=unit(rot(p.map((v,k)=>v/radius[k])));
        const c=shade?color.map((v,k)=>v+(ca>0?.032:-.043)*Math.abs(ca)):color;
        vertex(add(center,rot(p.map((v,k)=>v*radius[k]))),n,c);
      }
    }
    for(let j=0;j<rings;j++) for(let i=0;i<segments;i++) {
      const a=base+j*(segments+1)+i,b=a+segments+1;
      tri(a,b,a+1);tri(a+1,b,b+1);
    }
  }
  function tube(points,radii,color,segments=9) {
    const base=mesh.vertices.length/10;
    for(let j=0;j<points.length;j++) {
      const axis=unit(sub(points[Math.min(j+1,points.length-1)],points[Math.max(0,j-1)]));
      const u=unit(cross(axis,Math.abs(axis[1])<.85?[0,1,0]:[1,0,0]));
      const v=cross(axis,u);
      for(let i=0;i<=segments;i++) {
        const a=i/segments*Math.PI*2,n=add(mul(u,Math.cos(a)),mul(v,Math.sin(a)));
        vertex(add(points[j],mul(n,radii[j])),n,color);
      }
    }
    for(let j=1;j<points.length;j++) for(let i=0;i<segments;i++) {
      const a=base+(j-1)*(segments+1)+i,b=a+segments+1;
      tri(a,b,a+1);tri(a+1,b,b+1);
    }
    for(const j of [0,points.length-1]) {
      const n=unit(sub(points[j],points[j===0?1:j-1]));
      const center=vertex(points[j],n,color);
      for(let i=0;i<segments;i++)tri(center,base+j*(segments+1)+i,base+j*(segments+1)+i+1);
    }
  }
  function torso() {
    // z, centre height, horizontal radius, vertical radius. A continuous skin
    // avoids visible intersections between the barrel, shoulder and forehead.
    const keys=[[-.978,.526,.110,.076],[-.90,.527,.112,.089],
      [-.81,.546,.132,.121],[-.70,.583,.170,.171],
      [-.57,.609,.212,.212],[-.42,.625,.263,.270],
      [-.22,.640,.306,.325],[.04,.651,.319,.346],
      [.30,.655,.309,.338],[.51,.655,.271,.314],
      [.67,.654,.202,.262],[.77,.648,.106,.173],[.820,.644,.006,.014]];
    const rows=[],segments=26;
    const cat=(a,b,c,d,t)=>.5*((2*b)+(-a+c)*t+(2*a-5*b+4*c-d)*t*t+(-a+3*b-3*c+d)*t*t*t);
    for(let j=0;j<keys.length-1;j++)for(let k=0;k<3;k++){
      const t=k/3;
      rows.push(keys[j].map((_,i)=>cat(keys[Math.max(0,j-1)][i],keys[j][i],keys[j+1][i],keys[Math.min(keys.length-1,j+2)][i],t)));
    }
    rows.push(keys.at(-1));
    const base=mesh.vertices.length/10;
    for(let j=0;j<rows.length;j++){
      const [z,y,rx,ry]=rows[j],lo=rows[Math.max(j-1,0)],hi=rows[Math.min(j+1,rows.length-1)];
      const dy=(hi[1]-lo[1])/(hi[0]-lo[0]),dx=(hi[2]-lo[2])/(hi[0]-lo[0]),dr=(hi[3]-lo[3])/(hi[0]-lo[0]);
      for(let i=0;i<=segments;i++){
        const a=i/segments*Math.PI*2,c=Math.cos(a),s=Math.sin(a);
        const n=unit([ry*c,rx*s,-rx*s*(dy+dr*s)-ry*dx*c*c]);
        vertex([rx*c,y+ry*s,z],n,skin.map(v=>v+(s>0?.032:-.043)*Math.abs(s)));
      }
    }
    for(let j=1;j<rows.length;j++)for(let i=0;i<segments;i++){
      const a=base+(j-1)*(segments+1)+i,b=a+segments+1;
      tri(a,b,a+1);tri(a+1,b,b+1);
    }
    for(const j of [0,rows.length-1]) {
      const r=rows[j],a=vertex([0,r[1],r[0]],[0,0,j===0?-1:1],skin);
      for(let i=0;i<segments;i++)tri(a,base+j*(segments+1)+i,base+j*(segments+1)+i+1);
    }
  }
  // Broad, long barrel, rounded rump and a low, continuous shoulder/neck line.
  torso();
  // A sow's underside is low and heavy, with small paired teats.
  ellipsoid([0,.397,.085],[.224,.101,.492],belly,20,8);
  for(const x of [-.111,.111]) for(const z of [-.25,-.06,.13,.32])
    ellipsoid([x,.321,z],[.018,.028,.021],belly,8,5);
  // Distinct shoulders and hams narrow into short, weight-bearing lower legs.
  for(const side of [-1,1]) {
    const x=side*.217;
    ellipsoid([x,.428,-.378],[.089,.215,.125],skin,14,10,-.075,true);
    tube([[x,.365,-.407],[x,.238,-.433],[x,.099,-.442]],[.071,.052,.047],skin,10);
    ellipsoid([side*.210,.472,.508],[.125,.229,.186],skin,16,11,.23,true);
    tube([[side*.217,.368,.553],[side*.224,.242,.625],[side*.225,.098,.577]],[.080,.055,.045],skin,10);
    // Two separate toes per hoof leave a visible natural cloven split.
    for(const z of [-.454,.565]) for(const toe of [-1,1]) {
      const hx=(z<0?x:side*.225)+toe*.025;
      ellipsoid([hx,.045,z-.019],[.022,.045,.070],hoof,10,6);
    }
  }
  // The loft continues into a tapered muzzle and flattened oval nasal disc.
  ellipsoid([0,.526,-.978],[.128,.090,.030],nose,20,10);
  for(const side of [-1,1]) {
    ellipsoid([side*.049,.540,-1.006],[.022,.016,.0055],[.25,.135,.135],12,7);
    // Small eyes sit on the cheek, behind the snout, with a subtle fleshy rim.
    ellipsoid([side*.150,.685,-.700],[.015,.021,.022],[.67,.435,.400],12,7);
    ellipsoid([side*.160,.687,-.708],[.009,.012,.014],eye,12,7);
    ellipsoid([side*.167,.692,-.714],[.0025,.0030,.0030],[.70,.65,.60],8,5);
    // Thin folded ears. Outer tips droop forward rather than standing upright.
    const a=[side*.090,.770,-.597],b=[side*.177,.846,-.612];
    const c=[side*.320,.830,-.702],d=[side*.290,.707,-.805];
    const e=[side*.179,.747,-.714],ridge=[side*.211,.827,-.688];
    const top=[a,b,c,d,e],back=top.map(p=>add(p,[0,-.017,.008]));
    for(let i=0;i<top.length;i++) {
      if(side>0)face(top[i],top[(i+1)%5],ridge,i===2||i===3?earInner:skin);
      else face(top[(i+1)%5],top[i],ridge,i===2||i===3?earInner:skin);
      const k=(i+1)%5;
      face(top[i],back[i],back[k],skin);face(top[i],back[k],top[k],skin);
    }
    const bc=back.reduce((s,p)=>add(s,mul(p,1/5)),[0,0,0]);
    for(let i=0;i<5;i++)face(back[(i+1)%5],back[i],bc,skin);
    // A restrained mouth crease along each lower cheek.
    tube([[side*.096,.465,-.955],[side*.112,.451,-.879],[side*.109,.445,-.831]],[.003,.003,.0015],[.48,.285,.275],6);
  }
  // A small curled tail, attached high on the rump, in a near-vertical plane.
  const tail=[[0,.790,.743],[.006,.814,.801],[.012,.844,.844],
    [.016,.891,.866],[.020,.922,.907],[.024,.915,.947],
    [.027,.876,.963],[.029,.846,.937],[.030,.854,.909],[.031,.878,.908]];
  tube(tail,tail.map((_,i)=>.016-i*.00075),skin,8);
  ellipsoid(tail.at(-1),[.009,.009,.009],skin,8,5);
  const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];
  for(let i=0;i<mesh.vertices.length;i+=10) for(let k=0;k<3;k++) {
    min[k]=Math.min(min[k],mesh.vertices[i+k]);max[k]=Math.max(max[k],mesh.vertices[i+k]);
  }
  mesh.bounds=[min,max];
  return mesh;
}
