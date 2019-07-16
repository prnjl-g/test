import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

    sub;
    id;
    product;
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
 
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       console.log(params);
        this.id = params.get('id'); 
        console.log(this.id);
       // let products=this._productService.getProducts();
       // this.product=products.find(p => p.productID==this.id);    
    });
}

}
