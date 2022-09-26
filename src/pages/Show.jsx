import React, {useEffect} from "react"
import {useParams} from "react-router"

function Artist() {
  let {artistSlug} = useParams();
  useEffect(() => {}, [artistSlug]);
}

export default Artist();