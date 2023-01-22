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
  - subtitle: Award winning enterprises trust us
    images:
      - url: /images/empathy_jcmigz.svg
        altText: Empathy logo
        type: ImageBlock
      - url: /images/wellster.svg
        altText: Wellster logo
        type: ImageBlock
      - url: /images/vise.svg
        altText: Vise logo
        type: ImageBlock
      - url: /images/telus.svg
        altText: Telus logo
        type: ImageBlock
      - url: /images/contenful.svg
        altText: Contentful logo
        type: ImageBlock
      - url: /images/sanity.svg
        altText: Sanity logo
        type: ImageBlock
      - url: /images/rangle.svg
        altText: Rangle logo
        type: ImageBlock
    motion: move-to-left
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    type: ImageGallerySection
  - subtitle: This is a subtitle
    items:
      - title: >-
          “A designer knows he has achieved perfection not when there is nothing
          left to add, but when there is nothing left to take away.”
        tagline: Testimonial 1
        subtitle: 'Maria Walters, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/person-four.jpg
          altText: Rhonda
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          “Quote from some important person goes right here. I love using
          Stackbit.”
        tagline: Testimonial 2
        subtitle: 'Jane Doe, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/person-five.jpg
          altText: Nina
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
    variant: next-prev-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    type: CarouselSection
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - title:
      text: List of features here
      color: text-primary
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Featured items section subtitle
    items:
      - title: Feature Item One
        tagline: This is the tagline
        subtitle: This is the item subtitle
        text: |
          Follow the tutorial to build your first Stackbit site.
        image:
          url: /images/post-one.svg
          altText: Exclamation mark on red background
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: Feature Item Two
        tagline: This is the tagline
        subtitle: This is the item subtitle
        text: |
          Follow the tutorial to build your first awesome Stackbit site.
        image:
          url: /images/post-two.svg
          altText: Lightning bolt symbol on red background
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: Feature Item Three
        tagline: This is the tagline
        subtitle: This is the item subtitle
        text: |
          Learn from the tutorial and build your first awesome Stackbit site.
        image:
          url: /images/post-three.svg
          altText: Stackbit logomark on red background
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-8
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - title:
      text: Generic Section With A Form
      color: text-dark
      type: TitleBlock
    subtitle: Section with a form subtitle
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
          type: TextareaFormControl
      submitButton:
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
        type: SubmitButtonFormControl
      action: /.netlify/functions/submission_created
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
    badge:
      label: Contact Us
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    type: GenericSection
  - type: GenericSection
    title:
      text: Generic Section With A Video
      color: text-dark
      styles:
        self:
          textAlign: left
      type: TitleBlock
    subtitle: Section with a video subtitle
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions: []
    media:
      title: Title of the video
      url: >-
        https://res.cloudinary.com/stackbit-com/video/upload/c_scale,f_auto,w_1200/v1662491281/Home_page_header_V2_launch_V.2_2_fdyqq7.mp4
      autoplay: false
      loop: false
      muted: false
      controls: true
      aspectRatio: '16:9'
      elementId: ''
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: VideoBlock
    badge: null
    elementId: ''
    colors: bg-light-fg-dark
    backgroundImage: null
    styles:
      self:
        flexDirection: row
        justifyContent: center
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
      subtitle:
        textAlign: left
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
seo:
  metaTitle: Home - Demo site
  metaDescription: This demo site is built with Stackbit
  socialImage: /images/soc-feature-image.png
  type: Seo
type: PageLayout
---
