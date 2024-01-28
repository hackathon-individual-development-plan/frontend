import pic1 from '../images/avatar-1.jpg';
// import pic2 from '../images/avatar-2.jpg';
import pic3 from '../images/avatar-3.jpg';
// import pic4 from '../images/avatar-4.jpg';

const comments = [
  {
    id: 250,
    fio: 'Артемьев Олег Игоревич',
    photo: pic1,
    message: 'Начал проходить тренинг.',
  },
  {
    id: 123,
    fio: 'Осипов Александр Владимирович',
    photo: pic3, // Use consistent property name 'avatar'
    message: 'Удачи с тренингом.',
  },
];
//
export default comments;
