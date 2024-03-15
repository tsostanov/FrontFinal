export class CanvasDrawer{

    canvas;
    ctx;
    lastR;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.fillStyle = "darkblue";
        this.drawAxes();
    }

    drawDot(x, y, r, result){
        //  console.log("r=" + r + " lastR=" + this.lastR);
        //console.log("x=" + x + " y=" + y + " r=" + r);
        x = this.xToCanvas(x);
        y = this.yToCanvas(y);
        // console.log("x=" + x + " y=" + y + " r=" + r);
        if(r == this.lastR){
            if(result) {this.ctx.fillStyle = "green";}
            else {this.ctx.fillStyle = "red";}

            //this.ctx.fillRect(x, y, 3, 3);
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.arc(x, y, 3, 0,   2* Math.PI, false);
            this.ctx.fill();

            this.ctx.fillStyle = "darkblue";
        }
    }


    drawAllDots(dots){
        for(let i in dots){
            //this.drawDot(dot);
            //console.log(dot);
            let dot = dots[i];
            this.drawDot(dot.x, dot.y, dot.r, dot.result);

        }
    }

    //перерисовывает график - рисует область, оси и все точки
    drawArea(r, dots){
        this.lastR = r;
        sessionStorage.setItem("lastR", this.lastR);
        this.ctx.clearRect(0,0, 400, 400);
        r = this.rToCanvas(r);

        this.ctx.beginPath();
        this.ctx.moveTo(200, 200);
        this.ctx.lineTo(200 - (r/2), 200);
        this.ctx.lineTo(200 - (r/2), 200 - r);
        this.ctx.lineTo(200, 200 - r);
        this.ctx.lineTo(200, 200);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(200, 200);
        this.ctx.lineTo(200, 200 + r);
        this.ctx.lineTo(200 - r, 200);
        this.ctx.lineTo(200, 200);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(200, 200, r/2, 0,   Math.PI/2, false);
        this.ctx.moveTo(200, 200 + (r/2));
        this.ctx.lineTo(200, 200);
        this.ctx.lineTo(200 + (r/2), 200);
        this.ctx.fill();

        this.drawAxes();
        this.drawAllDots(dots);
    }

    //рисует оси
    drawAxes(){
        this.ctx.beginPath();
        this.ctx.moveTo(0, 200);
        this.ctx.lineTo(400,200);
        this.ctx.moveTo(200, 0);
        this.ctx.lineTo(200, 400)
        this.ctx.stroke();

        this.drawArrowhead(0 ,200, 400, 200);
        this.drawArrowhead(200, 400, 200, 0);

        this.drawAxisLabel('x', 390, 220);
        this.drawAxisLabel('y', 180, 10);

        this.drawTicks('x');
        this.drawTicks('y');

        this.drawAxisLabel('0', 190, 210);

        const centerX = 200;
        const centerY = 200;
        const r = this.rToCanvas(this.lastR);

        this.drawAxisLabel('R', centerX + r, centerY - 5);
        this.drawAxisLabel('R/2', centerX + r / 2, centerY - 5);
        this.drawAxisLabel('R', centerX + 5, centerY - r);
        this.drawAxisLabel('R/2', centerX + 5, centerY - r / 2);
        this.drawAxisLabel('- R', centerX - r, centerY - 5);
        this.drawAxisLabel('- R/2', centerX - r / 2, centerY - 5);
        this.drawAxisLabel('- R', centerX + 5, centerY + r);
        this.drawAxisLabel('- R/2', centerX + 5, centerY + r / 2);


    }

//рисует стрелочки
    drawArrowhead(fromX, fromY, toX, toY){
        const headLength = 7;
        const angle = Math.atan2(toY - fromY, toX - fromX);
        this.ctx.moveTo(toX, toY);
        this.ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6));
        this.ctx.moveTo(toX, toY);
        this.ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6));
        this.ctx.stroke();
    }

    //рисует черточки
    drawTicks(axis ){
        const numTicks = 13;
        const tickSpacing = 600 / (numTicks - 1);
        const tickSize = 5;
        this.ctx.beginPath();

        for (let i = 0; i < numTicks; i++) {
            const tickPosition = i * tickSpacing - 600 / 2;
            if (axis === 'x') {
                this.ctx.moveTo(200 + tickPosition, 200 - tickSize / 2);
                this.ctx.lineTo(200 + tickPosition, 200 + tickSize / 2);
            } else {
                this.ctx.moveTo(200 - tickSize / 2, 200 + tickPosition);
                this.ctx.lineTo(200 + tickSize / 2, 200 + tickPosition);
            }
        }
        this.ctx.stroke();
    }

    // рисует подписи
    drawAxisLabel(label, x, y){
        //  this.ctx.fillStyle = 'rgba(0, 0, 0, 1)'; // Цвет и прозрачность заливки
        this.ctx.fillStyle = "black"
        this.ctx.font = '14px Arial';
        this.ctx.fillText(label, x, y);
        this.ctx.fillStyle = "darkblue";
    }


    //переводят координаты туда и обратно
    xToCanvas(x){
        return (x * 100) + 200;
    }
    yToCanvas(y){
        return 200 - (y * 100);
    }
    rToCanvas(r){
        return r * 100;
    }
    xFromCanvas(x){
        return (x - 200)/100;
    }
    yFromCanvas(y){
        return (200 - y)/100;
    }
    windowToCanvas(x, y){
        let bbox = this.canvas.getBoundingClientRect();
        return {x: x -bbox.left * (this.canvas.width / bbox.width),
            y: y - bbox.top * (this.canvas.height / bbox.height)
        };
    }
}