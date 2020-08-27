import React, { useContext } from 'react';
import * as S from './styled';
import Link from 'next/link';
import LinkBox from '@components/atoms/LinkBox';
import { IconType } from '@utils/constants';
import { Context } from '@commons/Context';

type Props = {};

export const MenuNavContainer: React.FC<Props> = () => {
  const { user } = useContext(Context);

  return (
    <S.MenuNavContainer>
      <S.HomeNav>
        <Link href="/">
          <a>
            <span>B마트 홈</span>
            {'으로 가기 >'}
          </a>
        </Link>
      </S.HomeNav>
      {!user ? (
        <S.TwoRowNav>
          <LinkBox url="/signin" name="로그인" icon={IconType.VSCSIGNIN} />
          <LinkBox url="/signup" name="회원가입" icon={IconType.HIOUTLINEUSERADD} />
        </S.TwoRowNav>
      ) : (
        <S.TwoRowNav>
          <LinkBox url="/cart" name="장바구니" icon={IconType.BASKET} />
          <LinkBox url="/" name="주문내역" icon={IconType.RIFILELISTLINE} />
          <LinkBox url="/" name="찜한상품" icon={IconType.REG_HEART} />
        </S.TwoRowNav>
      )}
    </S.MenuNavContainer>
  );
};