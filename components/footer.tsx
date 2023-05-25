import Image from "next/image";
import GithubLogo from "assets/github-logo.svg";
import GitlabLogo from "assets/gitlab-logo.svg";
import TelegramLogo from "assets/telegram-logo.svg";
import MailLogo from "assets/mail-logo.svg";

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/Thechi2000" target="_blank" rel="noopener noreferrer nofollow">
        <div className="footer-link-content">
          <GithubLogo fill={"var(--color)"} />
          Github
        </div>
      </a>

      <a href="https://gitlab.com/Thechi2000" target="_blank" rel="noopener noreferrer nofollow">
        <div className="footer-link-content">
          <GitlabLogo />
          Gitlab
        </div>
      </a>

      <a href="https://t.me/lmermod" target="_blank" rel="noopener noreferrer nofollow">
        <div className="footer-link-content">
          <TelegramLogo />
          Telegram
        </div>
      </a>

      <a href="mailto:ludovic.mermod@epfl.ch" target="_blank" rel="noopener noreferrer nofollow">
        <div className="footer-link-content">
          <MailLogo fill={"var(--color)"} />
          Email
        </div>
      </a>
    </footer>
  );
}
