import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}> Digital Storytellers </h1>
          <h2 className={styles.imgDesc}></h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            minima, alias optio a sit consequuntur aspernatur, tenetur,
            molestiae minus commodi eum nesciunt quam labore adipisci! Rerum
            dolorem minus iusto? Libero? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Facilis eos error doloremque corporis ex veniam
            quisquam nihil adipisci ipsum? Corporis quia cumque cupiditate ex.
            Iste repellendus dolores ullam velit. Quo!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dolore perferendis vero, debitis cupiditate id voluptates maiores
            fugit illum ex adipisci neque rem numquam itaque consequuntur
            assumenda nesciunt vitae veritatis.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptate, autem magni quod incidunt deleniti qui tempora fugit nemo
            sint enim, ad consectetur libero animi sed cum expedita inventore
            assumenda.
            <br />
            <br /> - Creative illustrations
            <br />
            <br /> - Dynamic websites
            <br />
            <br /> - Fast and Handy Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
