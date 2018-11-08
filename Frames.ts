export default class Frames{
    private history:Array<Array<string>> =new Array<Array<string>>();
    private time:number=0;
    public constructor (frameNum: number){
        for(let i=0;i<frameNum;i++)
        {
            this.history.push(new Array<string>);
            
        }
    }


}