import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7d75fdfc00e7d999b2d631c4ec5c5d89~c5_300x300.webp?x-expires=1664784000&x-signature=4r9V5fdnn7pAr63TXeF4Q1y2%2BGA%3D"
        alt="a"
      />
      <div className={cx("info")}>
        <h4 className={cx("username")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <p className={cx("name")}>nguyenvana</p>
      </div>
    </div>
  );
}

export default AccountItem;
