export class LoggingService{
  public logStatusChange(message: string){
    console.log('A server status changed, new status: ' + message);  
  }
}