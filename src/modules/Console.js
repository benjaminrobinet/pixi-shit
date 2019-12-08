class Console{
    constructor(){

    }

    log(){
        if(window && window.hasOwnProperty('console'))
            window.console.log(...arguments);
    }
}
const _Console = new Console();
export default _Console;