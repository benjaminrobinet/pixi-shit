import {EventEmitter} from "events";

class Viewport extends EventEmitter{
    constructor(){
        super();
        this.onResize = this.onResize.bind(this);
        this.attach();
    }

    attach(){
        window.addEventListener('resize', this.onResize);
    }

    onResize(){
        this.emit('resize');
    }

    get width(){
        return window.innerWidth;
    }

    get height(){
        return window.innerHeight;
    }

    install(Vue){
        Vue.mixin({
            mounted: this.onResize
        })
    }
}

const _viewport = new Viewport();

export default _viewport;
export { Viewport };