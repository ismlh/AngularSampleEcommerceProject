import { Component, OnInit } from '@angular/core';
import { orderService } from '../../Servixes/products/orderService';
import { IOrder } from '../../models/IOrder';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  orders: IOrder[] = [] as IOrder[];
  startDate!: Date;
  endDate!: Date;
  order: IOrder = {} as IOrder;
  constructor(private _orderSer: orderService) {}
  ngOnInit(): void {
    this.getOrders();
  }
  getOrders() {
    this._orderSer.getCarts().subscribe((res) => {
      this.orders = res;
    });
  }
  deleteOrder(id: number) {
    this._orderSer.deleteOrder(id).subscribe((res) => {
      this.orders = this.orders.filter((oreder) => {
        return oreder.id != res.id;
      });
    });
  }
  Sort() {
    if (this.startDate && this.endDate) {
      this._orderSer
        .getInRange(this.startDate, this.endDate)
        .subscribe((res) => {
          this.orders = res;
        },(err)=>{
          alert(err)
        });
    }
    else{
      alert("Select Date Range")
    }
  }

  viewOrderDetalis(id: number) {
    this._orderSer.getCartById(id).subscribe((res) => {
      this.order = res;
    });
  }
}
