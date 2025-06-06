import {
  AddressBook,
  ArrowSquareOut,
  Briefcase,
  CalendarCheck,
  CallBell,
  Certificate,
  Envelope,
  GithubLogo,
  House,
  LinkedinLogo,
  RocketLaunch,
  Scroll,
  Stack,
  Student,
  WhatsappLogo
} from '@phosphor-icons/react'

export type IconProps = {
  size: number
  className?: string
}

export const IconAddressBook = ({ size, className }: IconProps) => (
  <AddressBook size={size} className={className} />
)

export const IconScroll = ({ size, className }: IconProps) => (
  <Scroll size={size} className={className} />
)

export const IconWhatsapp = ({ size, className }: IconProps) => (
  <WhatsappLogo size={size} className={className} />
)

export const IconLinkedin = ({ size, className }: IconProps) => (
  <LinkedinLogo size={size} className={className} />
)

export const IconGithub = ({ size, className }: IconProps) => (
  <GithubLogo size={size} className={className} />
)

export const IconEmail = ({ size, className }: IconProps) => (
  <Envelope size={size} className={className} />
)

export const IconRocket = ({ size, className }: IconProps) => (
  <RocketLaunch size={size} className={className} />
)

export const IconHome = ({ size, className }: IconProps) => (
  <House size={size} className={className} />
)

export const IconStudent = ({ size, className }: IconProps) => (
  <Student size={size} className={className} />
)

export const IconExperiences = ({ size, className }: IconProps) => (
  <Briefcase size={size} className={className} />
)

export const IconCalendar = ({ size, className }: IconProps) => (
  <CalendarCheck size={size} className={className} />
)

export const IconStack = ({ size, className }: IconProps) => (
  <Stack size={size} className={className} />
)

export const IconCertificate = ({ size, className }: IconProps) => (
  <Certificate size={size} className={className} />
)

export const IconServices = ({ size, className }: IconProps) => (
  <CallBell size={size} className={className} />
)

export const IconLink = ({ size, className }: IconProps) => (
  <ArrowSquareOut size={size} className={className} />
)
