import { FaGithub, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

const links = [
  {
    href: 'https://github.com/titenq',
    icon: <FaGithub className={styles.icon} />
  },
  {
    href: 'https://t.me/titenq',
    icon: <FaTelegramPlane className={styles.icon} />
  },
  {
    href: 'https://twitter.com/titenq',
    icon: <FaTwitter className={styles.icon} />
  },
];

const Footer = () => {
  return (
    <footer>
      <h2 className={styles.titenq}>TitenQ <sup>&copy;</sup></h2>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a 
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.icon_button}
              >
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
