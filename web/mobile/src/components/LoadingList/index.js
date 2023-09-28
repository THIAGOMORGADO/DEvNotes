import React from "react"
import { Skeleton } from "native-base"

export default function LoadingList() {
  return (
    <Skeleton
      width="90%"
      height="10%"
      startColor="gray.900"
      mt={10}
      rounded={"md"}
    ></Skeleton>
  )
}
