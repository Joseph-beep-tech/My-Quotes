import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Joseph okoth', '', 'i love my career',new Date(2020,12,12)),
    new Quote(1, 'John Lennon', '','Life is what happens when you are busy making other plans',new Date(2019,9,14)),
    new Quote(2,'Walt Disney', '', 'The way to get started is to quit talking and begin doing.',new Date(1999,6,9)),
    new Quote(3,'Eleanor Roosevelt', '', 'If life were predictable it would cease to be life, and be without flavor',new Date(2010,1,12)),
    new Quote(4,'Nelson Mandela', '', 'The greatest glory in living lies not in never falling, but in rising every time we fall.',new Date(1995,11,18)),
    new Quote(5,'Eleanor Roosevelt', '', 'The future belongs to those who believe in the beauty of their dreams',new Date(1918,2,14)),
    new Quote(6,'Aristotle', '', 'It is during our darkest moments that we must focus to see the light.',new Date(2005,5,11)),
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
upvote(index){
  this.quotes[index].upvote++;
}
downvote(index){
  this.quotes[index].downvote++;
}
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }



deleteQuote(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
