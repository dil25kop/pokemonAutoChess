import React from "react"
import CSS from "csstype"
import { useAppDispatch } from "../../../hooks"
import { refreshClick } from "../../../stores/NetworkStore"
import { Money } from "../icons/money"

const style: CSS.Properties = {
  margin: "5px",
  fontSize: "1.1vw"
}

export default function GameRefresh() {
  const dispatch = useAppDispatch()
  return (
    <button
      className="bubbly blue"
      onClick={() => {
        dispatch(refreshClick())
      }}
      style={style}
    >
      Refresh 1
      <Money />
    </button>
  )
}
