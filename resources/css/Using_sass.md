## How to build CSS for the Kalendar project:

### Assumptions:
This workflow is based around using the command line and VS Code on a Mac.  Most of this is portable, but may require a few extra tweaks on Windows.  The key bits are these:

- Sass (for CSS): [Installed for Command Line](https://sass-lang.com/install)

- [VS Code](https://code.visualstudio.com/) - A great development-oriented editor for hundreds of languages and tools.

- Autoprefixer (for creating/pruning browser-specific CSS automagically): [Link](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer)

### Overview:

In the first instance, we use [Sass](https://sass-lang.com/) to watch our changes to the scss files (which are broken down by function for organizational purposes).  Sass will automatically build our CSS file when we save changes to the scss files.

### Workflow

- First, we tell sass to watch for changes.
  - Open a terminal.
  - Navigate to the resources/css folder.
    - On my machine: 
      ``` cd ~/Developer/Github/Kalendar-2021/resources/css```
  - Now, tell Sass to watch the appropriate files.
    - ``` sass --watch sass/kalendar.scss kalendar.css```

- Open VS Code, and navigate to that same folder.
    - Inside, is the **sass** folder. These are the files you modify when you want to change the site's CSS. Sass will watch these, and recompile as you save.

- Note: Before you save for the last time, run autoprefixer.  This will make sure that your code is compatible with the widest range of browsers. To do this:
  - Open VS Code's command palette: For Mac, it's CMD + Shift + P
  - Choose 'Autoprefixer: run' (Start typing auto and it should come right up.)

- Once you're done, and autoprefixer has been run, save the file.  If you look in your terminal, you should see a message that it has been compiled.

- When you're done, and it's been compiled, there's one last step: making the compressed version.  This is as simple as running one more sass command.  So, head back to that terminal and make sure you're in the CSS directory from the first step. Now:
  - ```sass --watch sass/kalendar.scss:kalendar.min.css --style compressed```

  ### You did it!

  With these things done, you're ready to add/commit/push to github.  Congrats!
