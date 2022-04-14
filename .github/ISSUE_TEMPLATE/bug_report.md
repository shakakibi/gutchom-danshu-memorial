name: Bug Report
description: Something isn't working as expected? Report your bugs here.
labels: ["type: bug"]
body:
  - type: markdown
    attributes:
      value: |
        # Welcome 👋 

        Thanks for taking the time to fill out this bug report.
        Please fill out each section below. This info allows maintainers to diagnose (and fix!) your issue as quickly as possible. Otherwise we might need to close the issue without e.g. clear reproduction steps.

        Bug reports also shouldn't be used for support requests about a specific problem in your site, please use GitHub Discussions for that.
  - type: checkboxes
    attributes:
      label: Preliminary Checks
      description: Please make sure that you verify each checkbox and follow the instructions for them.
      options:
        - label: "This issue is not a duplicate."
          required: true
        - label: "This issue is not a question, feature request, or RFC."
          required: true
  - type: textarea
    attributes:
      label: Description
      description: Describe the issue that you're seeing.
      placeholder: Be as precise as you can. Feel free to share screenshots, videos, or data from the devtools of your browser.
    validations:
      required: true
  - type: input
    id: reproduction-link
    attributes:
      label: Reproduction Link
      placeholder: "https://github.com/username/repository-name/"
      description: "Link to a reproduction (GitHub repository, Codesandbox, etc.). **Do not link to your actual project**, but provide a minimal reproduction in a fresh project."
    validations:
      required: true
  - type: textarea
    attributes:
      label: Steps to Reproduce
      description: Clear steps describing how to reproduce the issue.
      value: |
        1.
        2.
        3.
        ...
    validations:
      required: true
  - type: textarea
    attributes:
      label: Expected Result
      description: Describe what you expected to happen.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Actual Result
      description: Describe what actually happened.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Environment
      render: shell
      description: Run "yarn gatsby info --clipboard" in your project directory and paste the output here.
      placeholder: |
        You'll get an output similar to this:

        System:
          OS: Operating System
          CPU: CPU
        Binaries:
          Node: X
          npm: X
        Languages:
          Python: X
        Browsers:
          Chrome: X
          Edge: X
        npmPackages:
          gatsby: X => X
    validations:
      required: true