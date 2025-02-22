"use client"

import { useState } from "react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"

export default function PasswordInput({ placeholder, autoComplete, style, value, onChange }) {
  let [isVisible, setIsVisible] = useState(false)
  
  const eyeStyle = {
    left: "90%"
  }
  
  function handleClick() {
    setIsVisible(isVisible => !isVisible)
  }
  
  return (
    <>
      <input
      type={isVisible ? "text" : "password"}
      name="password"
      id="password"
      placeholder={placeholder}
      autoComplete={autoComplete}
      style={style}
      value={value}
      onChange={onChange}
      />
      {isVisible ? (
        <span style={eyeStyle} className="eye" onClick={handleClick}>
          <EyeSlashIcon width={18} height={18} />
        </span>
      ) : (
        <span style={eyeStyle} className="eye" onClick={handleClick}>
          <EyeIcon width={18} height={18} />
        </span>
      )}
    </>
  )
}