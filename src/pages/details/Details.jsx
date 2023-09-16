import React from 'react'
import useFetch from './../../hooks/useFetch'
import './style.scss'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideoSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/recommendation';
function Detail() {
  const {mediaType,id} = useParams(); 
  const {data,loading} = useFetch(`/${mediaType}/${id}/videos`);
  const {data : credits,loading : creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)
  // console.log(data,credits)
  return (
    <div>
      <DetailsBanner video={data?.data?.results?.[0]} crew = {credits?.data?.crew}/>
      <Cast data={credits?.data?.cast} loading={creditsLoading}/>
      <VideosSection data={data?.data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Detail
