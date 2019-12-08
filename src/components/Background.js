import * as PIXI from "pixi.js";
import Loader from "@/modules/Loader";

export default class Background{
    constructor(app){
        this.app = app;
        this.background = new PIXI.Sprite.from(Loader.resources[Object.keys(Loader.resources)[0]].url);
        this.background.width = this.app.screen.width;
        this.background.height = this.app.screen.height;
        this.app.stage.addChild(this.background);

        this.app.stage.interactive = true;
        this.tPos = new PIXI.Point(0, 0);
        this.pos = new PIXI.Point(0, 0);
        this.delta = new PIXI.Point(0, 0);

        this.cursorPoints = [
            [0, 25],
            [25, 0],
            [50, 0],
            [75, 25],
            [75, 50],
            [50, 75],
            [25, 75],
            [0, 50]
        ];


        this.cursor = new PIXI.Graphics();
        this.cursor.pivot.x = 75 / 2;
        this.cursor.pivot.y = 75 / 2;
        this.cursor.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        this.app.stage.addChild(this.cursor);

        this.app.ticker.add(this.render.bind(this));
        this.app.stage.on('mousemove', this.onMouseMove.bind(this));
    }

    onMouseMove(e){
        this.tPos.copyFrom(e.data.global);
    }

    render(){
        this.delta.x = this.tPos.x - this.pos.x;
        this.delta.y = this.tPos.y - this.pos.y;

        // let angle = Math.atan2(this.delta.y * 0.16, this.delta.x * 0.16); // angle in radian
        // let xDir = Math.cos(angle);
        // let yDir = Math.sin(angle);

        this.pos.x += this.delta.x * 0.08;
        this.pos.y += this.delta.y * 0.08;

        this.cursor.position.copyFrom(this.pos);

        this.cursor.clear();
        this.cursor.lineStyle(5, 0xAA0000, 1);

        this.cursorPath = [];
        this.cursorPoints.forEach(p => {

            this.cursor.lineTo(p[0], p[1]);
            this.cursorPath.push(p[0], p[1]);
        });

        // window.console.log(this.cursorPath);

        // this.cursor.drawPolygon(this.cursorPath);
        this.cursor.bezierCurveTo(...this.cursorPath);
        // this.cursor.endFill();
    }
}