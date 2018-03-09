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

        val filter = """\b$scopeFilter\b"""

        val dependencies = dependency.getChildren()
                .filter {
                    when (scopeFilter) {
                        "all" -> true
                        "module" -> it.getScope().contains("module")
                        "test" -> it.getScope().contains("test") || it.getScope().contains("module")
                        else -> it.getScope().contains(filter.toRegex()) || it.getScope().contains("module")
                    }
                }
                .map { mapToJson(it, scopeFilter) }

        return JsonDependencyModel(artifactId, dependencies, linkedMapOf("groupId" to groupId, "version" to version, "scope" to scope))
    }

}