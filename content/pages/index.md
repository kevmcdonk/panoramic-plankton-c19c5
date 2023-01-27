---
title: Home
slug: /
sections:
  - title:
      text: Here goes your business main value proposition
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: >-
      This is the best place to go for all your branding needs! From logo design
      to social media marketing, we can help get your business noticed.
    actions: []
    elementId: homepage-hero
    colors: bg-light-fg-dark
    backgroundImage:
      url: /images/shapes-in-the-corners-bg.svg
      altText: Bg image corners
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      type: BackgroundImage
    styles:
      self:
        alignItems: center
        flexDirection: row
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    media:
      type: ImageBlock
      altText: Lightning bolt symbol on red background
      elementId: ''
      url: /images/MCD79 - the Modern Workplace Blog.png
      styles:
        self:
          borderRadius: x-large
  - type: FeaturedPostsSection
    title:
      text: Featured posts
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: null
    posts:
      - content/pages/blog/blog-post-title-1.md
      - content/pages/blog/blog-post-title-2.md
      - content/pages/blog/blog-post-title-3.md
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    actions: []
    badge: null
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    backgroundImage: null
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
  - type: RecentPostsSection
    title:
      text: Recent posts
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: null
    recentCount: 3
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    actions: []
    badge: null
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    backgroundImage: null
    styles:
      self:
        justifyContent: center
seo:
  metaTitle: Home - Demo site
  metaDescription: This demo site is built with Stackbit
  socialImage: /images/soc-feature-image.png
  type: Seo
type: PageLayout
---
