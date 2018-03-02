package com.zlrx.gradle.visualizer.service

import com.zlrx.gradle.collector.GradleDependencyCollector
import com.zlrx.gradle.model.Dependency
import com.zlrx.gradle.visualizer.model.JsonDependencyModel
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service

@Service
class GradleDependencyService {

    @Value(value = "\${gradle.project.path}")
    private lateinit var projectPath: String

    @Value(value = "\${gradle.install.dir}")
    private lateinit var gradleInstallDir: String

    fun generateDependencyGraphData(): JsonDependencyModel {
        val dependencyCollector = GradleDependencyCollector(projectPath, gradleInstallDir)
        return mapToJson("", dependencyCollector.collectDependency())
    }

    fun mapToJson(parent: String, dependency: Dependency): JsonDependencyModel {

        val groupId = dependency.getGroupId()
        val artifactId = dependency.getArtifactId()
        val version = dependency.getVersion()
        val scope = dependency.getScope()
        val name = "$groupId:$artifactId:$version => $scope"

        val dependencies = dependency.getChildren().map { mapToJson(name, it) }

        return JsonDependencyModel(name, parent, dependencies)
    }

}