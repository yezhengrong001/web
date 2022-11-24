# git
## 基础命令
* 未跟踪状态
* 跟踪状态
* 暂存
* 未提交状态（未修改  本地仓库）
* 提交状态（已修改 本地仓库）

1.初始化仓库: `git init`
2.查看仓库状态：`git status`
3.将文件添加至暂存区（将文件从未跟踪改为跟踪状态）：`git add`
  * git add `<filename>`指定添加文件
  * `git add *` 添加所有文件（当前git仓库下）
  * `git add *.c` 添加后缀名为.c的所有文件

4.将文件从暂存区添加到本地仓库：`git commit -m '提交说明'`
* `git commit -a -m '提交说明'`将所有修改文件进行提交

5.查看提交日志：`git log`
6.`git restore`
* `git restore <filename>`在未提交前可将文件恢复至修改前的状态
* `git restore --stage <filename>` 取消暂存状态
  
7.删除文件
* `git rm <filename>`删除文件
* `git rm -f <filename>`强制删除

## 分支
1.查看分支
```js
  git branch
```
2.创建分支
```js
  git branch (branch)name
```
3.切换分支
```js
  git switch (branch)name
```
4.合并分支
```js
  // 所有分支合并到自身分支分支
  git merge master
```
5.切换并创建分支
```js
  git switch -c (branch)name
```
6.删除分支
```js
  git branch -d (branch)name
```
7.在开发中，都是在自己的分支上边写代码，代码完成后，再将自己的分支合并到主分支中。
## 变基（rebase）
在开发中除了用merge合并分支外，还有`rebase`。因为实际开发中过程繁琐，用`rebase`更好
```js
  git rebase master
  //分支还未合并
```
## 远程仓库
1.创建远程仓库
```js
  git remote add (远程仓库)name url
```
2.修改分支名
`git branch -M main(分支名)`
3.推送
`git push -u name main`