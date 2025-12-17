import home1 from "@/assets/icons/home/1.png";
import home2 from "@/assets/icons/home/2.png";
import home3 from "@/assets/icons/home/3.png";
import home4 from "@/assets/icons/home/4.png";
import home5 from "@/assets/icons/home/5.png";
import home6 from "@/assets/icons/home/6.png";
import home7 from "@/assets/icons/home/7.png";
import home8 from "@/assets/icons/home/8.png";
import home9 from "@/assets/icons/home/9.png";
import home10 from "@/assets/icons/home/10.png";
import home11 from "@/assets/icons/home/11.png";
import home12 from "@/assets/icons/home/12.png";
import jajae from "@/assets/images/jajae.png";
import magamjae from "@/assets/images/magamjae.png";
import paint from "@/assets/images/paint.png";

export const MAIN_BUTTON_LIST = [
    {
        title: "자재",
        sub: "시공에 필요한 기초 자재",
        src: jajae,
    },
    {
        title: "마감재",
        sub: "공간을 빛내줄 마감재",
        src: magamjae,
    },
    {
        title: "페인트",
        sub: "브랜드별 색상 비교부터 주문까지",
        src: paint,
    },
];

export const HEAVY_EQUIPMENT_LIST = [
    {
        id: 1,
        name: "굴삭기",
        src: home1,
    },
    {
        id: 2,
        name: "사다리차",
        src: home2,
    },
    {
        id: 3,
        name: "스카이",
        src: home3,
    },
    {
        id: 4,
        name: "레미콘",
        src: home4,
    },
    {
        id: 5,
        name: "펌프카",
        src: home5,
    },
    {
        id: 6,
        name: "지게차",
        src: home6,
    },
    {
        id: 7,
        name: "롤러",
        src: home7,
    },
    {
        id: 8,
        name: "로더",
        src: home8,
    },
    {
        id: 9,
        name: "불도저",
        src: home9,
    },
    {
        id: 10,
        name: "피니셔",
        src: home10,
    },
    {
        id: 11,
        name: "타워크레인",
        src: home11,
    },
    {
        id: 12,
        name: "운반",
        src: home12,
    },
];

export const PHONE_NUMBER = "010-8119-9296";

export const MATERIAL_CATEGORY = [
    {
        middle_category: "전체",
        minor_category: [],
    },
    {
        middle_category: "건자재",
        minor_category: ["석고보드", "시멘트", "단열재", "석고텍스"],
    },
    {
        middle_category: "목자재",
        minor_category: ["합판", "오징어합판", "MDF", "보드", "각재", "몰딩"],
    },
    {
        middle_category: "금속",
        minor_category: [
            "파이프",
            "형강",
            "철판",
            "갈바",
            "앵글",
            "판넬",
            "경량",
        ],
    },
    {
        middle_category: "방수자재",
        minor_category: ["방수제"],
    },
    {
        middle_category: "설비자재",
        minor_category: [
            "PB배관(에이콘)",
            "PE배관(폴리에틸렌)",
            "PP배관(폴리프로필렌)",
            "PVC배관",
            "메타폴관",
            "스텐주름관",
            "PPC배관",
            "엑셀배관",
        ],
    },
    {
        middle_category: "전기자재",
        minor_category: [
            "PF파이프",
            "후렉시블",
            "CD관",
            "IV전선",
            "CV케이블",
            "HIV전선",
            "부자재",
        ],
    },
    {
        middle_category: "유리",
        minor_category: ["일반유리", "강화유리", "접합유리"],
    },
    {
        middle_category: "닥트",
        minor_category: ["모터", "직관", "엘보", "레듀사", "부속"],
    },
    {
        middle_category: "잡자재",
        minor_category: [],
    },
];
