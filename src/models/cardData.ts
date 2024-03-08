class cardData{
    
    id: number;
    projectTitle: string;
    projectNumber : number;
    region: string;
    status: string;
    spw: string;
    contractValue: number

    constructor(_id: number,_projectTitle : string ,_projectNumber: number , _region: string, _status: string, _spw: string, _contractValue:number){
        this.id=_id;
        this.projectTitle=_projectTitle;
        this.projectNumber=_projectNumber;
        this.region=_region;
        this.status = _status;
        this.spw=_spw;
        this.contractValue = _contractValue;
    }
}
export default cardData; 