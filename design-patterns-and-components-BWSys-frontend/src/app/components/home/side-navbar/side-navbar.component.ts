import { Component } from '@angular/core';
import { GetDataService } from '../../../service/get-data.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent {

    constructor(private getDataService:GetDataService) { }
     
    header = [];        
    data;    
    myModel = true;
    doNotDisplay = ['1'];
    j=0;


    ngOnInit()
    {     
        this.getHeader();
    }

    getHeader()
    {       
        this.getDataService.getData(1,{})
        .subscribe(
            data=> 
            {
                this.data = data;
                let i = 0;
                for (var x in this.data[0].details)
                    this.header[i++] = x;
            }
        )
    }

    checkBoxClick(x)
    {
        if(!this.doNotDisplay.includes(x))
            this.doNotDisplay[this.j++] = x;
        else
        {            
            let index = this.doNotDisplay.indexOf(x);
            if (index > -1) 
                this.doNotDisplay.splice(index, 1);   
            this.j--;     
        }
    }
  
}
