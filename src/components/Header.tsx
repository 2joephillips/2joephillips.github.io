import { Link } from 'gatsby';
import React from 'react';

interface IProps {
  siteTitle: string;
  siteDescription: string;
}
export const Header = ({ siteTitle, siteDescription }: IProps) => (
  <Link to='/'>
    <h1>{siteTitle}</h1>
    <p>{siteDescription}</p>
  </Link>
);
