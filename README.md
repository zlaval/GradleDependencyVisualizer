# GradleDependencyVisualizer

###v0.1.4

1, Set `gradle.install.dir` and `gradle.project.path` in application.properties.
If install dir is missing, it will download gradle 4.1.

2, Build project `gradle clean build publishToMavenLocal`. First time it may takes long time.

3, Start `dependency-visualizer-backend-0.1.4.jar`

4, Open `http://localhost:11687/`

