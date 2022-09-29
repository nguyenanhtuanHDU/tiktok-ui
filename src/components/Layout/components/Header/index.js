import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Header.module.scss";
import images from "assets/images";
import {
  faMagnifyingGlass,
  faCircleXmark,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img className={cx("logo")} src={images.logo} alt="Tik tok" />
        <form className={cx("search")}>
          <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          <span className={cx('line')}></span>
          <button
            className={cx("search-btn")}
            onClick={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className={cx("action")}></div>
      </div>
    </div>
  );
}

export default Header;
