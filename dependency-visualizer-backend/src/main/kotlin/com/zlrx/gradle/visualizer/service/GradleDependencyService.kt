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

    @Value(value = "\${gradle.install.dir:#{null}}")
    private var gradleInstallDir: String? = null

    fun generateDependencyGraphData(scope: String): JsonDependencyModel {
        val dependencyCollector = GradleDependencyCollector(projectPath, gradleInstallDir)
        return mapToJson(dependencyCollector.collectDependency(), scope)
    }

    fun mapToJson(dependency: Dependency, scopeFilter: String): JsonDependencyModel {

        val groupId = dependency.getGroupId()
        val artifactId = dependency.getArtifactId()
        val version = dependency.getVersion()
        val scope = dependency.getScope()

        val dependencies = dependency.getChildren()
                .filter { it.getScope() == scopeFilter || it.getScope() == "module" }
                .map { mapToJson(it, scopeFilter) }

        return JsonDependencyModel(artifactId, dependencies, linkedMapOf("groupId" to groupId, "version" to version, "scope" to scope))
    }

}