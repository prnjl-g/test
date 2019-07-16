import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { GetDataService } from '../../../service/get-data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input() message: string;

    currentPage = 1;    previousPage = 1;
    pageSize=30;        elem;
    totalRecord;        metaData;
    header = [];        data;     
    temp1;              temp2;
    tempData;           json ={};
    headerFlag = true; 
    

    constructor(@Inject(DOCUMENT) private document: any, private getDataService:GetDataService, private router: Router) { }
    
    ngOnInit() 
    {
        this.loadData();
        this.elem = document.getElementById("tableID");  //To enable full screen for table
        this.loadMetaData();         
    } 

    
    loadData()
    {       
        this.getDataService.getData(this.currentPage,this.json)
        .subscribe( 
            data =>
            {
                this.data = data;
                if(this.headerFlag)
                    this.loadHeader();
            } )        
        this.totalData();   // To get total number of record which will be used for pagination
    }

    addFilter(columnName,currentValue)
    {       
        if(this.json[columnName] === undefined) 
        {
            this.json[columnName] = [currentValue];
            this.currentPage = 1;
        }
            
        else if( !(this.json[columnName] === undefined) )
        {
            let index = this.search(this.json, columnName, currentValue);        
            if(-1 != index)     //If user uncheck the checkBox then that element will be removed from the list
            {
                this.json[columnName].splice(index,1);  
                if(this.json[columnName].length==0)
                    delete this.json[columnName];
            }
            else 
            {
                this.json[columnName].push(currentValue);
            }
        }
        this.pager(1);        
    }

    goToInfoPage(employee){    
        this.router.navigate(['home',employee.id])
    }

    pager(newPage)
    {        
        this.loadData();
        this.currentPage = newPage;
        if(this.previousPage!=newPage)
            this.previousPage = this.currentPage;
    }
  
    loadHeader()
    {       
        this.headerFlag = false;        
        this.tempData = this.data;
        let i = 0;
        for (var x in this.tempData[0].details)
            this.header[i++] = x;

        this.temp1 = this.header;
        this.temp2 = this.message;
        this.temp1 = this.temp1.filter(val => !this.temp2.includes(val));
    }

    totalData()
    {
        this.getDataService.getTotalNoOfQueryRecords(this.json)
        .subscribe( data =>{this.totalRecord = data;})
    }

    loadMetaData()
    {
        this.getDataService.getMetaData()
        .subscribe( 
                data =>
                {
                    this.tempData = data;
                    this.metaData = this.tempData[0].map;
                } 
            )
    }

    search(myArray, columnName, currentValue)
    {
        for (var i=0; i < myArray[columnName].length; i++) 
            if (myArray[columnName][i] === currentValue) 
                return i;           
        return -1;
    }



    openFullscreen() {
        if (this.elem.requestFullscreen){
          this.elem.requestFullscreen();
        } else if (this.elem.mozRequestFullScreen) {
          this.elem.mozRequestFullScreen();
        } else if (this.elem.webkitRequestFullscreen) {
          this.elem.webkitRequestFullscreen();
        } else if (this.elem.msRequestFullscreen) {
          this.elem.msRequestFullscreen();
        }
      }
    
      closeFullscreen() {
        if (this.document.exitFullscreen) {
          this.document.exitFullscreen();
        } else if (this.document.mozCancelFullScreen) {
          this.document.mozCancelFullScreen();
        } else if (this.document.webkitExitFullscreen) {
          this.document.webkitExitFullscreen();
        } else if (this.document.msExitFullscreen) {
          this.document.msExitFullscreen();
        }
      }
}
