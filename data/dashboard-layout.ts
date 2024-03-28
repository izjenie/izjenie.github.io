interface NavbarItemsType {
  label: string
  href: string
}

export const navbarItems: NavbarItemsType[] = [
  {
    label: 'Saya merasa ingin mengakhiri hidup',
    href: '/suicide',
  },
  {
    label: 'Saya Butuh Teman Bercerita',
    href: '/consul',
  },
]

interface ContactUsItemType {
  icon: string
  label: string
  href: string
  field: string
  disable?: boolean
}

export const contactUsItems: ContactUsItemType[] = [
  {
    icon: '/icon/ic-location.svg',
    label:
      'Kawasan The Telkom Hub, Gedung Graha Merah Putih, lantai 6, Jl. Jenderal Gatot Subroto Kav.52, Kuningan Barat, Mampang Prapatan, Jakarta Selatan, Jakarta, Indonesia 12710',
    href: '/',
    field: 'address',
    disable: true,
  },
  {
    icon: '/icon/ic-phone.svg',
    label: '08123548764',
    href: '/',
    field: 'phone',
  },
  {
    icon: '/icon/ic-mail.svg',
    label: 'telkom@email.com',
    href: '/',
    field: 'email',
  },
]

export default { navbarItems, contactUsItems }
