---
layout: PostLayout
title: The current state of targeted news and approvals in Modern SharePoint
slug: '/2019/06/20/current-state-modern-sharepoint-news'
date: '2019-06-20 06:00:00'
comments: false
published: true
author: 'Kevin McDonnell'
tags:
  - Technical
  - SharePoint
featuredImage:
  type: ImageBlock
  url: /images/2019/06/darts.jpg
  altText: Post Image
bottomSections:
  - elementId: ''
    variant: variant-c
    colors: colors-a
    title:
      '0': R
      '1': e
      '2': a
      '3': d
      '4': ' '
      '5': 'n'
      '6': e
      '7': x
      '8': t
    recentCount: 3
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-56
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: RecentPostsSection
type: PostLayout
---

One of the areas that classic SharePoint sites still have over Modern SharePoint is the ability to target audiences. I had heard that this had changed so I decided to do a little investigating. The video below runs through that little trip, with the bumps along the way.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rvtxUOqZS2I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

What I found was:

- For any of the targeted content to work, you need/will need to be on Targeted Release for your tenancy.
- I hope this will change but it only appeared that you could set the Target Audience on a Communication Site not a Teams Site.
- You can create audiences but they don't compile so don't get tricked - you will need to use [Azure AD Dynamic Groups](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/groups-dynamic-membership) which requires a P1 license
- If you change the order of news articles, remember to delete the custom order if you delete an article or the stub remains but the link breaks

Looking forward to more updates on this to close the final loops.

## Useful Links

- [Details on using the news web part](https://support.office.com/en-gb/article/use-the-news-web-part-on-a-sharepoint-page-c2dcee50-f5d7-434b-8cb9-a7feefd9f165?ui=en-US&rs=en-GB&ad=GB)
- [Audience Targeting](https://support.office.com/en-gb/article/target-content-to-specific-audiences-33d84cb6-14ed-4e53-a426-74c38ea32293)
- [What is coming for audience targeting](https://techcommunity.microsoft.com/t5/Microsoft-SharePoint-Blog/April-2019-Updates-to-SharePoint-News/ba-p/481718)
- [Microsoft 365 Roadmap Entry for audience targeting](https://www.microsoft.com/en-gb/microsoft-365/roadmap?rtc=2&filters=&searchterms=30695)
