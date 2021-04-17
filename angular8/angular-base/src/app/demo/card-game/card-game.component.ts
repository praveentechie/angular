import { Component, OnInit } from "@angular/core";
import { CardDetails } from "./model/CardDetails";
import { shuffle } from "lodash";

@Component({
  templateUrl: './card-game.component.html'
})
export class CardGame implements OnInit {
  cardList: Array<CardDetails>;
  matchedCards: Array<CardDetails>;
  selectedCard: CardDetails;
  difficultyLevel: number;
  failedAttempts: number;

  ngOnInit(): void {
    this.cardList = [];
    this.matchedCards = [];
    this.difficultyLevel = this.difficultyLevel || 8;
    this.initCards();
  }

  initCards(): void {
    let totalCards = this.difficultyLevel;
    this.failedAttempts = 0;
    let uniqueNumbers = CardGame._getUniqValues(totalCards/2);
    this.cardList = uniqueNumbers.reduce((cardList, currentValue) => {
      cardList.push(new CardDetails(cardList.length, currentValue));
      cardList.push(new CardDetails(cardList.length, currentValue));
      return cardList;
    }, []);

    this.cardList = shuffle(this.cardList);
  }

  changeDifficultyLevel(event) {
    this.difficultyLevel = event.target.value;
    this.ngOnInit();
  }

  toggleVisible = (cardId: number, visible: boolean) => {
    let selectedCard = this._getCard(cardId)
    selectedCard.visible = visible;
    if (!this.selectedCard) {
      this.selectedCard = selectedCard;
    } else if (this.selectedCard.id !== selectedCard.id) {
      this._checkForMatch(this.selectedCard, selectedCard);
    }
  }

  private _checkForMatch(selectedCard: CardDetails, matchedCard: CardDetails) {
    setTimeout(() => {
      if (CardGame._isMatch(selectedCard, matchedCard)) {
        CardGame._matchSuccessful(this.cardList, selectedCard.id, matchedCard.id);
        this.selectedCard = null;
        alert('Yay!!! You found a successful match');
      } else {
        this.failedAttempts++;
        this._getCard(selectedCard.id).visible = false;
        this._getCard(matchedCard.id).visible = false;
        this.selectedCard = null;
        alert('Oops!!! That\'s not right. Try again');
      }
    }, 500);
  }

  private static _isMatch(selectedCard: CardDetails, matchedCard: CardDetails) {
    return selectedCard != null && matchedCard != null && selectedCard.value === matchedCard.value;
  }

  private static _matchSuccessful(cardList: Array<CardDetails>, selectedCardId: number, matchedCardId: number) {
    CardGame._getCard(cardList, selectedCardId).matched = true;
    CardGame._getCard(cardList, matchedCardId).matched = true;
  }

  private _getCard(cardId: number) {
    return CardGame._getCard(this.cardList, cardId);
  }

  private static _getCard(cardList: Array<CardDetails>, cardId: number) {
    return cardList.find(card => card.id === cardId);
  }

  private static _getUniqValues(count: number): Array<number> {
    let uniqueNumberList = [];
    while (uniqueNumberList.length < count) {
      let randomNumber = Math.ceil(Math.random() * 100);
      if (!uniqueNumberList.includes(randomNumber)) {
        uniqueNumberList.push(randomNumber);
      }
    }
    return uniqueNumberList;
  }
}