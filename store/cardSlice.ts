// store/cardSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import CardOne from "@/public/card-one.svg";
import CardTwo from "@/public/card-two.svg";
import CardThree from "@/public/card-three.svg";
import CardFour from "@/public/card-four.svg";
import CardFive from "@/public/card-five.svg";
import CardSix from "@/public/card-six.svg";
import CardSeven from "@/public/card-seven.svg";
import CardEight from "@/public/card-eight.svg";
import CardUn from "@/public/cardOne-one.svg"
import CardDeux from "@/public/cardTwo-two.svg"
import CardTroix from "@/public/cardThree-three.svg"
import CardQuatre from "@/public/cardFour-four.svg"
import CardCinq from "@/public/cardFive-five.svg"
import CardSixx from "@/public/cardSix-six.svg"
import CardSept from "@/public/cardSeven-seven.svg"
import CardHuit from "@/public/cardEight-eight.svg"
import CardIx from "@/public/cardNine-nine.svg"
import VectorOne from "@/public/Vector.svg"
import VectorTwo from "@/public/vectortwo.svg"
import VectorThree from "@/public/vectorthree.svg"
import VectorFour from "@/public/vectorFour.svg"

interface Card {
  id: number;
  title: string;
  image: string;
}
interface CardCarou {
  id: number;
  title: string;
  description: string;
}

interface CardState {
  cards: Card[];
  cardsDuo: Card[];
  cardsCarousel: CardCarou[];
  cardsCarouseltwo: CardCarou[];
}

const initialState: CardState = {
  cards: [
    { id: 1, title: "Card One", image: CardOne },
    { id: 2, title: "Card Two", image: CardTwo },
    { id: 3, title: "Card Three", image: CardThree },
    { id: 4, title: "Card Four", image: CardFour },
    { id: 5, title: "Card Five", image: CardFive },
    { id: 6, title: "Card Six", image: CardSix },
    { id: 7, title: "Card Seven", image: CardSeven },
    { id: 8, title: "Card Eight", image: CardEight },
  ],
    cardsDuo: [
    { id: 1, title: "Card One", image: CardUn },
    { id: 2, title: "Card Two", image: CardDeux },
    { id: 3, title: "Card Three", image: CardIx },
    { id: 4, title: "Card Four", image: CardQuatre },
    { id: 5, title: "Card Five", image: CardCinq },
    { id: 6, title: "Card Six", image: CardSixx },
    { id: 7, title: "Card Seven", image: CardSept },
    { id: 8, title: "Card Eight", image: CardHuit },
  ],
  cardsCarousel: [
    { id: 1, title: VectorOne, description: "I found my dream space. The reminders, document upload, and chat features saved me so much time. It really feels like this app was built with renters in mind." },
    { id: 2, title: VectorTwo, description: "  I found my dream space. The reminders, document upload, and chat features saved me so much time. It really feels like this app was built with renters in mind." },
    { id: 3, title: VectorThree, description: " I found my dream space. The reminders, document upload, and chat features saved me so much time. It really feels like this app was built with renters in mind." },
    { id: 4, title: VectorFour, description: " I found my dream space. The reminders, document upload, and chat features saved me so much time. It really feels like this app was built with renters in mind." },
  ],
    cardsCarouseltwo: [
    { id: 1, title: VectorOne, description: "I found my dream space. The reminders, document upload, and chat features saved me so much time. It really feels like this app was built with renters in mind." },
    { id: 2, title: VectorTwo, description: "  I found my dream space. The reminders, document upload, and chat features saved me so much time. It really feels like this app was built with renters in mind." },
    { id: 3, title: VectorThree, description: " I found my dream space. The reminders, document upload, and chat features saved me so much time. It really feels like this app was built with renters in mind." },
    { id: 4, title: VectorFour, description: " I found my dream space. The reminders, document upload, and chat features saved me so much time. It really feels like this app was built with renters in mind." },
  ],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
});

export default cardSlice.reducer;
