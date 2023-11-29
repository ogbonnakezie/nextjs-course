import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An Image showing Chike"
          width={300}
          height={300}
        />
      </div>
      <h1>Salut, Je Suis Chike!!</h1>
      <p>
        I blog about Web developments - Especially backend framworks like Nest
        Js and Laravel
      </p>
    </section>
  );
}

export default Hero;
