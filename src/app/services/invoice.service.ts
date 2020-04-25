import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  public invoiceList = [
    {
      title: 'アクエリアス',
      url: 'aquarius',
      icon: 'mail',
      imgPath: 'assets/img/qrCode/aquarius.png',
      xym: '10 円'
    },
    {
      title: 'ビックゼリー',
      url: 'big-zeri',
      icon: 'warning',
      imgPath: 'assets/img/qrCode/big-zeri.png',
      xym: '20 円'
    },
    {
      title: 'チロルチョコ',
      url: 'chiroru-choko',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/chiroru-choko.png',
      xym: '20 円'
    }
  ];

  constructor() { }

  getInvoiceList() {
    return this.invoiceList;
  }

  getInvoice(key: string) {
    for (const invoice of this.invoiceList) {
      if (invoice.url === key) {
        return invoice;
      }
    }
  }
}
