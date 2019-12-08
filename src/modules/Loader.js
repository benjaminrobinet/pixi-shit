import * as PIXI from 'pixi.js';
// import Console from "./Console";

class Loader extends PIXI.Loader{
    constructor(){
        super();
    }
}

const _loader = new Loader();

let mixin = function(){
    const preload = this.$options.preload;
    if(preload && typeof preload === "function"){
        let _toAdd = preload.bind(this)(_loader);
        let _currentResources = Object.keys(_loader.resources);
        _loader.add(_toAdd.filter(d => {
            let name;
            if(typeof d === "string") name = d;
            else if(typeof d === "object") name = d.name;

            return (_currentResources.indexOf(name) === -1)
        }));
    }

    const progress = this.$options.progress;
    if(progress && typeof progress === "function")
        _loader.onProgress.add(progress.bind(this));

    const loaded = this.$options.loaded;
    if(loaded && typeof loaded === "function")
        _loader.onComplete.add(loaded.bind(this));
};

export default _loader;
export { Loader, mixin }