import React from 'react';
import { useLocation } from 'react-router-dom';
import './PageTitle.css';

export default function PageTitle({ content }) {
  const { pathname } = useLocation();

  let title = '';

  switch (pathname) {
    case '/employees':
      title = 'Индивидуальный план развития';
      break;
    case '/create-target':
      title = content;
      break;
    case '/matrix':
      title = 'Матрица компетенций';
      break;
    case '/my-idp':
      title = 'Индивидуальный план развития';
      break;
    case '/employee-plan':
      title = content;
      break;
    default:
      // eslint-disable-next-line no-unused-vars
      title = '';
      break;
  }

  return (
    <>
      {/* {title && <h1 className="headline__title">{title}</h1>} */}
      {<h1 className="headline__title">{content}</h1>}
    </>
  );
}
