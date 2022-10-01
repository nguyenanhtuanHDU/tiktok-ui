import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import {
  faMagnifyingGlass,
  faCircleXmark,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import images from "assets/images";
import PopperWrapper from "../Popper/PopperWrapper";
import AccountItem from "../AccountItem";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  console.log(searchResult);

  useEffect(() => {
    setTimeout(() => {
      // Call API
      // setSearchResult([]);
    }, 0);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img className={cx("logo")} src={images.logo} alt="Tik tok" />
        <Tippy
          interactive
          visible={searchResult.length === 0 ? false : true}
          placement="bottom"
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Tài khoản</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <form className={cx("search")}>
            <input
              placeholder="Tìm kiếm tài khoản và video"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <span className={cx("line")}></span>

            <button
              className={cx("search-btn")}
              onClick={(e) => e.preventDefault()}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </Tippy>
        <div className={cx("action")}></div>
      </div>
    </div>
  );
}

export default Header;
