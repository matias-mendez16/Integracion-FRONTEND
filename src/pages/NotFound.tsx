import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img 
          src="/assets/logo-complete.png" 
          alt="Liberty Finance Logo" 
          className={styles.logo} 
        />
        <h1 className={styles.title}>Error 404</h1>
        <p className={styles.subtitle}>Page Not Found</p>
      </div>
    </section>
  );
}