import Card from "@/components/common/Card";
import Gnb from "@/components/common/Gnb";
import Header from "@/components/common/Header";
import { LIKE_LIST } from "@/test/like";

export default function Like() {
    return (
        <>
            <Header cart>좋아요</Header>
            {LIKE_LIST.length === 0 ? (
                <span className="fixed top-1/2 left-1/2 -translate-x-1/2 text-gray600">
                    좋아요한 상품이 없어요
                </span>
            ) : (
                <div className="full min-h-full pt-15.5 pb-21 px-5 flex flex-col gap-3">
                    <span className="text-sm text-gray700">
                        총 {LIKE_LIST.length}개
                    </span>
                    {LIKE_LIST.map((v, i) => (
                        <Card
                            key={i}
                            title={v.name}
                            sub={v.sub}
                            price={v.price}
                            sale={v.sale}
                            like={true}
                        ></Card>
                    ))}
                </div>
            )}
            <Gnb />
        </>
    );
}
