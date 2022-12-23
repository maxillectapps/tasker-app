import { File } from "../interfaces/file";


export class ToDo implements File{
    
   
    id!:number;
    title!:string;
    timestamp!:string;
    color!:string;
    status!:string;
    priority!:string;
    
    // Interface properties
    image: string='';
    attachment: string='';
    type!: string;
}