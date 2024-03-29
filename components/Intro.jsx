import styles from "../styles/Intro.module.css"
import Image from "next/image";
import Circle from "./Circle";

const Intro = () =>{
    return(
        <div className={styles.container}>
            <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
            <Circle backgroundColor="#01c686" right="-40vh" />
             <div className={styles.card}> 
                <h1 className={styles.title}> 
                <span className={styles.brand}> AGENCY WEBSITE </span> DIGITAL PRODUCTION
                </h1>
                <p className={styles.desc}>
                Create live segments and target the right people for messages based on
                their behaviors.
                </p>
                <button className={styles.button}>DISCOVER</button>
             </div>
             <div className={styles.card}> second 
               <Image  
                 src="/img/Avocado.png"
                 
                 fill
                 object-fit="cover"
                 alt=""
               />
        
             </div>
        </div>

    )
}

export default Intro