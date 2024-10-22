# LAB: Github viewer

Use the github api to view a users repos, PRs, and issues.

See documentation here: https://developer.github.com/v3/

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Requirements

### Input username

A user should be able to enter a github username. You will use this username
to search the github api.

### Display user info

Use the `https://api.github.com/users/:username` endpoint to get information
about the user. Display the users name, follower count, following count,
and a link to their github profile.

### Display all repos

Display all repos by the user. You can get this information from the
github api.

### STRETCH: Display all PRs on all user repos

Display **ALL** PRs on all user repos.

Add ability to filter to display only open or closed PRs.

### STRETCH: Display all issues on all user repos

Display **ALL** issues on all user repos.

Add ability to filter to display only open or closed issues.

## Rubric

* Components: 6 points
* Snapshot tests: 2 points
* username state: 3 points
* user detail state: 3 points
* repos state: 3 points
* services: 3 points

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
