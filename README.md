<div align="center">

# Badge Generator <br> :shield: :badger: :mage:

> Magically generate Markdown badges for your docs

[![GH Pages Deploy](https://github.com/MichaelCurrin/badge-generator/workflows/GH%20Pages%20Deploy/badge.svg)](https://github.com/MichaelCurrin/badge-generator/actions/workflows/main.yml "GitHub Actions workflow status")
[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/badge-generator)](https://github.com/MichaelCurrin/badge-generator/releases/?include_prereleases&sort=semver "View GitHub releases")
[![License](https://img.shields.io/badge/License-MIT-blue)](#license "Go to license section")

[![CodeQL](https://github.com/MichaelCurrin/badge-generator/workflows/CodeQL/badge.svg)](https://github.com/MichaelCurrin/badge-generator/actions?query=workflow%3ACodeQL "Code quality workflow status")
[![Known Vulnerabilities](https://snyk.io/test/github/MichaelCurrin/badge-generator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/MichaelCurrin/badge-generator?targetFile=package.json "Snyk vulnerabilities")
[![LGTM](https://img.shields.io/lgtm/grade/javascript/github/MichaelCurrin/badge-generator?logo=lgtm)](https://lgtm.com/projects/g/MichaelCurrin/badge-generator/context:javascript "View Code Quality checks on LGTM.com")

[![Made with Node](https://img.shields.io/badge/dynamic/json?label=node&query=%24.engines%5B%22node%22%5D&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fbadge-generator%2Fmaster%2Fpackage.json)](https://nodejs.org "Go to Node.js homepage")
[![Package - Yarn](https://img.shields.io/badge/yarn->=1-blue?logo=yarn&logoColor=white)](https://classic.yarnpkg.com "Go to Yarn classic homepage")
[![Package - Vue](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js&logoColor=white)](https://www.npmjs.com/package/vue "Go to Vue on NPM")
[![Package - Typescript](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/dev/typescript?logo=typescript&logoColor=white)](https://www.npmjs.com/package/typescript "Go to TypeScript on NPM")

[Website](https://michaelcurrin.github.io/badge-generator/) — [Sample badges](#sample-badges) — [Documentation](/docs/#readme)

</div>


## Overview

A convenience tool that makes it easy to generate custom Markdown for badges to put on your documentation or website.

Choose a page, enter your details, and click _Submit_ to generate some Markdown code for you to copy and paste.

External tools are used to actually render badges - mostly using [shields.io](https://shields.io).


## Preview

<div align="center">
    <a href="https://michaelcurrin.github.io/badge-generator/">
        <img src="/docs/_media/sample.png"
            alt="Sample screenshot"
            title="Go to website"
            width="600" >
    </a>
</div>


## Open the web app

Start creating badges for your docs.

<div align="center">

[![Site](https://img.shields.io/badge/View_site-Badge_Generator-2ea44f?style=for-the-badge)](https://michaelcurrin.github.io/badge-generator/)

</div>


## Sample badges

Examples of a few badges generated with the app and rendered here on a markdown doc

Note that most of the badges at the top of this `README.md` file were also generated using this app.

### Social badges

Link to your project. From another project - even paste these in an online forum or your blog.

<div align="center">

[![MichaelCurrin - badge-generator](https://img.shields.io/static/v1?label=MichaelCurrin&message=badge-generator&color=blue&logo=github)](https://github.com/MichaelCurrin/badge-generator)
[![stars - badge-generator](https://img.shields.io/github/stars/MichaelCurrin/badge-generator?style=social)](https://github.com/MichaelCurrin/badge-generator)
[![forks - badge-generator](https://img.shields.io/github/forks/MichaelCurrin/badge-generator?style=social)](https://github.com/MichaelCurrin/badge-generator)

</div>

### Repo metadata

Add to the top of your `README.md` file. These are about your specific repo. Some are dynamic and some are hardcoded (like license below).

<div align="center">

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/badge-generator?include_prereleases=&sort=semver)](https://github.com/MichaelCurrin/badge-generator/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![issues - badge-generator](https://img.shields.io/github/issues/MichaelCurrin/badge-generator)](https://github.com/MichaelCurrin/badge-generator/issues)

</div>

### Generic

Put whatever text value you want in this static (fixed) badge. You can change the color, logo and destination link. Use the badge for your repo, website or documentation.

<div align="center">

[![Foo - Bar](https://img.shields.io/badge/Foo-Bar-2ea44f)](#)
![Maintained - yes](https://img.shields.io/badge/Maintained-yes-green)
![Contributions - welcome](https://img.shields.io/badge/Contributions-welcome-blueviolet)

</div>

### Packages

You might want to list a dependency of your repo with the value actually in use, instead of a static badge.

Here we have Vue listed as a dependency of this Badge Generator repo and the version number changes to reflect what is in the `package.json` file.

<div align="center">

[![package - vue](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js&logoColor=white)](https://www.npmjs.com/package/vue)

</div>

### Dynamic data

Similar to above but more flexible.

Create a badge that references _any_ value within a public data file (currently only JSON files are supported by Badge Generator). The badge stays up to date with whatever value is in the target file.

In the example below, we lookup the version of VS Code IDE needed by a VS Code extension. The query is `$.engines.vscode` and that is done against this target [package.json](https://github.com/MichaelCurrin/auto-commit-msg/blob/master/package.json) file on GitHub.

<div align="center">

![auto-commit-msg](https://img.shields.io/badge/dynamic/json?label=vscode&query=%24.engines.vscode&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)

</div>

### Catalogue

Pre-made badges around languages and tools. Just copy and paste them - no form input needed. You might put a static value there for what version you support without making it dynamic.

If you can't find a badge you're looking for there, use the Generic badge option to make your own.

<div align="center">

[![OS - Linux](https://img.shields.io/badge/OS-Linux-blue?logo=linux&logoColor=white)](https://www.linux.org/ "Go to Linux homepage")
[![Made with Bash](https://img.shields.io/badge/Bash->=3-blue?logo=gnu-bash&logoColor=white)](https://www.gnu.org/software/bash/ "Go to Bash homepage")
[![Made with Python](https://img.shields.io/badge/Python->=3.6-blue?logo=python&logoColor=white)](https://python.org "Go to Python homepage")

</div>


## Documentation
> User guide for using the app and how setup and run the app yourself

<div align="center">

[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](/docs/#readme "Go to project documentation")

</div>


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).

- You can freely modify and reuse.
- The _original license_ must be included with copies of this software.
- Please _link back_ to this repo if you use a significant portion the source code.
