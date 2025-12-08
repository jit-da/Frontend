import { Handbag, HandCoins, Heart, Ticket } from "lucide-react";
import ButtonListItem from "./ButtonListItem";

export default function ButtonList() {
    return (
        <ul className="w-full flex justify-between px-5">
            <ButtonListItem name="쿠폰" amount="1장">
                <Ticket strokeWidth={1.5} size={32} />
            </ButtonListItem>
            <ButtonListItem name="포인트" amount="1,763P">
                <HandCoins strokeWidth={1.5} size={32} />
            </ButtonListItem>
            <ButtonListItem name="장바구니" amount="0">
                <Handbag strokeWidth={1.5} size={32} />
            </ButtonListItem>
            <ButtonListItem name="좋아요" amount="2">
                <Heart strokeWidth={1.5} size={32} />
            </ButtonListItem>
        </ul>
    );
}
