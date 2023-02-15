import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.Loader}>
    <ThreeCircles
      height="50"
      width="50"
      color="hotpink"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </div>
);
