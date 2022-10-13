import { faL } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
  to,
  href,
  primary = false,
  outline = false,
  disabled = false,
  rounded = false,
  small = false,
  large = false,
  className,
  target,
  onClick,
  onMouseDown,
  leftIcon,
  children,
}) {
  let Tag = 'button'
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    disabled,
    rounded,
    small,
    large,
  })

  const _props = {
    onClick,
    onMouseDown,
    target,
  }

  if (to) {
    _props.to = to
    Tag = Link
  } else if (href) {
    _props.href = href
    Tag = 'a'
  }
  if (disabled) {
    Object.keys(_props).forEach((prop) => {
      if (prop.startsWith('on') && typeof _props[prop] === 'function') {
        delete _props[prop]
      }
    })
  }

  return (
    <Tag
      target={target ? '_blank' : '_self'}
      className={classes}
      {..._props}
    >
      {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
      <span className="title">{children}</span>
    </Tag>
  )
}

export default Button
