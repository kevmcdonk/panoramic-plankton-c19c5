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
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions:
      - label: Get started
        url: /
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
      - label: Learn more
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Link
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
    variant: small-list
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
  - type: CarouselSection
    title: null
    subtitle: null
    items:
      - title: This is what we do best
        tagline: Feature 1
        subtitle: Let us tell you all about this feature
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/post-image-4.svg
          altText: Feature 1
          elementId: ''
          styles:
            self:
              borderRadius: none
          type: ImageBlock
        actions:
          - label: Learn more
            altText: ''
            url: /
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: secondary
            elementId: ''
            type: Link
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pb-12
              - pl-12
              - pr-12
            textAlign: left
            borderRadius: none
            flexDirection: row
            justifyContent: flex-start
        type: FeaturedItem
      - title: Another great feature
        tagline: Feature 2
        subtitle: You are going to love this feature
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/post-image-1.svg
          altText: Feature 2
          elementId: ''
          styles:
            self:
              borderRadius: large
          type: ImageBlock
        actions:
          - label: Learn more
            altText: ''
            url: /
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: secondary
            elementId: ''
            type: Link
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-10
              - pb-10
              - pl-10
              - pr-10
            textAlign: left
            borderRadius: none
            flexDirection: row
            justifyContent: flex-start
        type: FeaturedItem
    badge: null
    elementId: ''
    variant: tabs-nav
    colors: bg-light-fg-dark
    backgroundImage:
      url: /images/bg-section.png
      altText: Squares pattern
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      type: BackgroundImage
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
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
