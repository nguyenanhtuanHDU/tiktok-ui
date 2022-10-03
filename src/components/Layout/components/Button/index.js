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
  target,
  children,
  onClick,
}) {
  let Tag = 'button'
  const classes = cx('wrapper', { primary }, { outline })

  const _props = {
    onClick,
    target,
  }

  if (to) {
    _props.to = to
    Tag = Link
  } else if (href) {
    _props.href = href
    Tag = 'a'
  }

  return (
    <Tag
      target={target ? '_blank' : '_self'}
      className={classes}
      {..._props}
    >
      <span>{children}</span>
    </Tag>
  )
}

export default Button
