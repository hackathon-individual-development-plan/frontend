import React from 'react';
import './MatrixCompetency.css';
import '../../components/CommonPageContent/CommonPageContent.css';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';
import Calendar from '../../components/Calendar/Calendar.jsx';
import Matrix from '../../components/Matrix/Matrix.jsx';

function MatrixCompetency() {
  return (
    <>
      <PageTitle />
      <div className="content">
        <section className="content__left-part">
          <Menu />
        </section>

        <section className="content__middle-part">
          {/* <h1 className="content__title">Матрица компетенций</h1> */}
          <Matrix />
        </section>

        <section className="content__right-part">
          <BriefInfoCard />
          <Calendar />
        </section>
      </div>
    </>
  );
}

export default MatrixCompetency;
