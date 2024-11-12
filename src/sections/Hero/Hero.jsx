import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from '../../assets/Cv.pdf';
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.heroImg}
          src={heroImg}
          alt="Profile picture" 
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Abhay
          <br />
          Chaturvedi
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="twitter" target="_blank">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="Github" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="Linkedin" target="_blank">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
        </span>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Sunt dolorum consequuntur a maxime.
        </p>
        <a href={CV} download>
            <button className="hover">
                Resume
            </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
