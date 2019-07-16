import { Component } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { Router } from '@angular/router';

const URL = 'http://localhost:8080/uploadFile';

class MyUploader extends FileUploader {
    onAfterAddingFile(file: any) {
      file.withCredentials = false;
    }
  }

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent{

    uploader:MyUploader;
    constructor(private router: Router){ }

    ngOnInit() 
    {
        this.uploader = new MyUploader({ url: URL });
        this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
        this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
    }

    onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any 
    {
        let data = JSON.parse(response);
        console.log(data);
    }

    onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any 
    {
        let error = JSON.parse(response);
        console.log(error);
    }

    goToHomePage(){
        setTimeout(()=>{ this.router.navigate(['home']); }, 1000);        
    }
}
