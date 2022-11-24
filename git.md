# git
* 未跟踪状态
* 跟踪状态
* 未提交状态（本地仓库）
* 提交状态（本地仓库）

1.初始化仓库: `git init`
2.查看仓库状态：`git status`
3.将文件添加至暂存区（将文件从未跟踪改为跟踪状态）：`git add`
  * git add `<filename>`指定添加文件
  * `git add *` 添加所有文件（当前git仓库下）
  * `git add *.c` 添加后缀名为.c的所有文件

4.将文件从暂存区添加到本地仓库：`git commit -m '提交说明'`
* `git commit -a -m '提交说明'`将所有修改文件进行提交

5.查看提交日志：`git log`
6.