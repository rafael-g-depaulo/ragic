import styles from './ragic-lib.module.css';

/* eslint-disable-next-line */
export interface RagicLibProps {}

export function RagicLib(props: RagicLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RagicLib!</h1>
    </div>
  );
}

export default RagicLib;
