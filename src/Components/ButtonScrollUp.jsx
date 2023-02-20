import styles from './ButtonScrollUp.module.css'

export const ButtonScrollUp = () => {

  const goToTop = () =>{
    window.scrollTo({top:0, left:0, behavior: 'smooth'})
  }

  return (
    <div className={styles.buttonConteiner}>
      <button className={styles.button} onClick={goToTop}>
        <div>^</div>
      </button>
    </div>
  )
}