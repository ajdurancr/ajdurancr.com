
import { CallToAction } from './CallToAction'
import { Component } from './Component'
import { Header } from './Header'
import { Hero } from './Hero'
import { Image } from './Image'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { Page } from './Page'
import { Section } from './Section'
import { SEO } from './SEO'
import { SocialMedia } from './SocialMedia'
import { SocialMediaLink } from './SocialMediaLink'

export type ReactComponentsMap = { [component: string]: React.ComponentClass<any> | React.FC<any> }

export const getComponentsMap = (): ReactComponentsMap => ({
  CallToAction,
  Component,
  Header,
  Hero,
  Image,
  Logo,
  Menu,
  Page,
  Section,
  SEO,
  SocialMedia,
  SocialMediaLink,
})
