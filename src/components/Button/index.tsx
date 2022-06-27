import React, {
  FC,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren
} from "react"

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = PropsWithChildren<{
  variant?: "primary" | "secondary"
  fullWidth?: boolean
  icon?: React.ReactNode
  as: React.ElementType
}> &
  ButtonTypes

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  icon,
  as: Tag = "button",
  ...props
}) => {
  return (
    <Tag
      {...props}
      className={`btn btn-${variant} ${fullWidth ? "btn-large" : ""}`}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </Tag>
  )
}

export default Button
