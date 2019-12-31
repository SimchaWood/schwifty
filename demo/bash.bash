# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
  . /etc/bashrc
fi

# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=

# User specific aliases and functions
alias nrep='grep -rn --exclude-dir=node_modules --exclude-dir=build --exclude-dir=dist --exclude-dir=.git'
alias ntest='mocha -R nyan'
alias rm='rm -i'
alias sourceb='source ~/.bashrc'
alias startdev='npm run start-dev'
alias testmon='npm run testmon'
alias vimb='ced ~/.bashrc'
alias work='cd $WORK'

history () {
  # history that syncs between concurrent terminal sessions
  if [ "$#" -eq 0 ] || [[ "$1" =~ ^[0-9] ]]; then
    # For `history` or `history #`, update history list before running
    # the command.
    command history -a
    command history -c
    command history -r
  fi
  command history "$@"
}

mcd () {
  # mkdir mydir & cd mydir
  mkdir "$1"
  cd "$1"
}

ted () {
  # touch myfile.txt & code(-insider) myfile.txt
  for fname in "$@"
  do
    touch "$fname"
    ced "$fname"
  done
}

foo () {
  for ((f=0; f<=5; f++))
  do
    echo "$f"
  done
}

export NODE_ENV=development

# Variable for current project directory
export WORK="$HOME/musket"

# modifications needed only in interactive mode
if [ "$PS1" != "" ]; then
  __bash_prompt () {
    # Using \[ and \] around colors is necessary to prevent
    # issues with command line editing/browsing/completion!
    local Red='\[\e[0;31m\]'; local BRed='\[\e[1;31m\]'
    local Green='\[\e[0;32m\]'; local BGreen='\[\e[1;32m\]'
    local Yellow='\[\e[0;33m\]'; local BYellow='\[\e[1;33m\]'
    local Blue='\[\e[0;34m\]'; local BBlue='\[\e[1;34m\]'
    local Magenta='\[\e[0;35m\]'; local BMagenta='\[\e[1;35m\]'
    local Cyan='\[\e[0;36m\]'; local BCyan='\[\e[1;36m\]'
    local White='\[\e[0;37m\]'; local BWhite='\[\e[1;37m\]'
    local Reset='\[\e[0m\]' # Reset to the default color.

    __git_ps1 "$Magenta\u$BYellow@$BMagenta\h$Reset:$Cyan\w$Reset" "$ " '(%s)'
  }

  export GREP_COLORS='mt=1;32:fn=1;36:se=0;31'


  # Set default editor for git
  git config --global core.editor /usr/bin/nano

  # Turn on checkwinsize
  shopt -s checkwinsize

  # keep more history
  shopt -s histappend
  export HISTCONTROL=ignoredups
  export HISTSIZE=100000
  export HISTFILESIZE=100000

  # Source for Git PS1 function
  if [ -f ~/.git-prompt.sh ]; then
    . ~/.git-prompt.sh
  fi
  
  export GIT_PS1_SHOWDIRTYSTATE=1
  export GIT_PS1_SHOWCOLORHINTS=1

  # We invoke `command history` so as not to call the override function above.
  export PROMPT_COMMAND='__bash_prompt; command history -a; command history -c; command history -r'
fi

read a b c <<< 'one two three'
echo $a $b $c

echo << END_TEXT
This is some multiline text
to be echoed.
END_TEXT
