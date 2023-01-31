import styles from './Loading.module.css';


export const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.spinner} />
    </div>
);
};
