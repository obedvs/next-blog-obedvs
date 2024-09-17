import { HiRss, HiBriefcase, HiOutlineArrowSmRight, HiCode } from "react-icons/hi";

import { FaXTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

import type { IconType } from "react-icons";

export type Icon = IconType;

export const Icons = {
  logo: HiCode,
  rss: HiRss,
  arrowRight: HiOutlineArrowSmRight,
  twitter: FaXTwitter,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  portfolio: HiBriefcase
}