# Shell Scripting

<!-- TODO Commandline tutorial -->

Shell scripts allow us to program commands in chains and have the system execute them as a scripted event. Scripting also allows you to use programming functions — such as "for" loops, if/then/else statements, and so forth — directly within your operating system’s interface.

<!-- And, you don’t have to learn another language because you’re using what you already know: [the command-line](/docs/learning/the-command-line). -->

## Where it's used

- Automation of repetitive work
- Running a program or creating a program environment
- Performing system actions in environments where there is no access to other higher-level scripting runtimes - think [alpine linux](https://stackoverflow.com/a/44804509) and [circleci](https://circleci.com/docs/2.0/using-shell-scripts/)
- [Adding new functionality to your shell](https://gist.github.com/dropofwill/473b4bfdd4b2359ebf5f)

## Why it's useful

The biggest advantage of writing a shell script not having to install an interpreter as most systems will have some implementation. Another is that the commands and syntax are exactly the same as those directly entered at [the command-line](#TODO). The programmer does not have to switch to a totally different syntax, as they would if the script were written in a different language, or if a compiled language were used.

## Key Concepts

1. Create a shell script a file using a vi editor or any other editor. Give the file name with extension `.sh`
1. Start the script with [shebang](https://bash.cyberciti.biz/guide/Shebang)
1. Write the required code and save file.
1. execute the script file by type `<interpreter> <file>.sh` eg `sh script.sh`

## Considerations

- Prone to costly errors, a single mistake can change the command which might be harmful
- Design flaws within the language syntax or implementation
- Not well suited for large and complex task
- Provide minimal data structure unlike other scripting languages.

## What's out there?

These are the most widely used. It's a good idea to stick to these as they come standard in most systems - which is the main advantage of schell scripts, not having to install an interpreter.

- [BASH (Bourne Again SHell)](<https://en.wikipedia.org/wiki/Bash_(Unix_shell)>) – it is most widely used shell in Linux systems. It is used as default login shell in Linux systems and in macOS. It can also be installed on Windows OS.
- [ZSH (Z shell)](https://en.wikipedia.org/wiki/Z_shell) - Zsh is an extended Bourne shell with many improvements, including some features of Bash, ksh, and tcsh.
- [SH / ASH (Almquist shell)](https://en.wikipedia.org/wiki/Almquist_shell) - is a lightweight Unix shell

## Exercise

- Write a script that will git add, commit with a message (as an argument) and push to the current branch when run. [See answer here](answer-git-add-commit-push)

- Create a quick setup script to get the develop environment up and running for [this repository](https://github.com/radically-digital/radically-digital.github.io). [See answer here](answer-quick-setup-repo)

## Learn more

- [Awesome Shell](https://github.com/alebcay/awesome-shell)
- [Introduction to Linux Shell and Shell Scripting](https://www.geeksforgeeks.org/introduction-linux-shell-shell-scripting/)
- [Making a script](https://unix.stackexchange.com/a/429229)
- [Writing (safer) shell scripts](https://sipb.mit.edu/doc/safe-shell/)
