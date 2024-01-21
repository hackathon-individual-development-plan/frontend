import '../../components/CommonPageContent/CommonPageContent.css';
import './MyPlanSenior.css';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';
import Calendar from '../../components/Calendar/Calendar.jsx';

function MyPlanSenior() {
  return (
    <>
      <PageTitle />
      <div className="content">
        <section className="content__left-part">
          <Menu />
        </section>

        <section className="content__middle-part">
          <p className='my-plan'>Ещё не назначен</p>
        </section>

        <section className="content__right-part">
          <BriefInfoCard />
          <Calendar />
        </section>
      </div>
    </>
  );
}

export default MyPlanSenior;
