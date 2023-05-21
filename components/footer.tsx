import Image from "next/image";
import github_logo from "assets/github-logo.svg";
import gitlab_logo from "assets/gitlab-logo.svg";
import telegram_logo from "assets/telegram-logo.svg";
import mail_logo from "assets/mail-logo.svg";

export default function Footer() {
  return (
    <footer>
      <div>
        <Image src={github_logo} alt="Github" />
        <a href="https://github.com/Thechi2000" target="_blank">
          Github
        </a>
      </div>

      <div>
        <Image src={gitlab_logo} alt="Gitlab" />
        <a href="https://gitlab.com/Thechi2000" target="_blank">
          Gitlab
        </a>
      </div>

      <div>
        <Image src={telegram_logo} alt="Telegram" />
        <a href="https://t.me/lmermod" target="_blank">
          Telegram
        </a>
      </div>

      <div>
        <Image src={mail_logo} alt="Email" />
        <a href="https://t.me/lmermod" target="_blank">
          Email
        </a>
      </div>
    </footer>
  );
}
