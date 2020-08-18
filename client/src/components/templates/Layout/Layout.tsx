import React, { ReactNode } from 'react';
import Normalize from '../../../commons/styles/Normalize';
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import Head from 'next/head';
import { IconType, HeaderMainType } from '@utils/constants';

type Props = {
  children?: ReactNode;
  title?: string;
};

// const Layout = ({ children, title = 'This is the default title' }: Props) => (
export const Layout = ({ children, title = 'default title' }: Props) => (
  <>
    <Normalize />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header
      left={IconType.ARROW_LEFT}
      main={{ type: HeaderMainType.LOGO }}
      right={[IconType.SEARCH, IconType.BARS]}
    />
    {/* 페이지에서 들어올 children */}
    {children}
    <Footer />
  </>
);