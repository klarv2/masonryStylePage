import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service'
import { Card } from '../../models/card'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  cards : Card[];
  constructor(private cardService: CardService) { 

  }
  getCardsFromServices(): void{
    this.cardService.getCards().subscribe(
      (updateCards) => {
        this.cards = updateCards;
      }
    );
  }
  ngOnInit() {
    this.getCardsFromServices();
  }

}
