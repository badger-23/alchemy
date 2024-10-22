# Mid Project

## Daily

- team stand-ups
  - blocked
  - explain what you did yesterday
  - explain what you will do today
- instruction stand-ups
  - present PRs and code reviews from previous day
  - show ticket in flight for the day
  - demo current dev branch
  - update plan/goals
- CODE
- class demos at 5pm every day

## Working in groups with git

- Make an org.
- make a repo for your project
- Keep the PRs small with many commits
  - features/CARD-NUMBER-NAME_OF_FEATURE (features/card-1-create-people-route)
  - fix/CARD_NUMBER-NAME_OF_FIX (fix/card-2-buttons-should-be-red)
  - **WONT NEED FOR THIS SCOPE** hotfix/CARD_NUMBER-NAME_OF_HOTFIX (hotfix/broke-prod-oops)
  - The maker of the PR is the one who merges!
  - add a useful title and description (changelog, screenshots, etc) to the PR
- on github
  - add CI! (GitHub workflow)
  - default branch dev
  - add rules to force reviews and CI
  - only allow squash merges

### CI/CD

- two envs (two heroku apps) (my-app-staging and my-app)
  - staging - deployed from dev
  - production - deployed from main
- setup auto deploy

## Preparing for presentations

### Keep a diary of what you did each day

- what did you do
- why was it easy/hard/interesting?

## Presentations

- 20 minute presentation
  - spend some time talking about the product (5 minutes)
  - spend some time talking about the tech (10 minutes)
  - spend some time talking about yourself as a developer (5 minutes)

## Flow of the week

### Day 0 (Tuesday)

- state your idea
- create a team agreement
- start playing with some of the tech that you may use

### Day 1 (Wednesday)

- formalize your idea
- plan
  - what technologies will you use
  - user stories
  - models
  - routes (you may not need all CRUD routes for every model)
  - define an MVP
  - start breaking up work into small pieces
  - what could you demo on each chunk?
- proof of concept - make sure your plan makes sense

### Day 2 (Thursday)

- start setting up your environments (heroku and github)
- solidify plan
- start diagraming data models
- continue working on proof of concepts

### Day 3 (Friday)

- Start implementing plan
- move slow
- by end of day. You should have **some** features finished

### Day 4 (Monday)

- continue implementing plan
- move slow
- by end of day. You should have **some** features finished

### Day 5 (MVP - Tuesday)

- if your not close to MVP maybe reconsider what MVP is
- DEMO: your MVP or something close to it

### Day 6 (MVP FOR REAL - Wednesday)

- push to main and production envs
- MVP is a must by Wed
- TAs are going to want a demo of your MVP deployed to production
- Stretch goals

### Day 7 (Stretch DO COOL THINGS - Thursday)

- Continue working on stretch goals
- Make sure things look good
- plan presentations

### Day 8 (Presentation day - Friday)

- continue to practice presentation
- you should only be tweaking your code (no major changes)
- eat lunch
- meditate
