import React, { useEffect } from 'react';
import useCurrentUser from '../../providers/CurrentUserProvider/CurrentUserProvider.hook';
import usePlan from '../../providers/PlanProvider/PlanProvider.hook';
import '../../components/CommonPageContent/CommonPageContent.css';
import './MyPlan.css';
import Menu from '../../components/Menu/Menu.jsx';
import BriefInfoCard from '../../components/BriefInfoCard/BriefInfoCard.jsx';
import Calendar from '../../components/Calendar/Calendar.jsx';
import EmployeePlan from '../EmployeePlan/EmployeePlan.jsx';

function MyPlan() {
  const {
    userPlan, getUserPlan, isUserPlan, userIpdId,
  } = useCurrentUser();
  const { setPlan } = usePlan();

  useEffect(() => {
    getUserPlan();
    if (isUserPlan) {
      setPlan(userPlan);
    }
  }, []);

  return (
    <>
      {!isUserPlan
        ? (
          <div className="content">
            <section className="content__left-part">
              <Menu />
            </section>

            <section className="content__middle-part">
              <h1 className="headline__title">Индивидуальный план развития</h1>
              <p className='my-plan'>Ещё не назначен</p>
            </section>

            <section className="content__right-part">
              <BriefInfoCard />
              <Calendar />
            </section>
          </div>
        ) : <EmployeePlan userIpdId={userIpdId} />
      }
    </>
  );
}

export default MyPlan;
