export interface LoginResponseType {
  message: {
    jwt: string
    profile: {
      id: number
      username?: string
      name?: string
      avatar?: string
    }
  }
}

export interface GetProfileResponseType {
  message: {
    id: number
    username?: string
    name?: string
    division?: string
    avatar?: string
    division_user?: {
      name?: string
    }
  }
}

export interface NewsListItemType {
  id: number
  title?: string
  cover?: string
  author?: string
  created_at?: string
  id_clasifies: number
  slug: string
}
export interface GetNewsListResponseType {
  message: {
    data?: NewsListItemType[]
    total: number
  }
}

export interface GetBreakingNewsResponseType {
  message: NewsListItemType[]
}

export interface NewsDetailType extends NewsListItemType {
  content?: string
  count?: number
}
export interface GetNewsDetailResponseType {
  message: NewsDetailType
}

export interface HAListItemType {
  id: number
  title?: string
  cover?: string
  user?: {
    name?: string
  }
  date?: string
}

export interface HADetailType extends HAListItemType {
  content?: string
  created_at?: string
}

export interface GetHAListResponseType {
  message: {
    data?: HAListItemType[]
    total: number
  }
}

export interface GetHADetailResponseType {
  message: HADetailType
}

export interface SiteSettingType {
  id: number
  logo?: string
  background?: string
  about?: string
  address?: string
  phone?: string
  email?: string
}

export interface BannerItemType {
  id: number
  banner?: string
  created_at?: string
}
export interface GetSiteSettingResponseType {
  message: {
    site_setting?: SiteSettingType
    banners?: BannerItemType[]
  }
}

export interface LibraryListItemType {
  id: number
  title?: string
}

export interface LibraryItemDetailType extends LibraryListItemType {
  author?: string
  description?: string
  views?: number
  downloads?: number
  created_at?: number
}

export interface LibraryCategoryItemType {
  id: number
  name?: string
  library_count?: number
  libraries?: LibraryListItemType[]
}

export interface GetLibraryListResponseType {
  message: LibraryCategoryItemType[]
}

export interface GetLibraryItemDetailResponseType {
  message: LibraryItemDetailType
}

export interface PolicyListItemType {
  id: number
  title?: string
}

export interface PolicyItemDetailType extends PolicyListItemType {
  author?: string
  policy?: string
  views?: number
  downloads?: number
  created_at?: number
}

export interface PolicyCategoryItemType {
  id: number
  category?: string
  count_policy?: number
  policies?: PolicyListItemType[]
}

export interface GetPolicyListResponseType {
  message: PolicyCategoryItemType[]
}

export interface GetPolicyItemDetailResponseType {
  message: PolicyItemDetailType
}
