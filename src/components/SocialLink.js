import React from "react"
import styled from 'styled-components'
import config from '../utils/siteConfig'


const Icon = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  background-image: url(${props => `${props.icon}.svg`});
  transition: all 300ms ease-in-out;
  &:hover {
    background-image: url(${props => `${props.icon}-colored.svg`})
  }
`
const LinkList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  li {
    display: inline-flex;
    margin: 0 5px;
  }
`

const SocialLink = () => {
  return (
    <LinkList>
      <li><a href={`https://facebook.com/${config.userFacebook}`}><Icon icon={`${'/svg/facebook'}`}/></a></li>
      <li><a href={`https://instagram.com/${config.userInstagram}`}><Icon icon={`${'/svg/instagram'}`} /></a></li>
      <li><a href={`https://twitter.com/${config.userTwitter}`}><Icon icon={`${'/svg/twitter'}`} /></a></li>
      <li><a href={`https://soundcloud.com/${config.userSoundcloud}`}><Icon icon={`${'/svg/soundcloud'}`} /></a></li>
      <li><a href={`https://youtube.com/${config.userYoutube}`}><Icon icon={`${'/svg/youtube'}`} /></a></li>
      <li><a href={`${config.siteUrl}/rss.xml`}><Icon icon={`${'/svg/rss'}`} /></a></li>
    </LinkList>
  )
}


export default SocialLink
