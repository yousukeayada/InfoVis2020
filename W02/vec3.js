class Vec3{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v){
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }

    min(){
        return Math.min(this.x,this.y,this.z);
    }
    max(){
        return Math.max(this.x,this.y,this.z);
    }
    mid(){
        let tmp=[this.x,this.y,this.z];
        tmp.sort();
        return tmp[1];
    }
}

function task2(){
    let x=5,y=4,z=8;
    let v = new Vec3(x,y,z);
    let min = v.min();
    let mid = v.mid();
    let max = v.max();
    console.log(mid);

    document.getElementById("min").innerText += min;
    document.getElementById("mid").innerText += mid;
    document.getElementById("max").innerText += max;
}

function task3(){
    let x = [],y = [],z = [];
    for(let i=0;i<3;i++){
        x.push(Number(document.forms[i].x.value));
        y.push(Number(document.forms[i].y.value));
        z.push(Number(document.forms[i].z.value));
    }
    const a = Math.sqrt((x[0]-x[1])**2 + (y[0]-y[1])**2 + (z[0]-z[1])**2)
    const b = Math.sqrt((x[1]-x[2])**2 + (y[1]-y[2])**2 + (z[1]-z[2])**2)
    const c = Math.sqrt((x[2]-x[0])**2 + (y[2]-y[0])**2 + (z[2]-z[0])**2)

    const s = (a+b+c)/2;
    const S = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(S);
    document.getElementById("result").innerText += S;
}