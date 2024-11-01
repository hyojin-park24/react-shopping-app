import { productDetailDto, tabDto } from '../types';

export const tabInfos: tabDto[] = [
  { id: 'All', name: '모두' },
  { id: 'Electronics', name: '전자기기' },
  { id: 'Jewelry', name: '쥬얼리' },
  { id: "men's clothing", name: '남성의류' },
  { id: "women's clothing", name: '여성의류' },
];

export const products: productDetailDto[] = [
  {
    id: 1,
    name: '[아이유 PICK] MIOELLO 목걸이 (JJMENQ4BF432SR420)',
    img: 'https://webimg.jestina.co.kr/UpData2/item/G2000027375/20240903175707M.png',
    price: 198000,
    description:
      '너와 내 심장이 함께 뛰는 순간을 표현한 나만의 보석이라는 뜻의 Mioello 컬렉션',
    type: 'Jewelry',
  },
  {
    id: 2,
    name: '[아이유 PICK] J.Livera 14K 체인 목걸이 (JJJTN04BF010R4420)',
    img: 'https://webimg.jestina.co.kr/UpData2/item/G2000027380/20240903180237M.png',
    price: 498000,
    description:
      "'당신의 J.ESTINA'라는 컨셉으로 모던 시크, 페미닌 감성을 컨템포러리하게 담아낸 제이에스티나만의 베이직 컬렉션",
    type: 'Jewelry',
  },
  {
    id: 3,
    name: 'BASIC PERLINA 14K 바로크 담수진주 귀걸이 (JJP1EF4BF223R40A0)',
    img: 'https://webimg.jestina.co.kr/UpData2/item/G2000027309/20240802130528ZM.png',
    price: 369000,
    description:
      '클래식한 진주에 새로운 변주를 더한 페를리나 컬렉션',
    type: 'Jewelry',
  },
  {
    id: 4,
    name: '[아이유 PICK] HERBOW 14K 쿠션컷 목걸이 (JJRBNQ4BF279R4420)',
    img: 'https://webimg.jestina.co.kr/UpData2/item/G2000027302/20240927090017ZM.jpg',
    price: 538000,
    description:
      "'her(그녀의) bow(리본)'이라는 의미를 담아 루즈한 라인의 리본 쉐입을 J.ESTINA의 이니셜 J와 결합한 '헤르보'컬렉션",
    type: 'Jewelry',
  },
  {
    id: 5,
    name: '[아이유 PICK] ORBIT MIOELLO 목걸이 (JJORNQ4BS452SW420)',
    img: 'https://webimg.jestina.co.kr/UpData2/item/G2000027103/20240510090704ZM.jpg',
    price: 143650,
    description:
      '회전하는 메탈 플레이트의 리드미컬한 쉐입을 표현한 오르빗 컬렉션',
    type: 'Jewelry',
  },
  {
    id: 6,
    name: 'Apple Vision Pro',
    img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-vision-pro-202401?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1705097770616',
    price: 4990000,
    description:
      '공간 컴퓨팅의 시대가 이제 여기에.',
    type: 'Electronics',
  },
  {
    id: 7,
    name: 'Pro Display XDR',
    img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-pro-display-202108?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1625864626000',
    price: 6499000,
    description: '역대 최초의 32형 Retina 6K 디스플레이. 최대 1600니트 밝기. 엄청난 1,000,000:1 명암비와 초광시야각. 탁월한 정확도로 표현되는 10억 가지 이상의 색상. 그리고 전문 워크플로에 변혁을 가져다줄 다이내믹 레인지까지. 세계 최고의 전문가용 디스플레이, Apple Pro Display XDR을 소개합니다.',
    type: 'Electronics',
  },
  {
    id: 8,
    name: 'Mac Pro',
    img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-pro-202306?wid=645&hei=1000&fmt=p-jpg&qlt=95&.v=1683842370649',
    price: 10490000,
    description:
      '압도적인 성능은 이제 기본. Apple Silicon의 강력한 성능과 PCIe의 유연한 확장성이라는 혁신적인 조합으로 극도로 전문적인 워크플로까지 가뿐하게 처리해 내는 Mac Pro. 어떤 구성을 선택하든 Apple 사상 가장 큰 크기와 막강한 역량을 자랑하는 칩인 M2 Ultra가 기본으로 탑재됩니다.',
    type: 'Electronics',
  },
  {
    id: 9,
    name: 'iMac',
    img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-imac-202410?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1728341291280',
    price: 1990000,
    description:
      '새롭고 개성 넘치는 컬러.\n' +
        '놀랍도록 얇은 디자인.\n' +
        '세계 최고의 올인원 데스크탑.',
    type: 'Electronics',
  },
  {
    id: 10,
    name: 'iPad Pro',
    img: 'https://www.apple.com/v/ipad/home/cl/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_large.png',
    price: 1499000,
    description: '최첨단 기술이 구현하는 궁금의 iPad 경험.',
    type: 'Electronics',
  },
  {
    id: 11,
    name: '4-바 밀라노 스티치 카디건',
    img: 'https://cdn-images.farfetch-contents.com/thom-browne-4_13010170_45723117_800.jpg',
    price: 2000000,
    description: '2개의 톰브라운 엠블럼은 코튼 크레이프 브이넥 카디건을 명확히 표현하고, 그로그랭 트리밍과 4-바 스트라이프 디테일 모두 브랜드를 대표하는 요소입니다.',
    type: "men's clothing",
  },
  {
    id: 12,
    name: '울 모헤어 로즈 앤 레이븐 카디건',
    img: 'https://cdn-images.farfetch-contents.com/thom-browne_22370308_53713410_800.jpg',
    price: 2460000,
    description:
      '우아함과 세련미가 돋보이는 정교한 카디건입니다. 기발한 장미와 까마귀 한 마리가 2024 가을/겨울 컬렉션에 영감을 준 시 \'까마귀\'를 쓴 에드가 알렌 포에게 경의를 표합니다. 포의 작품처럼 이 의상은 예상치 못한 멋진 디테일을 드러내기 때문에 가까이에서 감상할 가치가 있습니다. 선선한 가을 낮과 밤에 드레스 셔츠나 티셔츠 위에 이 카디건을 겹쳐 입으세요.',
    type: "men's clothing",
  },
  {
    id: 13,
    name: '리넨 코튼 4-바 릴렉스 핏 카디건',
    img: 'https://cdn-images.farfetch-contents.com/thom-browne-4_22370411_53715993_800.jpg',
    price: 2460000,
    description: '완벽한 장인 정신, 고급스러운 원단, 독특한 톰 브라운 엠블럼이 돋보이는 이 카디건은 사계절용 옷장에 꼭 필요한 아이템입니다. 캐주얼 티셔츠나 드레스 셔츠와 사계절 내내 매치해 보세요.',
    type: "men's clothing",
  },
  {
    id: 14,
    name: '캐시미어 암밴드 집업 후디',
    img: 'https://cdn-images.farfetch-contents.com/thom-browne_22369813_53712795_800.jpg',
    price: 3350000,
    description: '예술적으로 제작된 레저웨어인 캐시미어 암밴드 집업 후디는 톰 브라운의 상징적인 스트라이프 그로그랭 암밴드로 장식되어 있습니다.',
    type: "men's clothing",
  },
  {
    id: 15,
    name: 'SMALL LOGO HOODIE (Melange Grey) ',
    img: 'https://cafe24.poxo.com/ec01/greeny02/FswOdE9MfRI0I8YryJi6ajlb1MOMjuTA9JP+7DNLYgA9GwRGXz/LowWgjf0SAif6O3E9gPM9Mnnn6d3CAuO3NQ==/_/web/product/small/202209/55b26c33472cd7f19e07ade6d255cc06.jpg',
    price: 89000,
    description: 'GREEMY 21 SPRING의 SMALL LOGO HOODIE 입니다.\n' +
        'GREEMY만의 고유의 크롭 하면서도 체형 밸런스를 보완해 주는 스퀘어 핏입니다.\n' +
        '소매와 밑단에 셔링을 주어 디테일을 살리고\n' +
        '일반 후드끈과 차별화 되는 튜브 열처리를 사용하여\n' +
        '제품 퀼리티를 높였습니다.\n' +
        '또한 아웃포켓으로 실용성을 더욱 높였습니다.\n' +
        'GREEMY 모든 제품과 세트로 연출 가능합니다.',
    type: "women's clothing",
  },
  {
    id: 16,
    name: '몬텔로 테리 트레이닝 자켓 OFF WHITE',
    img: 'https://img.29cm.co.kr/next-product/2023/09/12/ac8622ff73074db3b72432748093d3bf_20230912155303.jpg?width=700',
    price: 179000,
    description: '테니스 활동 및 일상에서 편안하고 트렌디하게 착용할 수 있는 트레이닝 자켓.',
    type: "women's clothing",
  },
  {
    id: 17,
    name: '몬텔로 테리 트레이닝 팬츠 GREEN',
    img: 'https://img.29cm.co.kr/next-product/2023/08/29/c8b9c4b0b4f0488d914ad4599f7842f7_20230829144604.jpg?width=700',
    price: 139000,
    description:
      '테니스 활동 및 일상에서 편안하고 트렌디하게 착용할 수 있는 트레이닝 팬츠.',
    type: "women's clothing",
  },
  {
    id: 18,
    name: 'Aelfric Eden Flower Number Embroidery Hoodie',
    img: 'https://www.aelfriceden.com/cdn/shop/files/jpeg_073a649b-6ea3-4212-b190-3e45bc4e36d6.jpg?v=1728422071&width=800',
    price: 110674,
    description:
      '[Codegraphy] WAVE Logo Symbol Coloring Short Sleeve Hoodie_White',
    type: "women's clothing",
  },
  {
    id: 19,
    name: 'Aelfric Eden Polar Bear Fuzzy Cardigan',
    img: 'https://www.aelfriceden.com/cdn/shop/files/jpeg_webp_d267bbac-e8f1-48f7-bfd5-b1dfac3aa46d.jpg?v=1730455584&width=900',
    price: 87141,
    description: '[MOAA] Henley neck layered sleeveless',
    type: "women's clothing",
  },
];
