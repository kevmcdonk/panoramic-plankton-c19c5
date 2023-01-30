---
layout: PostLayout
title: An Advent series - Backing up Azure Cosmos DB
slug: '/2018/12/02/advent-day-two-backingup-cosmos'
date: '2018-12-02 09:00:00'
comments: false
author: 'Kevin McDonnell'
tags:
  - azure
featuredImage:
  type: ImageBlock
  url: /images/2018/12/man-backup.jpg
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

If you have started using Azure Cosmos DB, you may have noticed that the backup story is pretty limited by default. Having recently deleted a test database by mistake and waited three days to get round the support maze to have it restored, it was a good chance to implement a more robust backup strategy.

The simplest way I have found to do this is to backup the entire DB using Azure Data Factory. Naturally it may depend on your DB size and you may want to instead backup the change feed on a more regular basis but this worked for well for our scenario.

To get started with Azure Data Factory:

- Add it as a service through the Azure Portal
- Click on Author and Monitor to be taken to the home page
- Click on Copy Data

![Azure Portal](/images/2018/12/AzurePortalDataFactory.PNG)![Start SCreen](018/12/AzureDFStartScreen.PNG)

- Fill out the name for your task
- Add a Cosmos DB Linked Service as a source
- Fill out the connection details

![Cosmos Linked Service](018/12/AzureDFCreateLinkedService.PNG)![Cosmos Connection Details](ection.PNG)

- Select the Cosmos collection (Items in the case below)
- Select "Export as-is to JSON files

![Cosmos Linked Service](/images/2018/12/AzureDFCosmosQuery.PNG)

- Create a Destination Source
- Use a new Azure Blob Storage linked service

![Linked Azure Blob Service](018/12/AzureDFCreateLinkedServiceStorage.PNG)

- Define the file path and name, using a temporary name for now

![Linked Azure Blob Service File Path](018/12/AzureDFSelectFolder.PNG)

- Click several Nexts until the wizard completes and creates the Pipeline
- Click on the pencil icon an navigate through the Pipelines to find your newly created Copy Data Pipeline
- Click on the Copy Data activity and navigate to the Sink section
- Edit the Sink Dataset
- Find the filepath, select backup.json and select Add Dynamic Content
  ![Azure Storage Filepath](/images/2018/12/AzureDFUpdateFolder.PNG)
- Change the value to "@concat(utcnow(),'.json')" so that each run will give the file a unique name

This completes it all so that you can now Debug to test it and then Publish when all ready. Depending on your preferences, you can create a Trigger to run this every day or to whatever frequency you need. To restore these backups, create a similar Copy Data task going back the other way.

Then sit back and feel better that you can do something stupid with delete in the portal without so much worry.
