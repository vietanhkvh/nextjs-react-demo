import styles from './style.module.scss';

const Redirect = () => {
  return (
    <div className={styles.redirectContainer}>
      <h1>Redirect</h1>
      <a
        target='_blank'
        href={'https://m.me/oplunggame'}
        className={styles.facebook}
      >
        Fanpage Facebook
      </a>
      <a
        target='_blank'
        href={'http://zaloapp.com/qr/p/12s5jybndfgny'}
        className={styles.zalo}
      >
        Zalo
      </a>
    </div>
  );
};

export default Redirect;
