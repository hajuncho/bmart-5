export enum IconType {
  ARROW_LEFT = 'ArrowLeft',
  SEARCH = 'Search',
  BARS = 'Bars',
  REG_HEART = 'RegHeart',
  HEART = 'Heart',
  'ArrowLeft' = ARROW_LEFT,
  'Search' = SEARCH,
  'Bars' = BARS,
  'RegHeart' = REG_HEART,
  'Heart' = HEART
}

export enum ProductDetailInfoType {
  DELIVERY = 'delivery',
  BENEFIT = 'benefit',
  COUNTRY_OF_ORIGIN = 'contryOfOrigin',
  'delivery' = DELIVERY,
  'benefit' = BENEFIT,
  'contryOfOrigin' = COUNTRY_OF_ORIGIN,
}

export enum ProductDetailInfoTitle {
  DELIVERY = '배달 정보',
  BENEFIT = '적립 혜택',
  COUNTRY_OF_ORIGIN = '원산지표시',
}

export const ProductDeliveryDesc = (data: { earliest: number; latest: number }) => {
  return `배달시간 ${data.earliest}~${data.latest}분 예상`;
};

export const ProductBenefitDesc = (data: { rate: number }) => {
  return `배민페이로 결제하면 포인트 ${data.rate}% 적립`;
};

export const ProductCountryOfOriginDesc = () => {
  return `하단 상세 내용 참고`;
};