# Final Project

## Working in groups with git

* Make an org.
* make 2 repos. one for back-end and one for front-end
  * deploy the be to heroku and fe to netlify
* Keep the PRs small with many commits
  * features/CARD-NUMBER-NAME_OF_FEATURE (features/card-1-create-people-route)
  * fix/CARD_NUMBER-NAME_OF_FIX (fix/card-2-buttons-should-be-red)
  * **WONT NEED FOR THIS SCOPE** hotfix/CARD_NUMBUER-NAME_OF_HOTFIX (hotfix/broke-prod-oops)
  * The maker of the PR is the one who merges!
  * add a useful title and description (changelog, screenshots, use humble language
    information for review and maybe employers) to the PR
* on github
  * default branch dev
  * add rules to force reviews and passing tests
  * only allow squash merges
* merging to main should be a force merge
```sh
git checkout dev
git branch -D main
git checkout -b main
git push origin main -f
```

### CI/CD

* two envs (two heroku apps and two netlify apps) (my-app-staging and my-app)
  * staging - deployed from dev
  * production - deployed from main
* setup auto deploy

## Flow of the week

* Begin everyday with a team standup
  * blocked
  * explain what you did yesterday
  * explain what you will do today
  * surface if you don't know what to work on
  * surface if you think things aren't following the plan
* Instructional staff will meet with each team every day
  * we will want to see code
  * instructional staff will present a daily digest detailing areas you should refactor,
    areas you are not following your plan, and areas you are doing well in
* At 5pm on teams will present 5-10 minutes demos of their progress to the cohort
  * during this time all teams should pause any coding activities

### Day 1 (Wednesday)

* continue research and exploration
* finalize MVP and a time frame for each feature
* plan
  * what technologies will you use (redux?, react?, monogodb?, postgres?, etc...)
  * user stories
  * models
  * routes (you may not need all CRUD routes for every model)
  * wireframe
  * component hierarchy
  * define an MVP
  * start breaking up work into small pieces
* EOD: present your final idea and plan

### Day 2 (Thursday)

* start setting up your environments (heroku and netlify and github)
* solidify plan
* Start implementing plan
* move slow
* by end of day. You should have **some** features finished
* EOD: demo a complete and deployed feature

### Day 3 (Friday)

* Continue working
* continue moving slow
* by end of day. You should have **some** features finished
* EOD: demo a complete and **deployed** feature

### Day 4 (Monday)

* Continue working
* continue moving slow
* by the end of the day have MVP in sight
* EOD: demo a complete and **deployed** feature

### Day 5 (Tuesday)

* push to main and production envs
* if your not close to MVP maybe reconsider what MVP is
* EOD: demo MVP

### Day 6 (Wednesday)

* Polish MVP functionality
* EOD: demo polished MVP

### Day 7 (Thursday)

* Stretch goals
* DON'T BREAK STUFF
* Make sure things look good
  * on the hardware you will use (projector)
* plan presentations
* Practice presentations in the afternoon
  * TAs would love to see the presentations and give you feedback
* EOD: demo a fully styled and polished MVP

### Day 8 (Friday)

* continue to practice presentation on the hardware that you will use
* you should be done coding
* eat lunch
* meditate

## Preparing for presentations

### Keep a diary of what you did each day

* what did you do
* why was it easy/hard/interesting?
* 30 minute presentation
  * spend some time talking about the product
  * spend some time talking about the tech
  * spend some time talking about yourself as a developer
