---
layout: PostLayout
title: When Office 365 groups actually mean SharePoint in the world of retention policies
slug: '/2017/12/16/when-office-365-groups-mean-sharepoint-in-the-world-of-retention-policies'
date: '2017-12-16 21:17:00'
tags:
  - technical
  - sharepoint
  - office-365
featuredImage:
  type: ImageBlock
  url: /images/2017/12/blog-header.png
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

I hit a very strange issue this week, one of those classic ΓÇ£this part will only take 5 minsΓÇ¥ but three hours later you are still on the same thing. The task was simple - delete all the folders in Shared Documents and replace with a new set. As I had a few sites to do, I wrote a PowerShell script using the ever helpful PnPPowershell. Then it errored on the first one with a message saying I had to delete each subfolder first.

![Issue with having to delete all items in the folder](/images/2017/12/Retention-policy-issue.JPG)

Odd, as I was sure I had been able to do this before. I did some Google diving on the exact message and many of the posts referenced the retention policies. This is one of the areas of SharePoint I havenΓÇÖt spent much time on before, especially online. I had heard issues with it being enabled incorrectly on OneDrive so wondered if it was related. We hadnΓÇÖt turned on SharePoint retention for the client but it may have been set by others.

I started in the site collection settings but nothing was set there so I went on to the Security Admin Centre. The only retention policy set was for all email so I moved on. Next step was to check other tenancies for the same issue but found nothing on my tenant or my Dev tenant. I found a bit more on retention policies and saw it created a library called the Preservation Hold Library. This existed on the Site with issues and a few others but I noticed that it didnΓÇÖt on the root site. Tried to delete full folders in the UI and it worked. Intriguing.

![Preservation hold library](/images/2017/12/Prservation-hold-library.JPG)

Soon I realised that the issue only occurred in Group Teamsites - classic sites and Communication sites were fine. It was time to return to the Security Centre and dig more on the policies.

What I found was that While SharePoint was not ticked under the email policy, Office 365 Groups were. Suddenly it all made sense. The policy extends to all supported elements of that group.

![Retention policy applied locations](/images/2017/12/Retention-policy-applied-locations.JPG)

Unfortunately at this point, I have the cause but not a solution as I need to be able to retain the Group mails. I deleted the folders by looping through and deleting each item but there will still be a user impact for this later on. Why does retention policy stop you deleting full folders? Why can you not exclude Group Teamsites from retention? Who is Snope and are they really ReyΓÇÖs parents? So many questions for Microsoft...
