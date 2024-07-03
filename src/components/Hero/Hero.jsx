import styles from '../Hero/HeroStyles.module.css'
import heroimg from '../../assets/Headshot.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroimg} alt="Profile image of Kenneth Malgas" />
            <img className={styles.colorMode} src={themeIcon} alt="Theme color switch icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Kenneth <br />Malgas</h1>
            <h2>FrontEnd Developer</h2>
            <span>
                <a href="http://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="twitter icon" />
                </a>
                <a href="http://github.com/" target="_blank">
                    <img src={githubIcon} alt="github icon" />
                </a>
                <a href="http://linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>With a passion for developing modern web apps for commercial businesses.</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  );
}

export default Hero;
