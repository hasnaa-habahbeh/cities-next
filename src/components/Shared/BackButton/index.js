import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './BackButton.module.scss';

const BackButton = () => {
  const router = useRouter();

  return (
    <div className={styles.back_button} onClick={() => router.back()}>
      <FaArrowLeft className={styles.back_button_icon} />
      <span className={styles.back_button_text}>Back</span>
    </div>
  );
};

export default BackButton;
