import { Component } from '@angular/core';
import { ExcelService } from '../../service/excel.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent{

    data: any = [{
        eid: 'e101',
        ename: 'ravi',
        esal: 1000
        },{
        eid: 'e102',
        ename: 'ram',
        esal: 2000
        },{
        eid: 'e103',
        ename: 'rajesh',
        esal: 3000
        }];
        constructor(private excelService:ExcelService){
        }
        exportAsXLSX():void {
           this.excelService.exportAsExcelFile(this.data, 'sample');
        }

}
